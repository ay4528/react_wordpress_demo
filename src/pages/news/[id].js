import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import PostFv from "../../../components/common/PostFv"
import PageLayout from "../../../components/views/PageLayout"
import axios from "axios"
import parse from "html-react-parser"
import Link from "next/link"

export const getStaticPaths = async () => {
	const posts = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`)
	return {
		paths: posts.data.map((post) => ({
			params: {
				id: post.id.toString()
			}
		})),
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${params.id}`)
	return {
		props: {
			post: res.data
		}
	}
}

const handleToDate = (date) => {
	date = new Date(date);
	date = date.getFullYear() + "." + (date.getMonth() % 12 + 1) + "." + date.getDate()
	return date;
}

const SinglePost = ({ post }) => {
	return (
		<>
			<Header />

			<PostFv title={post.title.rendered} date={handleToDate(post.date)} />

			<PageLayout>
				<div className="single_page">
					<div className="content">
						<div className="wrap02">
							{parse(post.content.rendered)}
						</div>
					</div>

					<div class="ichiran_btn arial_font">
						<Link href="/news">NEWS</Link>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default SinglePost
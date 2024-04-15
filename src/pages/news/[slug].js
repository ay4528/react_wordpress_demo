import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import PostFv from "../../../components/common/PostFv"
import PageLayout from "../../../components/views/PageLayout"
import parse from "html-react-parser"
import Link from "next/link"
import { gql } from "@apollo/client"
import { client } from "../../../lib/api"

export const getStaticPaths = async () => {
	const GET_POSTS = gql`
		query getAllPostsSlugs {
			posts {
				nodes {
					slug
				}
			}
		}
	`
	const response = await client.query({
		query: GET_POSTS,
	})
	const posts = response?.data?.posts?.nodes
	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.slug
			}
		})),
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const GET_POST = gql`
		query getPostBySlug($slug: ID!) {
			post(id: $slug, idType: SLUG) {
				content
				date
				id
				link
				slug
				title
			}
		}
	`
	const response = await client.query({
		query: GET_POST,
		variables: {
            slug: params.slug
        }
	})
	const post = response?.data?.post
	return {
		props: {
			post
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

			<PostFv title={post.title} date={handleToDate(post.date)} />

			<PageLayout>
				<div className="single_page">
					<div className="content">
						<div className="wrap02">
							{parse(post.content)}
						</div>
					</div>

					<div className="ichiran_btn arial_font">
						<Link href="/news">NEWS</Link>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default SinglePost
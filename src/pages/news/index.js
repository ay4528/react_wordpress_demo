import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Link from "next/link"
import { gql } from "@apollo/client"
import { client } from "../../../lib/api"

export const getStaticProps = async () => {
	const GET_POSTS = gql`
		query getAllPosts {
			posts {
				nodes {
					content
					date
					id
					link
					slug
					title
				}
			}
		}
	`
	const response = await client.query({
		query: GET_POSTS,
	})
	const posts = response?.data?.posts?.nodes
	return {
		props: {
			posts
		}
	}
}

const ArchiveNews = ({ posts }) => {

	const handleToDate = (date) => {
		date = new Date(date);
		date = date.getFullYear() + "." + (date.getMonth() % 12 + 1) + "." + date.getDate()
		return date;
	}

	const handleContent = (text) => {
		text = text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
		return text
	}

	return (
		<>
			<Header />

			<CommonFv bread="NEWS" title="新着お知らせ" subtitle="NEWS" />

			<PageLayout>
				<div className="archive_box news_archive_box">
					<div className="wrap02">
						<div className="news_list">
							<ul>
								{posts.map((post) => (
									<li key={post.id}>
										<Link href={`/news/${post.slug}`}>
											<p className="cat arial_font">NEWS</p>
											<div className="text_box">
												<div className="title_box">
													<p className="date arial_font">{handleToDate(post.date)}</p>
													<p className="title">{post.title}</p>
												</div>
												<p className="text">{handleContent(post.content)}</p>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default ArchiveNews

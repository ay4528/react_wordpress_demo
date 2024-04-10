import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"

const ArchiveNews = () => {
	const [posts, setPost] = useState([])

	useEffect(() => {
		const getPosts = async () => {
			axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`, {
				mode: "no-cors"
			})
				.then((res) => {
					setPost(res.data)
				})
				.catch((error) => {
					console.log(error)
				})
		}
		getPosts()
	}, [])

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
										<Link href={`/news/${post.id}`}>
											<p className="cat arial_font">NEWS</p>
											<div className="text_box">
												<div className="title_box">
													<p className="date arial_font">{handleToDate(post.date)}</p>
													<p className="title">{post.title.rendered}</p>
												</div>
												<p className="text">{handleContent(post.content.rendered)}</p>
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

import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"

const TopNews = () => {
	const [posts, setPost] = useState([])

	useEffect(() => {
		const getPosts = async () => {
			const postNum = window.innerWidth > 750 ? '4' : '2'
			axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?per_page=${postNum}`)
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

	return (
		<section className="top_news">
			<div className="wrap02">
				<div class="common_h2_box">
					<p class="common_sub_h2 arial_font">NEWS</p>
					<h2 class="common_h2">新着情報一覧</h2>
				</div>
				<div className="top_news_list">
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<Link href={`/news/${post.id}`}>
									<p className="category">NEWS</p>
									<time className="date arial_font">{handleToDate(post.date)}</time>
									<p className="title">{post.title.rendered}</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default TopNews

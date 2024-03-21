import { useState, useEffect } from "react"
import useSWR from "swr"
import Link from "next/link"

async function fetcher(key) {
	return fetch(key).then((res) => res.json())
}

const TopNews = () => {
	const {data, error, isLoading} = useSWR("http://makesview-kawajiri.test.makesview-web25.penguin04.com/wp-json/wp/v2/posts", fetcher)

	if (error) return <div>エラーです</div>
	if (isLoading) return <div>読み込み中</div>

	return (
		<section className="top_news">
			<div className="wrap02">
				<div class="common_h2Box">
					<p class="common_sub_h2 arial_font">NEWS</p>
					<h2 class="common_h2">新着情報一覧</h2>
				</div>
				<div className="top_news_list">
					{/* {data.map((post) => (
						<div>
							<Link href={post.link}>
								<p>{post.title.rendered}</p>
							</Link>
						</div>
					))} */}
				</div>
			</div>
		</section>
	)
}

export default TopNews
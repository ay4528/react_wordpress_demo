import Link from "next/link"

const TopNews = ({ posts }) => {
	
	const handleToDate = (date) => {
		date = new Date(date);
		date = date.getFullYear() + "." + (date.getMonth() % 12 + 1) + "." + date.getDate()
		return date;
	}

	return (
		<section className="top_news">
			<div className="wrap02">
				<div className="common_h2_box">
					<p className="common_sub_h2 arial_font">NEWS</p>
					<h2 className="common_h2">新着情報一覧</h2>
				</div>
				<div className="top_news_list">
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<Link href={`/news/${post.slug}`}>
									<p className="category">NEWS</p>
									<time className="date arial_font">{handleToDate(post.date)}</time>
									<p className="title">{post.title}</p>
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

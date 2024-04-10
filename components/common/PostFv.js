import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

const PostFv = (props) => {
	const { title, date } = props
	const router = useRouter()

	return (
		<>
			<div className="breadcrumb arial_font">
				<div className="wrap">
					<ul>
						<li>
							<Link href="/">HOME</Link>
						</li>
						<li>
							<Link href="/news">NEWS</Link>
						</li>
						<li>{title}</li>
					</ul>
				</div>
			</div>

			<div className="common_page_h1Box news">
				<div className="wrap02">
					<p class="common_page_sub_h1 arial_font">NEWS</p>
					<div class="inner">
						<p class="category arial_font">NEWS</p>
						<h1 class="common_page_h1">{title}</h1>
						<time class="date arial_font">{date}</time>
						<ul class="share">
							<li class="twitter">
								<Link href={`http://twitter.com/share?text=${title}&url=https://makes-view.co.jp${router.asPath}`} rel="nofollow" target="_blank">
									<Image src="/twitter_share.png" width={160} height={40}/>
								</Link>
							</li>
							<li class="facebook">
								<Link href={`https://www.facebook.com/sharer/sharer.php?u=https://makes-view.co.jp${router.asPath}`} target="_blank">
									<Image src="/facebook_share.png" width={160} height={40}/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default PostFv
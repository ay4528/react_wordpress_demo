import Image from "next/image"
import Link from "next/link"

const TopRecruit = () => {
	return (
		<section className="top_recruit">
			<div className="image">
				<Image src="/recruit_image.jpg" width={1920} height={753} alt="メイクスビュー社員" />
			</div>
			<div className="wrap">
				<div className="text_box">
					<div className="common_h2_box">
						<p className="common_sub_h2 arial_font">RECRUIT</p>
						<h2 className="common_h2">採用情報</h2>
					</div>
					<div className="right_box">
						<h3 className="title">働く楽しみが<br />人生に幸せをもたらす</h3>
						<p className="text">人生において働く以外の時間で幸せを感じることは大切です。さらに働くことも楽しいと思えたら、それって最高に幸せな人生だと私たちは考えます。<br className="pc" />メイクスビューで働く楽しさを一緒に体感しませんか？</p>
						<p className="link arial_font">
							<Link href="/recruitment" target="_blank">RECRUIT SITE</Link>
						</p>
					</div>
				</div>
				<div className="top_recruit_button">
					<Link href="/recruitment/joblist" target="_blank">
						<span></span>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default TopRecruit

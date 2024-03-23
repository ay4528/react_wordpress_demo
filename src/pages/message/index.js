import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Image from "next/image"

const Message = () => {
	return (
		<>
			<Header />

			<CommonFv bread="MESSAGE" title="代表挨拶" subtitle="MESSAGE" pageslug="company" />

			<PageLayout>
				<div className="page_message common_page_team">
					<div className="message_inner">
						<div className="message_image">
							<Image className="pc" src="/message_image.jpg" width={1920} height={774} alt="代表取締役 光田 亮介" />
							<Image className="sp" src="/message_image_sp.jpg" width={750} height={461} alt="代表取締役 光田 亮介" />
						</div>
						<div className="wrap02">
							<div className="message_titleBox sp">
								<p className="sub_title arial_font">MESSAGE</p>
								<h2 className="title">多くの人にとっての<br />インフルエンサーとなる</h2>
							</div>
							<p className="message_text">
								実は私は、小さい頃からずっと愛知県で警察官を目指していました。<br />
								残念ながら夢破れ就職浪人を目前に控えた中、東京へ出て行くことを決意し民間企業へ就職しました。<br />
								就職した会社では人間関係や与えられる仕事に恵まれ、常に自分の成長を感じながら社会人生活を送ることができました。<br />
								ある時上司との話の中で「自分が人生で一番最高の瞬間はどんな時だったか」を考えさせられることがありました。<br />
								私にとっての答えは、学生時代の部活動でした。<br />
								自分がキャプテンとして周りの人間に影響を与え、周りの環境が熱くなっていくのを実感した時でした。<br />
								そういう人間をインフルエンサー（影響を与える人）と言います。私はより多くの人に対してインフルエンサーでありたいと考え、<br className="pc" />
								それを実現する手段が会社経営だと判断しメイクスビューを起業しました。これが私個人の人生目標であり、<br className="pc" />
								メイクスビューを通して成し遂げたい夢でもあります。メイクスビューに関わった一人でも多くの方にとっての<br className="pc" />
								インフルエンサーとなれるよう私自身、日々精進していきますので、皆様今後ともメイクスビューを宜しくお願いいたします。
							</p>
							<p className="message_name">
								<Image src="/message_name.svg" width={780} height={80} alt="代表取締役 光田 亮介" />
							</p>
						</div>
					</div>
					<div className="message_titleBox pc">
						<p className="sub_title arial_font">MESSAGE</p>
						<h2 className="title">多くの人にとっての<br />インフルエンサーとなる</h2>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Message
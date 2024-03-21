import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Link from "next/link"
import Image from "next/image"

const BridalTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="BRIDAL TEAM" title="ブライダルチーム" subtitle="BRIDAL TEAM" />

			<PageLayout>
				<div className="page_bridal common_page_team">
					<div className="wrap02">
						<p className="team_child_text">
							幸せの形が自由になった現代、ウェディングの形も多様化しています。基礎知識はもちろん、既存に捉われない柔軟性、市場への知見から生まれるトレンド性、そしてクリエイティブな視点でお客様に寄り添ったウェディングの形をお届けします。
						</p>
						<div className="team_child_contentsBox">
							<div className="team_child_contents second">
								<h2 className="title">Style Lily（ウェディングプロデュース）</h2>
								<div className="inner">
									<div className="textBox">
										<p className="text">
											フォトウェディングやナシ婚といった、親族や友人を呼んでの結婚式自体を挙げない方も多くなってきました。<br />
											その中には、授かり婚や国際結婚、再婚などの夫婦事情があったり、結婚式にかかる費用面でのハードルがあったりして、諦めている方の話もよく耳にします。<br />
											Style Lilyのコンセプトはまさに、結婚式場で式を挙げるのにはハードルが高い方や、こだわりが強いが高いお金をかけられない方へ、披露宴より費用面の負担が安く、しかし格式は高いそんな結婚式をお贈りすることにあります。<br />
											ふたりの思い出のカフェやレストラン、ライブハウスなど、結婚式を挙げたいと思うロケーションやテーマで、0から作る オリジナルの結婚式をStyle Lilyにプロデュースさせて下さい。
										</p>
									</div>
									<div className="linkBox">
										<Link href="">
											<div className="link_image">
												<Image src="/brand_image02.png" width={1100} height={560} alt="Style Lilly" />
											</div>
											<p className="link_text">Style LilyのHPへ</p>
										</Link>
									</div>
								</div>
							</div>
							<div className="team_child_contents second">
								<div className="inner">
									<h2 className="title">Style Rosé（オンラインショップ）</h2>
									<div className="textBox">
										<p className="text">
											はじめてのこと、決めないといけないことが沢山ある結婚式。理想は沢山あるけれど、分からないことばかりで時間もない。幸せはもちろんだけど、不安や焦りでいっぱい…<br />
											そんな花嫁様へお贈りする日本唯一のウェディング専門ショップです。“準備期間をもっと楽しんで、人生最高の1日を迎えて欲しい“そんな想いで立ち上げました。<br />
											眺めているだけでハッピーになれる、自信がでてくる。<br className="pc" />そんな魔法のようなアイテムをとりそろえています。
										</p>
									</div>
									<div className="linkBox">
										<Link href="">
											<div className="link_image">
												<Image src="/bridal_link_image01.jpg" width={550} height={280} alt="Style Rosé"/>
											</div>
											<p className="link_text">Style RoséのHPへ</p>
										</Link>
									</div>
								</div>
							</div>
							<div className="team_child_contents second">
								<div className="inner">
									<h2 className="title">Wedding Diary（ウェディングコラム）</h2>
									<div className="textBox">
										<p className="text">
											結婚にまつわる疑問にお答えするウェディングコラムです。基本的なマナーや最新トレンド、独自の視点で捉えた情報もお届けしています。また、実際のプロポーズ体験談や、Instagramの花嫁アカウントとの連携など、リアルにこだわったコンテンツを充実させています。<br />
											お悩み相談にくるような気分で、ぜひ覗いてみてください。新しい体験がここにあります。
										</p>
									</div>
									<div className="linkBox">
										<Link href="">
											<div className="link_image">
												<Image src="/bridal_link_image02.jpg" width={550} height={280} alt="Wedding Diary"/>
											</div>
											<p className="link_text">Wedding DiaryのHPへ</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default BridalTeam
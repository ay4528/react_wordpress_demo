import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Link from "next/link"
import Image from "next/image"

const MediaTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="MEDIA TEAM" title="メディアチーム" subtitle="MEDIA TEAM" />

			<PageLayout>
				<div className="page_media common_page_team">
					<div className="wrap02">
						<p className="team_child_text">
							メディアチームは、「有益な情報」を提供し、生活をより便利にする様々なウェブサービスを運営しています。<br />
							効果性の高いマーケティング施策のナレッジを蓄積。これらをWEBコンサルティング事業と連携し、お客さまのマーケティング課題解決にも活かしています。
						</p>
						<div className="team_child_contentsBox">
							<div className="team_child_contents second">
								<h2 className="title">AAATake!</h2>
								<div className="inner">
									<div className="textBox">
										<p className="text">
											世の中に溢れるデリバリー・オンラインビジネスを一つにまとめ、生活のあらゆるシーンに根付くサービスに。<br />
											ハウスクリーニング、出張カメラマン、出張ネイリスト、出張整体に出張似顔絵や出張マジシャンなど様々な業種の出張・訪問サービスの情報を掲載しています。<br />
											世の中に溢れる、様々なデリバリー・オンラインビジネス情報をこの一箇所に集め、誰もが利用しやすい「安全・安心」で、生活も遊びにも欠かせないポータルサイトです。
										</p>
									</div>
									<div className="linkBox">
										<Link href="https://aaatake.jp/" target="_blank">
											<div className="link_image">
												<Image src="/aaatake_link_image.jpg" width={550} height={280} alt="AAATake!"/>
											</div>
											<p className="link_text">AAATake!のHPへ</p>
										</Link>
									</div>
								</div>
							</div>

							<div className="team_child_contents second">
								<h2 className="title">カソット</h2>
								<div className="inner">
									<div className="textBox">
										<p className="text">
											カソットは、賃貸経営をしているオーナー様に向けた賃貸管理会社を検索できるサイトです。<br />
											賃貸管理会社ごとの特集ページを用意しています。強みや過去の実績情報を配信し、豊富な管理会社情報でオーナー様が求めている会社とのベストなマッチングを実現します。
										</p>
									</div>
									<div className="linkBox">
										<Link href="https://kaso-tto.com/" target="_blank">
											<div className="link_image">
												<Image src="/brand_image06.png" width={420} height={240} alt="カソット"/>
											</div>
											<p className="link_text">カソットのHPへ</p>
										</Link>
									</div>
								</div>
							</div>

							<div className="team_child_contents second">
								<h2 className="title">ウロット</h2>
								<div className="inner">
									<div className="textBox">
										<p className="text">
											ウロットは不動産売却で失敗したくないオーナー様のためのポータルサイトです。
											それぞれの不動産会社の特徴を掲載しており、ネットで不動産会社探しをする際に手間だった「どこの会社が自分に合っているか」を一つのサイトで簡単に見つけることができます。
										</p>
									</div>
									<div className="linkBox">
										<Link href="https://uro-tto.com/" target="_blank">
											<div className="link_image">
												<Image src="/brand_image07.png" width={420} height={240} alt="ウロット"/>
											</div>
											<p className="link_text">ウロットのHPへ</p>
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

export default MediaTeam
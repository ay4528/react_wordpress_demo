import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"

const WebdesignTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="WEB DESIGN TEAM" title="Webデザインチーム" subtitle="WEB DESIGN TEAM" />

			<PageLayout>
				<div className="page_webdesign common_page_team">
					<div className="wrap02">
						<p className="team_child_text">
							Webサイトは365日24時間だれでも見ることができるものです。<br />
							そのため、だれにとっても使いやすく分かりやすいことが大切です。
						</p>
						<div className="team_child_contentsBox">
							<div className="team_child_contents">
								<h2 className="title">圧倒的webデザイン</h2>
								<p className="text">
									エンドユーザーは何がしたいのか、どんな情報が欲しくてサイトを見ているのかを常に配慮することで、<br />
									ユーザビリティーの高いサイトを制作します。<br />
									また、(Makesview or 私たち)のweb制作はスピード感が売りです。<br />
									その強みを崩すことなくクオリティも損なわないデザインを提供しております。
								</p>
							</div>
							<div className="team_child_contents">
								<h2 className="title">クライアントの思いをカタチに</h2>
								<p className="text">
									その他にも、webデザインチームでは簡単な動画・アニメーションの制作も行なっております。<br />「静止画では伝わらない」「訴求力を高めたい」そのようなクライアントの思いをカタチにします。
								</p>
							</div>
						</div>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default WebdesignTeam
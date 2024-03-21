import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"

const EngineerTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="FRONT ENGINEER TEAM" title="Webエンジニアチーム" subtitle="WEB ENGINEER TEAM" />

			<PageLayout>
				<div className="page_engineer common_page_team">
					<div className="wrap02">
						<div className="team_child_contentsBox">
							<div className="team_child_contents">
								<h2 className="title">お客様の目的を達成するためのホームページ作り</h2>
								<p className="text">
									私たちは主に<br />
									「ホームページ制作」「レスポンシブWEBデザイン」「ホームページリニューアル」「CMS導入」「運用サポート」「保守運用業務」「SEO対策」<br />
									などを行なっております。<br /><br />
									私たちはホームページは育てていくものと捉えております。<br />
									世の中の流行やニーズというものは日々変化していきます。<br />
									新しく作ったホームページも、放置してそのまま何年も更新しないと結果は上がりません。<br />
									ユーザーに対して常に求められている情報やコンテンツを提供していく必要があります。<br />
									私たちはそういう前提なので、ホームページをお作りした後もプラスアルファの提案でお客様のホームページを一緒に育てていきます。
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

export default EngineerTeam
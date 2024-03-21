import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"

const DevelopmentTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="DEVELOPMENT TEAM" title="ディベロップメントチーム" subtitle="DEVELOPMENT TEAM" />

			<PageLayout>
				<div className="page_development common_page_team">
					<div className="wrap02">
						<p className="team_child_text">
							業務の効率化・人員の削減・確保。<br />
							既存の業務をコンピューターにさせる事で、業務にかかる時間を減らし、人手が必要な作業に集中させられる。<br />
							または、新たなサービスを考え構築し形にする為のシステム開発。<br />
							WEBシステムから社内管理アプリの開発などまずはお気軽にご相談ください。
						</p>
						<div className="team_child_contentsBox">
							<div className="team_child_contents">
								<h2 className="title">パッケージ開発</h2>
								<p className="text">wordpressやshopifyなど既存のサービスのカスタマイズや、APIを活用したシステム開発を行います。</p>
							</div>
							<div className="team_child_contents">
								<h2 className="title">スクラッチ開発</h2>
								<p className="text">
									完全にゼロベースからシステムを構築します。<br />
									クライアントの実現したいことや予算に応じて柔軟に設計やご提案を致します。
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

export default DevelopmentTeam
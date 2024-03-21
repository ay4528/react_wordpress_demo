import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"

const MarketingTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="MARKETING TEAM" title="マーケティングチーム" subtitle="MARKETING TEAM" />

			<PageLayout>
				<div className="page_marketing common_page_team">
					<div className="wrap02">
						<p className="team_child_text">
							豊富なマーケティング支援の実績で課題を解決し、ビジネスを加速させます。<br />
							変化の激しいWEB業界において、常に最新のトレンドやマーケットニーズを見極めながら、効果的な広告やプロモーションプランを提案しております。
						</p>
						<div className="team_child_contentsBox">
							<div className="team_child_contents">
								<h2 className="title">独自のSEOノウハウ</h2>
								<p className="text">
									独自のSEOノウハウを強みに、SEO/Webコンサルティングやコンテンツマーケティング、ユーザー解析に基づくWebサイト改善コンサルティングを提供しています。<br />
									SEO経由で獲得したユーザーについて、広告換算価値を計算。適切な投資意思決定を支援し、長期的で安定した集客を実現します。
								</p>
							</div>
							<div className="team_child_contents">
								<h2 className="title">継続的な収益最大化を実現</h2>
								<p className="text">
									継続的な収益最大化を実現するマーケティングパートナーとして、顧客の利益を最大化します。<br />
									WEB広告で新たな観客との出会いを、GoogleやYahooをはじめSNSなど多くのサービスを通じて、顧客の事業拡大を実現します。
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

export default MarketingTeam
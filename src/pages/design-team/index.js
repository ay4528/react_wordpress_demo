import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"

const DesignTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="DESIGN TEAM" title="デザインチーム" subtitle="DESIGN TEAM" />

			<PageLayout>
				<div className="page_design common_page_team">
					<div className="wrap02">
						<p className="team_child_text">
							クライアントやエンドユーザーの価値観を第一に考え寄り添い、その上でたくさんのモノやコトがあふれる「成熟社会」と形容される現代における、大切にすべきビジュアルコミュニケーションの在り方を思考し、提案いたします。<br />
							クライアントの独自性や想いを第一に、競合他社や街の親和性、他の媒体での展開も考慮するロゴデザイン。<br />
							思わず目を奪われる魅力的なチラシ、フライヤー、パンフレットのデザイン。<br />
							キャラクターだからこそ出来るサービスや展開を考慮したオリジナルのキャラクターデザイン。<br />
							お客様の経営に役立つような、喜んでいただけるデザインをご提供いたします。
						</p>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default DesignTeam
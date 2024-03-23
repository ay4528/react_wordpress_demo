import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"

const Profile = () => {
	return (
		<>
			<Header />

			<CommonFv bread="PROFILE" title="会社情報" subtitle="PROFILE" pageslug="company" />

			<PageLayout>
				<div className="page_profile common_page_team">
					<div className="wrap02">
						<div className="common_page_h2Box">
							<p className="common_page_sub_h2 arial_font">ABOUT US</p>
							<h2 className="common_page_h2">会社概要</h2>
						</div>
						<div className="company_tableBox">
							<table>
								<tbody>
									<tr>
										<th>商号</th>
										<td>株式会社メイクスビュー <br className="sp" />makesview Co., Ltd.</td>
									</tr>
									<tr>
										<th>OSAKA OFFICE</th>
										<td>〒530-0047<br />大阪府大阪市北区西天満3-1-6<br className="sp" />辰野西天満ビル2F</td>
									</tr>
									<tr>
										<th>TOKYO OFFICE</th>
										<td>〒141-0022<br />東京都品川区東五反田1-10-7<br className="sp" />アイオス五反田511</td>
									</tr>
									<tr>
										<th>TEL（代表）</th>
										<td>06-6125-5765</td>
									</tr>
									<tr>
										<th>FAX</th>
										<td>06-6125-5685</td>
									</tr>
									<tr>
										<th>代表取締役</th>
										<td>光田亮介</td>
									</tr>
									<tr>
										<th>取締役</th>
										<td>大島広之 平野権太郎</td>
									</tr>
									<tr>
										<th>設立</th>
										<td>2015年10月</td>
									</tr>
									<tr>
										<th>資本金</th>
										<td>1,000万円</td>
									</tr>
									<tr>
										<th>従業員数</th>
										<td>27人</td>
									</tr>
									<tr>
										<th>顧問税理士事務所</th>
										<td>伊東晃集税理士事務所</td>
									</tr>
									<tr>
										<th>顧問弁護士事務所</th>
										<td>福本・水野法律事務所</td>
									</tr>
									<tr>
										<th>適格請求書事業者登録番号</th>
										<td>T5-1200-0119-3685</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Profile
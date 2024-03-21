import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Image from "next/image"

const Office = () => {
	return (
		<>
			<Header />

			<CommonFv bread="OFFICE" title="オフィス紹介" subtitle="OFFICE" />

			<PageLayout>
				<div className="page_office">
					<div className="wrap02">
						<div className="page_office_about">
							<h2 className="page_office_h2">新しいビジネスを創出する、大阪のイノベーション拠点</h2>
							<p className="page_office_txt">
								大阪の新オフィスが、2022年1月に完成した。オフィスを新設した背景には、TEAM構成が多様化していく中、「よりアイディアとコミュニケーションが生まれる職場としたい」という想いがあった。<br /><br />
								新オフィスの設計には「アクティビティー・ベースト・ワーキング（ABW）」の考えを取り入れた。
								ABWは、仕事内容に合わせて自由に場所を選び、より生産性の高い働き方を実現するというオランダ発の設計思想。<br /><br />
								単にフリーアドレスを導入するだけでなく、随所に多彩な打ち合わせスペースを配置したり、集中作業向きのカウンター席など、仕事の質を高める多様な仕掛けを導入している。
							</p>
						</div>
						<ul className="office_pic_ul">
							<li>
								<Image src="/office01.jpg" width={1200} height={800} />
							</li>
							<li>
								<Image src="/office02.jpg" width={1200} height={800} />
							</li>
							<li>
								<Image src="/office03.jpg" width={1200} height={800} />
							</li>
							<li>
								<Image src="/office04.jpg" width={1200} height={800} />
							</li>
							<li>
								<Image src="/office05.jpg" width={1200} height={800} />
							</li>
							<li>
								<Image src="/office06.jpg" width={1200} height={1620} />
							</li>
							<li>
								<Image src="/office07.jpg" width={1200} height={800} />
							</li>
							<li>
								<Image src="/office08.jpg" width={1200} height={800} />
							</li>
						</ul>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Office
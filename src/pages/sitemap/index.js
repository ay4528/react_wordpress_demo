import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Link from "next/link"

const Sitemap = () => {
	return (
		<>
			<Header />

			<CommonFv bread="SITE MAP" title="サイトマップ" subtitle="SITE MAP" />

			<PageLayout>
				<div className="page_sitemap common_page_team">
					<div className="wrap">
						<ul id="sitemap_list" className="sitemap_disp_level_1">
							<li>
								<Link href="/category/news">NEWS</Link>
							</li>
							<li>
								<Link href="/bridal-team">BRIDAL TEAM</Link>
							</li>
							<li>
								<Link href="/contact">CONTACT</Link>
							</li>
							<li>
								<Link href="/design-team">DESIGN TEAM</Link>
							</li>
							<li>
								<Link href="/development-team">DEVELOPMENT TEAM</Link>
							</li>
							<li>
								<Link href="/direction-team">DIRECTION TEAM</Link>
							</li>
							<li>
								<Link href="/f-media-team">F-MEDIA TEAM</Link>
							</li>
							<li>
								<Link href="/front-engineer-team">FRONT ENGINEER TEAM</Link>
							</li>
							{/* <li>
								<Link href="/goal2023">Goal2023</Link>
							</li>
							<li>
								<Link href="/goal2024">Goal2024</Link>
							</li> */}
							<li>
								<Link href="/history">HISTORY</Link>
							</li>
							<li>
								<Link href="/marketing-team">MARKETING TEAM</Link>
							</li>
							<li>
								<Link href="/media-team">MEDIA TEAM</Link>
							</li>
							<li>
								<Link href="/member">MEMBER</Link>
							</li>
							<li>
								<Link href="/message">MESSAGE</Link>
							</li>
							<li>
								<Link href="/office">OFFICE</Link>
							</li>
							<li>
								<Link href="/privacy">PRIVACY POLICY</Link>
							</li>
							<li>
								<Link href="/profile">PROFILE</Link>
							</li>
							<li>
								<Link href="/sitemap">SITE MAP</Link>
							</li>
							<li>
								<Link href="/webdesign-team">WEB DESIGN TEAM</Link>
							</li>
							{/* <li>
								<Link href="/seminar">セミナー</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Sitemap
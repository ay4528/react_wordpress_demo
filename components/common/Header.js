import Hamburger from "../parts/Hamburger"
import CommonHead from "./CommonHead"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
	return (
		<>
			<CommonHead/>

			<div className="pc">
				<header className="top_header">
					<div className="wrap">
						<div className="hd_box">
							<div className="header_logo">
								<Link href="/">
									<Image src="/logo.svg" width={174} height={44} alt="makes view" />
								</Link>
							</div>
							<nav className="header_nav">
								<ul className="arial_font">
									<li className="menu_single">
										<a className="pointer_none">TEAM</a>
										<ul className="menu_second">
											<li>
												<Link href="/direction-team">DIRECTION</Link>
											</li>
											<li>
												<Link href="/webdesign-team">WEB DESIGN</Link>
											</li>
											<li>
												<Link href="/front-engineer-team">WEB ENGINEER</Link>
											</li>
											<li>
												<Link href="/design-team">DESIGN</Link>
											</li>
											<li>
												<Link href="/bridal-team">BRIDAL</Link>
											</li>
											<li>
												<Link href="/marketing-team">MARKETING</Link>
											</li>
											<li>
												<Link href="/development-team">DEVELOPMENT</Link>
											</li>
											<li>
												<Link href="/media-team">MEDIA</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link href="/member">MEMBER</Link>
									</li>
									<li>
										<Link href="/office">OFFICE</Link>
									</li>
									<li>
										<Link href="/news">NEWS</Link>
									</li>
									<li className="menu_single">
										<a className="pointer_none">COMPANY</a>
										<ul className="menu_second">
											<li>
												<Link href="/profile">PROFILE</Link>
											</li>
											<li>
												<Link href="/message">MESSAGE</Link>
											</li>
											<li>
												<Link href="/history">HISTORY</Link>
											</li>
										</ul>
									</li>
									<li className="recruit">
										<Link href="/recruitment" target="_blank">RECRUIT</Link>
									</li>
									<li>
										<Link href="/contact">CONTACT</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
			</div>

			<div className="sp">
				<div className="sp_hd">
					<div className="sp_hd_logo">
						<a href="/">
							<Image src="/logo.svg" width={175} height={44} alt="makesview" />
						</a>
					</div>
				</div>
				<Hamburger/>
			</div>
		</>
	)
}

export default Header
import { useState } from "react"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"
import Link from "next/link"
import Image from "next/image"

const Hamburger = () => {

	const [active, setActive] = useState(false)
	const ToggleHamburger = () => {
		setActive(!active)
	}

	return (
		<>
			<>
				<button className={`hamburger ${active ? "active" : ""}`} onClick={() => { ToggleHamburger() }}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</>

			<nav className={`global_menu ${active ? "active" : ""}`}>
				<div className="inner">
					<div className="list">
						<ul>
							<li>
								<Link href="/">TOP</Link>
							</li>
							<li>
								<Accordion allowZeroExpanded>
									<AccordionItem>
										<AccordionItemHeading>
											<AccordionItemButton>TEAM</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
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
													<Link href="design-team/">DESIGN</Link>
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
										</AccordionItemPanel>
									</AccordionItem>
								</Accordion>
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
							<li>
								<Accordion allowZeroExpanded>
									<AccordionItem>
										<AccordionItemHeading>
											<AccordionItemButton>COMPANY</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
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
										</AccordionItemPanel>
									</AccordionItem>
								</Accordion>
							</li>
							<li className="recruit">
								<Link href="/recruitment">RECRUIT</Link>
							</li>
							<li>
								<Link href="/contact">CONTACT</Link>
							</li>
						</ul>
					</div>
					<div className="sp_sub_menu">
						<div className="sub_menu arial_font">
							<p className="text">
								<Link href="/privacy">PRIVACY POLICY</Link>
							</p>
							<p className="text">
								<Link href="/sitemap">SITE MAP</Link>
							</p>
						</div>
						<div className="sp_partner">
							<Image src="/partner_icon.svg" width={61} height={41} alt="Google Partner" />
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Hamburger
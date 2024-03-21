import Link from "next/link"
import Image from "next/image"

const Footer = () => {
	return (
		<>
			<section className="footer_contact">
				<div className="wrap">
					<Link href="/contact">
						<svg className="circle" viewBox="0 0 60 60"><circle class="st0" cx="30" cy="30" r="28" /></svg>
						<h2 className="title arial_font">CONTACT US</h2>
						<p className="text">
							ご依頼やご相談<br />採用に関してのお問い合わせはこちら
						</p>
					</Link>
				</div>
			</section>

			<footer className="top_footer">
				<div className="wrap">
					<div className="ft_inner">
						<div className="footer_text_box">
							<div className="footer_logo">
								<Link href="/">
									<Image src="/logo02.svg" width={207} height={52} alt="makesview" />
								</Link>
							</div>
							<div className="footer_office">
								<p className="title arial_font">OSAKA OFFICE</p>
								<p className="add">
									〒530-0047<br />
									大阪府大阪市北区西天満3-1-6 辰野西天満ビル2F
								</p>
								<p className="tel">TEL / FAX <a href="06-6125-5765">06-6125-5765</a> / 06-6125-5685</p>
							</div>
							<div className="footer_office">
								<p className="title arial_font">TOKYO OFFICE</p>
								<p className="add">
									〒141-0022<br />
									東京都品川区東五反田1-10-7 アイオス五反田511
								</p>
							</div>
							<div className="footer_banner">
								<div className="footer_partner">
									<Image src="/partner_icon.svg" width={61} height={41} alt="Google Partner" />
								</div>
								<div className="footer_white">
									<Link href="https://jws-japan.or.jp/whitecareer/white_company/4799" target="_blank">
										<Image src="/white_nitei.png" width={686} height={984} alt="ホワイト企業認定" />
									</Link>
								</div>
								<div className="footer_health">
									<Image src="/yuryo2023_tyusyo_4c_yoko.jpg" width={1105} height={349} alt="健康経営優良法人" />
								</div>
								<div className="footer_yahoo">
									<Image src="/SalesPartner_en.png" width={270} height={103} alt="YAHOO! Sales Partner" />
								</div>
							</div>
						</div>
						<nav className="footer_nav arial_font pc">
							<ul>
								<li>
									<Link href="/">TOP</Link>
								</li>
							</ul>
							<ul>
								<li>
									<a>TEAM</a>
								</li>
								<li className="small">
									<Link href="/direction-team">DIRECTION</Link>
								</li>
								<li className="small">
									<Link href="/webdesign-team">WEB DESIGN</Link>
								</li>
								<li className="small">
									<Link href="/front-engineer-team">WEB ENGINEER</Link>
								</li>
								<li className="small">
									<Link href="/design-team">DESIGN</Link>
								</li>
								<li className="small">
									<Link href="/bridal-team">BRIDAL</Link>
								</li>
								<li className="small">
									<Link href="/marketing-team">MARKETING</Link>
								</li>
								<li className="small">
									<Link href="/development-team">DEVELOPMENT</Link>
								</li>
								<li className="small">
									<Link href="/media-team">MEDIA</Link>
								</li>
							</ul>
							<ul>
								<li>
									<a>BRAND</a>
								</li>
								<li className="small">
									<Link href="https://penguin2.jp/" target="_blank">PENGUIN2</Link>
								</li>
								<li className="small">
									<Link href="https://racco3.jp/" target="_blank">RACCO3</Link>
								</li>
								<li className="small">
									<Link href="https://style-lily.jp/" target="_blank">Style Lily</Link>
								</li>
								<li className="small">
									<Link href="https://shop.style-rose.jp/" target="_blank">Style Rosé</Link>
								</li>
								<li className="small">
									<Link href="https://shop.style-rose.jp/wedding-diary/" target="_blank">Wedding Diary</Link>
								</li>
								<li className="small">
									<Link href="https://aaatake.jp/" target="_blank">AAATake!</Link>
								</li>
								<li className="small">
									<Link href="https://kashitaisupport-kansai.com/" target="_blank">カソット</Link>
								</li>
								<li className="small">
									<Link href="https://uritaisupport-kansai.com/" target="_blank">ウロット</Link>
								</li>
								<li className="small">
									<Link href="https://meo.makes-view.co.jp/" target="_blank">クリオネMEO</Link>
								</li>
							</ul>
							<ul>
								<li>
									<a>COMPANY</a>
								</li>
								<li className="small">
									<Link href="/profile">PROFILE</Link>
								</li>
								<li className="small">
									<Link href="/message"></Link>
								</li>
								<li className="small">
									<Link href="/history">HISTORY</Link>
								</li>
								<li>
									<Link href="/member">MEMBER</Link>
								</li>
								<li>
									<Link href="/office">OFFICE</Link>
								</li>
								<li class="ft_recruit">
									<Link href="/recruitment" target="_blank">RECRUIT</Link>
								</li>
								<li>
									<Link href="/category/news">NEWS</Link>
								</li>
								<li>
									<Link href="/contact">CONTACT</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</footer>

			<div className="footer_bottom">
				<div className="wrap">
					<div className="inner">
						<div className="copyright arial_font">
							<small>Copyright &copy; 2023 makesview Co., Ltd.  All Rights Reserved.</small>
						</div>
						<ul className="sub_menu arial_font pc">
							<li>
								<Link href="/privacy">PRIVACY POLICY</Link>
							</li>
							<li>
								<Link href="/sitemap">SITE MAP</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
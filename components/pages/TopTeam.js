import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core';

const TopTeam = () => {
	const sliderRef = useRef(null)
	const [index, setIndex] = useState('1')
	useEffect(() => {
		if (sliderRef.current) {
			document.getElementById("slide_total").textContent = sliderRef.current.splide.length
		}
	}, [])

	return (
		<section className="top_team">
			<div className="wrap">
				<h2 className="team_h2 arial_font pc">JOIN OUR <span>TEAM</span></h2>
				<h2 className="team_h2 arial_font sp">
					<Image src="/sp_join_title.png" width={65} height={480} alt="JOIN OUR TEAM" />
				</h2>
				<div className="slider_box">
					<div className="top_team_slider">
						<Splide
							hasTrack={false}
							options={{
								type: 'loop',
								speed: 1500,
								gap: 50,
								perMove: 1,
								pagination: true,
							}}
							ref={sliderRef}
							onMove={() => { setIndex(sliderRef.current.splide.index + 1) }}
							area-label="チームスライダー"
						>
							<div className="pagination arial_font">
								<span id="slide_current">{index}</span>
								<span className="bar">-</span>
								<span id="slide_total"></span>
							</div>
							<div className="splide__arrows">
								<button className="arrow splide__arrow--prev"></button>
								<button className="arrow splide__arrow--next"></button>
							</div>
							<SplideTrack>
								<SplideSlide className="slide">
									<Link href="/direction-team">
										<div className="image">
											<Image src="/team_image01.jpg" width={1400} height={800} alt="DIRECTION TEAM" />
										</div>
										<h3 className="name">DIRECTION <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
								<SplideSlide className="slide">
									<Link href="/webdesign-team">
										<div className="image">
											<Image src="/team_image02.jpg" width={1400} height={800} alt="WEB DESIGN TEAM" />
										</div>
										<h3 className="name">WEB DESIGN <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
								<SplideSlide className="slide">
									<Link href="/front-engineer-team">
										<div className="image">
											<Image src="/team_image03.jpg" width={1400} height={800} alt="WEB ENGINEER TEAM" />
										</div>
										<h3 className="name">WEB ENGINEER <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
								<SplideSlide className="slide">
									<Link href="/bridal-team">
										<div className="image">
											<Image src="/team_image04.jpg" width={1400} height={800} alt="BRIDAL TEAM" />
										</div>
										<h3 className="name">BRIDAL <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
								<SplideSlide className="slide">
									<Link href="/development-team">
										<div className="image">
											<Image src="/team_image05.jpg" width={1400} height={800} alt="DEVELOPMENT TEAM" />
										</div>
										<h3 className="name">DEVELOPMENT <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
								<SplideSlide className="slide">
									<Link href="/marketing-team">
										<div className="image">
											<Image src="/team_image06.jpg" width={1400} height={800} alt="MARKETING TEAM" />
										</div>
										<h3 className="name">MARKETING <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
								<SplideSlide className="slide">
									<Link href="/design-team">
										<div className="image">
											<Image src="/team_image07.jpg" width={1400} height={800} alt="DESIGN TEAM" />
										</div>
										<h3 className="name">DESIGN <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
								<SplideSlide className="slide">
									<Link href="/media-team">
										<div className="image">
											<Image src="/team_image08.jpg" width={1400} height={800} alt="AAATake! TEAM" />
										</div>
										<h3 className="name">MEDIA <span>TEAM</span></h3>
									</Link>
								</SplideSlide>
							</SplideTrack>
						</Splide>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TopTeam
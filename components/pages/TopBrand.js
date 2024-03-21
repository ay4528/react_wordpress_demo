import Image from "next/image"
import Link from "next/link"

const TopBrand = () => {
	return (
		<section className="top_brand">
			<div className="wrap02">
				<div className="common_h2_box center">
					<p className="common_sub_h2 arial_font">BRAND</p>
					<h2 className="common_h2">メイクスビューブランド</h2>
				</div>
				<ul className="top_brand_list">
					<li>
						<Link href="https://penguin2.jp/" target="_blank">
							<Image src="/brand_image01.png" width={1100} height={560} alt="PENGUIN2" />
						</Link>
					</li>
					<li>
						<Link href="https://style-lily.jp/" target="_blank">
							<Image src="/brand_image02.png" width={1100} height={560} alt="Style Lilly" />
						</Link>
					</li>
				</ul>
				<ul className="top_brand_list small">
					<li>
						<Link href="https://racco3.jp/" target="_blank">
							<Image src="/brand_image03.png" width={420} height={240} alt="RACCO3" />
						</Link>
					</li>
					<li>
						<Link href="https://meo.makes-view.co.jp/" target="_blank">
							<Image src="/brand_image04.png" width={420} height={240} alt="クリオネMEO" />
						</Link>
					</li>
					<li>
						<Link href="https://aaatake.jp/" target="_blank">
							<Image src="/brand_image05.png" width={420} height={240} alt="AAATake!" />
						</Link>
					</li>
					<li>
						<Link href="https://kaso-tto.com/" target="_blank">
							<Image src="/brand_image06.png" width={420} height={240} alt="カソット" />
						</Link>
					</li>
					<li>
						<Link href="https://uro-tto.com/" target="_blank">
							<Image src="/brand_image07.png" width={420} height={240} alt="ウロット" />
						</Link>
					</li>
					<li>
						<Link href="https://shop.style-rose.jp/" target="_blank">
							<Image src="/brand_image08.png" width={420} height={240} alt="Style Rosé" />
						</Link>
					</li>
					<li>
						<Link href="https://shop.style-rose.jp/wedding-diary/" target="_blank">
							<Image src="/brand_image09.png" width={420} height={240} alt="Wedding Diary" />
						</Link>
					</li>
					<li>
						<Link href="https://fuyohin-search-park.com/" target="_blank">
							<Image src="/brand_image10.png" width={420} height={240} alt="不用品回収サーチパーク" />
						</Link>
					</li>
					<li>
						<Link href="https://tochi-collect.com/" target="_blank">
							<Image src="/brand_image11.png" width={420} height={240} alt="土地コレクト" />
						</Link>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default TopBrand

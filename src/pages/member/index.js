import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Image from "next/image"

const Member = () => {
	return (
		<>
			<Header />

			<CommonFv bread="MEMBER" title="スタッフ紹介" subtitle="MEMBER" />

			<PageLayout>
				<div className="page_member common_page_team">
					<div className="wrap02">
						<ul className="member_list">
							<li>
								<div className="image">
									<Image src="/member_mitsuda.jpg" width={420} height={560} alt="光田 亮介" />
								</div>
								<div className="textBox">
									<p className="job arial_font">CEO</p>
									<h2 className="name">光田 亮介</h2>
									<p className="sub_name arial_font">Ryosuke Mitsuda</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_oshima.jpg" width={420} height={560} alt="大島 広之" />
								</div>
								<div className="textBox">
									<p className="job arial_font">COO</p>
									<h2 className="name">大島 広之</h2>
									<p className="sub_name arial_font">Hiroyuki Oshima</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_hirano.jpg" width={420} height={560} alt="平野 権太郎" />
								</div>
								<div className="textBox">
									<p className="job arial_font">CSO</p>
									<h2 className="name">平野 権太郎</h2>
									<p className="sub_name arial_font">Kentaro Hirano</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_heishi.jpg" width={420} height={560} alt="瓶子 奈々恵" />
								</div>
								<div className="textBox">
									<p className="job arial_font">MARKETER</p>
									<h2 className="name">瓶子 奈々恵</h2>
									<p className="sub_name arial_font">Nanae Heishi</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_yoshikawa.jpg" width={420} height={560} alt="吉川 拓也" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">吉川 拓也</h2>
									<p className="sub_name arial_font">Takuya Yoshikawa</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_fukui.jpg" width={420} height={560} alt="福井 湧之宥" />
								</div>
								<div className="textBox">
									<p className="job arial_font">DIRECTOR</p>
									<h2 className="name">福井 湧之宥</h2>
									<p className="sub_name arial_font">Yunosuke Hukui</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_ueno.jpg" width={420} height={560} alt="上野 智晴" />
								</div>
								<div className="textBox">
									<p className="job arial_font">WEB DESIGNER</p>
									<h2 className="name">上野 智晴</h2>
									<p className="sub_name arial_font">Chiharu Ueno</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_yoshimasu.jpg" width={420} height={560} alt="吉増 元規" />
								</div>
								<div className="textBox">
									<p className="job arial_font">GRAPHIC DESIGNER</p>
									<h2 className="name">吉増 元規</h2>
									<p className="sub_name arial_font">Motoki Yoshimasu</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_mayaguchi.jpg" width={420} height={560} alt="間屋口 里南" />
								</div>
								<div className="textBox">
									<p className="job arial_font">WEDDING PLANNER</p>
									<h2 className="name">間屋口 里南</h2>
									<p className="sub_name arial_font">Rina Mayaguchi</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_hashimoto.png" width={420} height={560} alt="橋本 崇矢" />
								</div>
								<div className="textBox">
									<p className="job arial_font">MARKETING PLANNER</p>
									<h2 className="name">橋本 崇矢</h2>
									<p className="sub_name arial_font">Takaya Hashimoto</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_komatsu.jpg" width={420} height={560} alt="小松 楽" />
								</div>
								<div className="textBox">
									<p className="job arial_font">WEB DESIGNER</p>
									<h2 className="name">小松 楽</h2>
									<p className="sub_name arial_font">Gaku Komatsu</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_nishida.jpg" width={420} height={560} alt="西田 剛" />
								</div>
								<div className="textBox">
									<p className="job arial_font">DIRECTOR</p>
									<h2 className="name">西田 剛</h2>
									<p className="sub_name arial_font">Go Nishida</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_yoshizawa.jpg" width={420} height={560} alt="吉澤 智貴" />
								</div>
								<div className="textBox">
									<p className="job arial_font">SEO PLANNER</p>
									<h2 className="name">吉澤 智貴</h2>
									<p className="sub_name arial_font">Tomoki Yoshizawa</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_nishikawa.jpg" width={420} height={560} alt="西川 綾乃" />
								</div>
								<div className="textBox">
									<p className="job arial_font">WEB DESIGNER</p>
									<h2 className="name">西川 綾乃</h2>
									<p className="sub_name arial_font">Ayana Nishikawa</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_nakano.jpg" width={420} height={560} alt="中野 星子" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">中野 星子</h2>
									<p className="sub_name arial_font">Hoshiko Nakano</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_miki.jpg" width={420} height={560} alt="三木 菜摘" />
								</div>
								<div className="textBox">
									<p className="job arial_font">MEDIA PLANNER</p>
									<h2 className="name">三木 菜摘</h2>
									<p className="sub_name arial_font">Natsumi Miki</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_yamashita202204.jpg" width={420} height={560} alt="山下 竜志" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">山下 竜志</h2>
									<p className="sub_name arial_font">Ryuji Yamashita</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_sakaguchi202204.jpg" width={420} height={560} alt="阪口 耕平" />
								</div>
								<div className="textBox">
									<p className="job arial_font">MARKETING DIRECTOR</p>
									<h2 className="name">阪口 耕平</h2>
									<p className="sub_name arial_font">Kohei Sakaguchi</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_kawajiri202204.jpg" width={420} height={560} alt="川尻 歩" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">川尻 歩</h2>
									<p className="sub_name arial_font">Ayumi Kawajiri</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_isihikawa.png" width={420} height={560} alt="石川 和樹" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">石川 和樹</h2>
									<p className="sub_name arial_font">Kazuki Ishikawa</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_tanaka.png" width={420} height={560} alt="田中 雅紀" />
								</div>
								<div className="textBox">
									<p className="job arial_font">WEB DESIGNER</p>
									<h2 className="name">田中 雅紀</h2>
									<p className="sub_name arial_font">Maki Tanaka</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_Matsuno.jpg" width={420} height={560} alt="松野 未希雄" />
								</div>
								<div className="textBox">
									<p className="job arial_font">DIRECTOR</p>
									<h2 className="name">松野 未希雄</h2>
									<p className="sub_name arial_font">Mikio Matsuno</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_nakao.jpg" width={420} height={560} alt="中尾 美来瑠" />
								</div>
								<div className="textBox">
									<p className="job arial_font">WEDDING PLANNER</p>
									<h2 className="name">中尾 美来瑠</h2>
									<p className="sub_name arial_font">Mikuru Nakao</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_nakagawa.jpg" width={420} height={560} alt="中川 香織" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">中川 香織</h2>
									<p className="sub_name arial_font">Nakagawa Kaori</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_ikagawa.jpg" width={420} height={560} alt="五十川 桂" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">五十川 桂</h2>
									<p className="sub_name arial_font">Ikagawa Kei</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_asada.jpg" width={420} height={560} alt="浅田 飛勇" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">浅田 飛勇</h2>
									<p className="sub_name arial_font">Asada Hiyu</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_hamaoka.jpg" width={420} height={560} alt="濱岡 佑輔" />
								</div>
								<div className="textBox">
									<p className="job arial_font">FRONT ENGINEER</p>
									<h2 className="name">濱岡 佑輔</h2>
									<p className="sub_name arial_font">Hamaoka yusuke</p>
								</div>
							</li>
							<li>
								<div className="image">
									<Image src="/member_ogita.png" width={420} height={560} alt="荻田 祐希" />
								</div>
								<div className="textBox">
									<p className="job arial_font">WEB DESIGNER</p>
									<h2 className="name">荻田 祐希</h2>
									<p className="sub_name arial_font">Ogita yuki</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Member
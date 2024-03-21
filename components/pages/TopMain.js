import Image from "next/image"

const TopMain = () => {
	return (
		<section className="top_main">
			<h1 className="top_h1">
				<Image src="main_h1.svg" width={898} height={222} alt="We make view for all." />
			</h1>
			<p className="top_sub_h1">
				<Image src="main_sub_h1.svg" width={50} height={125} alt="想像以上の、創造。" />
			</p>
			<div className="top_video">
				<video src="saiyouMovie.mp4" autoPlay muted loop playsInline></video>
			</div>
			<div className="top_main_text_box">
				<h2 className="top_h2 arial_font">No Business<br />No Happiness</h2>
				<p className="top_text">メイクスビューという社名は「まだ見たことのない想像以上の景色を創造する」という思いのもと「make（創造）」と「view（景色）」を掛け合わせて考案しました。<br />働くメンバーが仕事の楽しさを実感することで日々最高のパフォーマンスをあげることができる「No Business No Happiness」という理念のもと、メイクスビューブランドを多角的に展開していきます。</p>
			</div>
		</section>
	)
}

export default TopMain
import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"

const DirectionTeam = () => {
	return (
		<>
			<Header />

			<CommonFv bread="DIRECTION TEAM" title="ディレクションチーム" subtitle="DIRECTION TEAM" />

			<PageLayout>
				<div className="page_direction common_page_team">
					<div className="wrap02">
						<p className="team_child_text">
							DIRECTIONチームの主な業務は、お客様と制作者の間に立ち、ホームページの制作指導、進行管理を行うことです。<br />
							ホームページを通じて達成したい目的や、会社が抱える課題等をヒアリングし、各社のご要望に合わせた最適なご提案をいたします。<br />
							いわゆる「モノ売り」ではなく「コト売り」<br className="pc" />
							ただホームページを販売するのではなく、お客様の目的達成・課題解決をする「ソリューション営業」です。
						</p>
						<div className="team_child_contentsBox">
							<div className="team_child_contents">
								<h2 className="title">「満足」を超えた先にある「感動」</h2>
								<p className="text">
									ホームページ制作においてはデザイナー、フロントエンジニア、ライター、カメラマンの指導や指示などの総指揮を行います。<br />
									お客様のヒアリング内容を元に、デザインテイストを決め、必要なコンテンツを洗い出し、サイトの全体の設計を行います。<br />
									つまり、デザイナーが作成するデザイン、フロントエンジニアが作成するコンテンツページなど、全てディレクターの指示によるものです。<br />
									ディレクションを怠ると、そもそもお客様の思いに即していない作品が出来上がってしまうため、ディレクターの責任は重大です。<br />しかし、お客様が想像する以上のクオリティ、成果が得られた場合、最も感謝されるのは窓口であるディレクターなのです。<br />
									お客様に、「満足」を超えた先にある「感動」を与えるべく、日々最高のパフォーマンスで業務に取り組んでいます。
								</p>
							</div>
							<div className="team_child_contents">
								<h2 className="title">常に学び、変化し続ける</h2>
								<p className="text">
									多様化するクライアントの価値観に合わせて常に変化しつづける必要があります。<br />
									従来通りの凝り固まった発想では、新たな価値を生み出すことはできません。 <br />
									日々の業務、帰りの電車の広告、お客様との雑談など、何気ない瞬間でも常に情報を吸収し、知識のアップデートを重ねています。<br />
									個々の社員が得た学びを社内で共有することで、それが組織全体の学びとなり、お客様に対してさらなる価値を提供できると考えます。
								</p>
							</div>
						</div>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default DirectionTeam
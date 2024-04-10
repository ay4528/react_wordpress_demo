import Header from "../../components/common/Header"
import TopMain from "../../components/pages/TopMain"
import TopTeam from "../../components/pages/TopTeam"
import TopNews from "../../components/pages/TopNews"
import TopRecruit from "../../components/pages/TopRecruit"
import TopBrand from "../../components/pages/TopBrand"
import Footer from "../../components/common/Footer"

export const Home = () => {
	return (
		<>
			<Header />

			<main id="main" className="site_main">
				<TopMain />

				<TopTeam/>

				<TopNews/>

				<TopRecruit />

				<TopBrand />
			</main>

			<Footer />
		</>
	)
}

export default Home

import Header from "../../components/common/Header"
import TopMain from "../../components/pages/TopMain"
import TopTeam from "../../components/pages/TopTeam"
import TopNews from "../../components/pages/TopNews"
import TopRecruit from "../../components/pages/TopRecruit"
import TopBrand from "../../components/pages/TopBrand"
import Footer from "../../components/common/Footer"
import { useState, useEffect } from "react"
import { gql } from "@apollo/client"
import { client } from "../../lib/api"

export const Home = ({ posts }) => {
	return (
		<>
			<Header />

			<main id="main" className="site_main">
				<TopMain />

				<TopTeam />

				<TopNews posts={posts} />

				<TopRecruit />

				<TopBrand />
			</main>

			<Footer />
		</>
	)
}

export const getStaticProps = async () => {
	const GET_ALL_POSTS = gql`
		query getAllPosts {
			posts(first: 4) {
				nodes {
					content
					date
					id
					link
					slug
					title
				}
			}
		}
	`
	const { data } = await client.query({
		query: GET_ALL_POSTS,
	})
	const posts = data.posts.nodes
	return {
		props: {
			posts
		}
	}
}

export default Home

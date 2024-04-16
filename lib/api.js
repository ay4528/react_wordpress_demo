import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

const httpLink = createHttpLink({
	uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`,
	headers: {
		authorization: 'Basic ' + btoa('makesview_admin:fu5Seeni')
	}
})

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})
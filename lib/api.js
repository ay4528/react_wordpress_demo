import { ApolloClient, InMemoryCache} from "@apollo/client"

// const httpLink = createHttpLink({
// 	uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`,
// 	headers: {
// 		authorization: 'Basic ' + btoa('ID:PASSWORD')
// 	}
// })

export const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`,
	cache: new InMemoryCache()
})
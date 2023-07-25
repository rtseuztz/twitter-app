import { createSchema, createYoga } from 'graphql-yoga'
import type { RequestEvent } from '@sveltejs/kit'

const yogaApp = createYoga<RequestEvent>({
    schema: createSchema({
        typeDefs: `
			type Query {
				hello: String
			}
		`,
        resolvers: {
            Query: {
                hello: () => 'SvelteKit - GraphQL Yoga'
            }
        }
    }),
    // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
    graphqlEndpoint: 'http://localhost:5173/api/graphql',

    // Needed to let Yoga use sveltekit's Response object
    fetchAPI: globalThis
})

export { yogaApp as GET, yogaApp as POST }
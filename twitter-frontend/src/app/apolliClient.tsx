'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function ApolloClientWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    console.log("server url: ", process.env.NEXT_PUBLIC_SERVER_URL, `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql/`)
    const client = new ApolloClient({
        uri: `api/graphql/`,
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
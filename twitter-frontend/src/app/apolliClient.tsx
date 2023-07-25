'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function ApolloClientWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const client = new ApolloClient({
        uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql/`,
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
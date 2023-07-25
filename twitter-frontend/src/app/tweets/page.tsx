'use client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';


export default function hello() {
    const GET_HELLO = gql`
    query {
        hello
    }
    `;
    const { loading, error, data } = useQuery(GET_HELLO);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) return <p>{data.hello}</p>;
}
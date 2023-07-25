import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { writable, readable } from "svelte/store";
import { PUBLIC_SERVER_URL } from "$env/static/public";
export const client = writable(new ApolloClient({
    uri: `${PUBLIC_SERVER_URL}api/graphql`,
    cache: new InMemoryCache(),
}));

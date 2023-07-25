import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { writable } from "svelte/store";

export const client = writable(new ApolloClient({
    uri: "http://localhost:5173/api/graphql",
    cache: new InMemoryCache(),
}));

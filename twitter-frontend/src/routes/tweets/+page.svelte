<script lang="ts">
    import { client } from "$lib/stores";
    import { gql } from "@apollo/client/core";
    import { query, setClient } from "svelte-apollo";
    import type { ReadableQuery } from "svelte-apollo";
    import { onMount } from "svelte";
    setClient($client);

    type helloType = {
        hello: string;
    };
    const get_hello = gql`
        query {
            hello
        }
    `;
    let hello: ReadableQuery<helloType> = query(get_hello);
    //how to do this:
    //in +page.ts, do export const ssr = false;
    // need the set client here for now
    // could edit query to get the client from a store instead of context
    // have the type of the query in the readable query <> brackets
</script>

{#if $hello}
    {#if $hello.loading}
        Loading...
    {:else if $hello.error}
        Error: {$hello.error.message}
    {:else}
        <h1>{$hello.data?.hello}</h1>
    {/if}
{/if}

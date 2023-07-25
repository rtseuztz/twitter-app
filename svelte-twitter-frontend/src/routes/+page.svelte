<script lang="ts">
    export let data;
    // import { ApolloClient, InMemoryCache } from "@apollo/client/core";
    // import { setClient } from "svelte-apollo";
    // const client = new ApolloClient({
    //     uri: "http://localhost:5173/api/graphql",
    //     cache: new InMemoryCache(),
    // });
    // setClient(client);
</script>

<h1>Welcome to my kubernetes app</h1>
<p>
    <!-- {#each data.books as book}
        <div>
            <h2>{book.title}</h2>
        </div>
    {/each} -->
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
    documentation random number is {data.random}!
</p>

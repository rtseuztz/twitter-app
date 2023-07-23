<script>
    export let data;
    console.log(data);
</script>

<h1>Welcome to my kubernetes app</h1>
<p>
    {#each data.books as book}
        <div>
            <h2>{book.title}</h2>
        </div>
    {/each}
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

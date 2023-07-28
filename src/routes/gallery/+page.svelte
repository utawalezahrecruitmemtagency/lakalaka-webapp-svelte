<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Card from "../../components/card.svelte"
    console.log(data)
</script>
<main>
    <div class="cards">
        {#each data.imagedata as x}
        <Card image={x.image} text={x.text}/>
        {/each}
        
    </div>
</main>
<style lang="scss">
    main{
        padding: 10vh 0;
    }
</style>
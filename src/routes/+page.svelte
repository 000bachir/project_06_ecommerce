<script lang="ts">
    let {data} = $props()
    // let {countries} = $derived(data)
    import { onMount } from "svelte";
</script>



<h1>testing supabase</h1>

<ul>
    {#each data.countries as country }
        <li>{country.name}</li>
    {/each}
</ul>
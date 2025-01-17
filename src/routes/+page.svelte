<script lang="ts">

    /**
     * ? home ui imports (static no data needed)
    */
    import Features from "$lib/components/home_ui_components/Features.svelte";
    import Hero from "$lib/components/home_ui_components/Hero.svelte"
	import Intro from "$lib/components/home_ui_components/Intro.svelte";


    let {data} = $props()
    // let {countries} = $derived(data)
    import { onMount } from "svelte";
</script>

<svelte:head>
    <title>
        TrendWear
    </title>
</svelte:head>

<main class="h-full w-[95%] mx-auto relative overflow-hidden">
    <Hero />
    <Intro />
    <Features />
</main>
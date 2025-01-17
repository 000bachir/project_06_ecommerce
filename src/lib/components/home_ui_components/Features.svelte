<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onDestroy, onMount } from 'svelte';
  

    let Images = import.meta.glob("$lib/assets/Images/*.webp" , {eager : true})
    let ListofImages = Object.values(Images).map((image : any) => image.default)


	function TextAppearing() {
		let TriggedText = gsap.utils.toArray('.text');
		let wrapper = document.getElementById('wrapper') as HTMLElement;

		gsap.registerPlugin(ScrollTrigger);

		let animation = gsap.fromTo(
			TriggedText,
			{
				opacity: 0,
				scale: 0.5
			},
			{
				scrollTrigger: {
					trigger: wrapper,
					scrub: 1.9,
					end: 'bottom bottom'
				},
				duration: 1,
				opacity: 1,
				scale: 1,
				stagger: 0.2 // Reduced stagger for better performance
			}
		);

		return () => animation.kill();
	}
	onMount(() => {
		let cleanup = TextAppearing();
		onDestroy(cleanup);
	});
</script>

<section class="relative inset-0 h-full w-full overflow-hidden">
	<article class="h-auto w-full">
		<div id="wrapper" class="relative z-10 mt-4 flex h-28 w-full items-center justify-center">
			<h1 class="flex gap-1 text-4xl text-white">
				<span class="text">A</span>
				<span class="text">place</span>
				<span class="text">where</span>
				<span class="text">every</span>
				<span class="text">style</span>
				<span class="text">taste</span>
				<span class="text">converges</span>
				<span class="text">seamlessly</span>.
			</h1>
		</div>
	</article>


    <div id="list" class="overflow-hidden columns-[300px]">
        {#each ListofImages as Image }
            <img src={Image} alt="" loading="lazy" class="w-full mb-[1em]">
        {/each}
    </div>

</section>

<style lang="postcss">
</style>

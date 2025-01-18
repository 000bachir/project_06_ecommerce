<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import PeopleReaction from '$lib/components/home_ui_components/Testimonials/PeopleReaction.svelte';

	gsap.registerPlugin(ScrollTrigger);

	function createScrollTriggerProperties(triggerElement: HTMLElement) {
		return {
			trigger: triggerElement,
			start: 'top top',
			end: 'bottom bottom',
			scrub: 1.9
		};
	}
	function barAppearing() {
		const bars = gsap.utils.toArray('.bars');
		const startingPoint = document.getElementById('wrapper-text') as HTMLElement;

		return gsap.fromTo(
			bars,
			{ width: '0%' },
			{
				scrollTrigger: createScrollTriggerProperties(startingPoint),
				width: '100%',
				duration: 1.5,
				ease: 'elastic.inOut',
				stagger: 1
			}
		);
	}

	function WordAppear() {
		const feedbackWords = gsap.utils.toArray('.feedback');
		const startingPoint = document.getElementById('text-wrapper') as HTMLElement;

		return gsap.fromTo(
			feedbackWords,
			{ opacity: 0, yPercent: -100, scale: 0 },
			{
				scrollTrigger: createScrollTriggerProperties(startingPoint),
				opacity: 1,
				yPercent: 0,
				scale: 1,
				duration: 1.1,
				stagger: 0.9
			}
		);
	}
    onMount(()=>{
        let timeLine = gsap.timeline();
        timeLine.add(WordAppear()).add(barAppearing() , '+=0.05')
        WordAppear()

        onDestroy(()=>{
            ScrollTrigger.getAll().forEach((trigger:any)=> trigger.kill())
        })
    })
</script>

<section
	id="primary-container"
	class="relative grid h-dvh w-full grid-cols-2 overflow-hidden pb-4 pt-4"
>
	<div class="relative col-span-1 h-full w-full">
		<div id="wrapper-text" class="relative mx-auto h-full w-[95%]">
			<h1
				id="primary-text"
				class="flex h-full flex-col items-start justify-evenly text-7xl text-white"
			>
				<span class="font-bold uppercase">Our</span>
				<span class="font-bold uppercase">Goal</span>
				<span class="word-testimonials">Is</span>
				<span class="word-testimonials">To</span>
				<span class="word-testimonials">Make</span>
				<span class="word-testimonials">Our</span>
				<span class="word-testimonials">Customers</span>
				<span class="word-testimonials">Satisfied</span>
			</h1>
		</div>
	</div>
	<div
		id="stats"
		class="relative col-span-1 flex h-full w-full flex-wrap items-center justify-center overflow-hidden"
	>
		<div
			id="stats-container"
			class="relative mx-auto flex h-full w-[95%] flex-col flex-wrap items-center justify-center gap-4"
		>
			<div class="flex h-24 w-full flex-col justify-start gap-2 pb-4">
				<h1 class="text-left text-2xl font-thin text-white">Efficiency</h1>
				<div class="bars h-10 w-full rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl"></div>
			</div>

			<div class="flex h-24 w-full flex-col justify-start gap-2 pb-4">
				<h1 class="text-2xl font-thin text-white">Availability</h1>
				<div
					class="bars h-10 w-full rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl pb-2"
				></div>
			</div>

			<div class="flex h-24 w-full flex-col justify-start gap-2 pb-4">
				<h1 class="text-2xl font-thin text-white">Trustworthiness</h1>
				<div
					class="bars h-10 w-full rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl pb-2"
				></div>
			</div>
		</div>
	</div>
</section>

<section class="relative flex h-[30rem] w-full items-center justify-center">
	<div id="text-wrapper" class=" flex h-full w-[80%] items-center justify-center rounded-2xl">
		<h1 id="secondary-text" class="text-balance text-center text-[5rem] font-bold text-black">
			<span class="feedback inline-block">Don’t</span>
			<span class="feedback inline-block">take</span>
			<span class="feedback inline-block">our</span>
			<span class="feedback inline-block">word</span>
			<span class="feedback inline-block">for</span>
			<span class="feedback inline-block">it</span>
			<span class="feedback inline-block">.</span>
			<span class="feedback inline-block">Take</span>
			<span class="feedback inline-block">Theirs</span>
		</h1>
	</div>
</section>

<section class="relative h-auto w-full overflow-hidden">
	<PeopleReaction />
</section>

<style lang="postcss">
	.bars {
		background: linear-gradient(To right, #2e3192, #1bffff);
	}
	.feedback {
		color: #eee;
	}
	@media screen and (max-width: 768px) {
		#primary-text {
			font-size: 2.5rem;
		}
	}
	@media screen and (max-width: 425px) {
		#primary-container {
			height: 900px;
			display: flex;
			flex-direction: column;
		}
		#primary-text {
			font-size: 3rem;
		}
		#secondary-text {
			font-size: 3rem;
		}
	}
</style>

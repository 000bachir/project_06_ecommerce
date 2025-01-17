<script lang="ts">
	import HeaderImage from '$lib/assets/images/Intro_Image_01.webp';
	import Image from '$lib/assets/images/Intro_Image_02.webp';
	import { onMount, onDestroy } from 'svelte';
	//@ts-ignore
	import gsap from 'gsap';
	//@ts-ignore
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	function FirstSectionParralexEffect() {
		gsap.registerPlugin(ScrollTrigger);
		let firstSection = document.getElementById('first_section') as HTMLElement;
		let timeline = gsap.timeline();

		// title animation
		timeline.from('#first_section_title', {
			opacity: 0,
			yPercent: 130,
			stagger: 0.06,
			ease: 'back.inOut',
			duration: 1
		});

		// first section image reveal
		timeline.to(
			'#first_section_img',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				scale: 1,
				ease: 'expo.out',
				duration: 2
			},
			'-=1' // Overlap with the previous animationn
		);
		// Scroll-driven animations
		const scrollTriggers = [
			gsap.to('#first_section_title_parralex', {
				scrollTrigger: {
					trigger: firstSection,
					start: 'top top',
					scrub: 1.9
				},
				xPercent: -150
			}),
			gsap.to('#first_section #stroke', {
				scrollTrigger: {
					trigger: firstSection,
					start: 'top top',
					scrub: 1.9
				},
				xPercent: 50
			}),
			gsap.to('#first_section_img', {
				scrollTrigger: {
					trigger: firstSection,
					start: 'top top',
					scrub: 1.9
				},
				yPercent: -50
			}),
			gsap.to('#first_section_img img', {
				scrollTrigger: {
					trigger: firstSection,
					start: 'top top',
					scrub: 1.9
				},
				scale: 1.3
			})
		];
		return () => {
			timeline.kill();
			scrollTriggers.forEach((trigger: any) => trigger.ScrollTrigger.kill());
		};
	}
	function SecondtSectionParralexEffect() {
		gsap.registerPlugin(ScrollTrigger);
		const about = document.getElementById('about');

		const scrollTriggers = [
			gsap.from('#about_image', {
				scrollTrigger: {
					trigger: about,
					start: 'top bottom',
					scrub: 1.9
				},
				xPercent: 80
			}),
			gsap.to('#about_image img', {
				scrollTrigger: {
					trigger: about,
					start: 'top bottom',
					scrub: 1.9
				},
				scale: 1.6
			}),
			gsap.to('#about_text', {
				scrollTrigger: {
					trigger: '#about-wrapper',
					start: 'top bottom',
					scrub: 1.9
				},
				xPercent: 0
			})
		];

		return () => {
			scrollTriggers.forEach((trigger: any) => trigger.scrollTrigger.kill());
		};
	}

	onMount(() => {
		const cleanupForFirstSectionParralexEffect = FirstSectionParralexEffect();
		const cleanupForSecondSectionParralexEffect = SecondtSectionParralexEffect();

		onDestroy(() => {
			cleanupForFirstSectionParralexEffect();
			cleanupForSecondSectionParralexEffect();
		});
	});
</script>

<main class="relative h-auto w-full overflow-hidden">
	<!--! first section-->

	<section
		id="first_section"
		class="relative flex h-dvh w-full items-center justify-center px-16 py-0"
	>
		<h1
			class="relative z-[2] m-0 text-center text-7xl uppercase text-teal-50 mix-blend-difference md:text-5xl"
			id="first_section_title"
			data-splitting
		>
			<span class="inline-block will-change-transform" id="first_section_title_parralex">
				Welcome to our Store!
			</span>
		</h1>
		<div
			id="first_section_img"
			class="clip-path absolute right-36 top-0 h-full w-[45%] overflow-hidden"
		>
			<img src={HeaderImage} class="block h-full w-full object-cover" alt="" loading="lazy" />
		</div>
	</section>

	<!--! second section -->

	<section class="relative h-dvh w-full">
		<div id="about-wrapper" class="relative flex h-full w-full overflow-hidden">
			<div id="about_image" class="relative h-full w-[40%] overflow-hidden rounded-lg">
				<img
					src={Image}
					class="absolute h-full w-full rounded-lg object-contain"
					alt=""
					loading="lazy"
				/>
			</div>
			<div
				id="about_text"
				class="absolute left-1/2 top-1/2 z-20 flex h-full w-[50%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-evenly overflow-hidden"
			>
				<h2
					id="section-title"
					class="relative text-center uppercase text-gray-50 mix-blend-difference md:text-5xl lg:text-7xl"
				>
					WHE<span id="stroke" class="text-stroke text-purple-700">RE</span>
					<span
						id="section-title__square"
						class="absolute left-1/2 top-1/2 z-[-1] inline-block aspect-square w-32 -translate-x-1/2 -translate-y-1/2 border-[1px] border-white"
					></span>
				</h2>
				<p
					id="about_p"
					class="text-pretty font-bold text-gray-400 mix-blend-difference will-change-transform md:px-5 md:text-base lg:px-10 lg:text-xl"
				>
					Your ultimate destination for stylish and trendy fashion! Explore a world of elegance and
					flair with our extensive collection of clothing, designed to suit every style and
					occasion. From casual wear to chic outfits for special events, we’ve curated a diverse
					range that ensures you always look your best. Elevate your wardrobe with pieces that
					combine comfort, quality, and timeless fashion.
				</p>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
	@media screen and (max-width: 768px) {
		#first_section_title {
			font-size: 3rem;
		}
	}

	@media screen and (max-width: 425px) {
		#about_p {
			font-size: 0.6rem;
		}
	}
</style>

<script lang="ts">
	import { onMount , onDestroy } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	function cardAppearing() {
		let cards = gsap.utils.toArray('.eachdiv');
		let scrollTriggerAction = document.querySelector('.innerdiv') as HTMLElement;
		gsap.registerPlugin(ScrollTrigger);
		return gsap.fromTo(
			cards,
			{
				opacity: 0,
				xPercent: -100,
				scale: 0
			},
			{
				scrollTrigger: {
					trigger: scrollTriggerAction,
					start: '-150px top ',
					scrub: 1.9,
					end: '100px bottom',
					snap: {
						snapTo: 'labels'
					}
				},
				opacity: 1,
				xPercent: 0,
				scale: 1,
				duration: 1,
				stagger: 0.7
			}
		);
	}
	onMount(() => {
		cardAppearing();
        onDestroy(()=>{
            ScrollTrigger.getAll().forEach((trigger:any)=>{trigger.kill()})
        })
	});
</script>

<section
	id="testimonials-container"
	class="relative flex h-[800px] w-full items-center justify-center"
>
	<div class="outerdiv relative flex h-full w-full items-center justify-center">
		<div class="innerdiv">
			<!-- div1 -->
			<div class="div1 eachdiv rounded-xl px-6 py-4 text-white">
				<div class="userdetails">
					<div class="imgbox">
						<img
							src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
							alt=""
						/>
					</div>
					<div class="detbox">
						<p class="name">Daniel Clifford</p>
						<p class="designation">Verified Graduate</p>
					</div>
				</div>
				<div class="review">
					<h4>Best gaming store experience I've had!</h4>
					<p>
						“I've been buying clothes online for years, but this store stands out. The website is
						user-friendly, and I found some very good items I've been hunting for ages. Shipping was
						faster than expected, and the packaging was secure. I'll definitely be a repeat
						customer.”
					</p>
				</div>
			</div>
			<!-- div2 -->
			<div class="div2 eachdiv rounded-xl px-6 py-4 text-white">
				<div class="userdetails">
					<div class="imgbox">
						<img
							src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
							alt=""
						/>
					</div>
					<div class="detbox">
						<p class="name">Jonathan Walters</p>
						<p class="designation">Verified Graduate</p>
					</div>
				</div>
				<div class="review">
					<h4>Great prices and excellent customer service!</h4>
					<p>
						“The deals are unbeatable, and the customer service is top-notch. I had a few questions
						and they were answered promptly. Will shop again!”
					</p>
				</div>
			</div>
			<!-- div3 -->
			<div class="div3 eachdiv rounded-xl px-6 py-4 text-white">
				<div class="userdetails">
					<div class="imgbox">
						<img
							src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
							alt=""
						/>
					</div>
					<div class="detbox">
						<p class="name dark">Kira Whittle</p>
						<p class="designation dark">Verified Graduate</p>
					</div>
				</div>
				<div class="review dark">
					<h4>Excellent customer service and selections!</h4>
					<p>
						“This e-store exceeded my expectations. Not only did they have a vast selection of
						choices, but their customer service was also exceptional. I had an issue with my order,
						and they resolved it within hours!”
					</p>
				</div>
			</div>
			<!-- div4 -->
			<div class="div4 eachdiv rounded-xl px-6 py-4 text-white">
				<div class="userdetails">
					<div class="imgbox">
						<img
							src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
							alt=""
						/>
					</div>
					<div class="detbox">
						<p class="name dark">Jeanette Harmon</p>
						<p class="designation dark">Verified Graduate</p>
					</div>
				</div>
				<div class="review dark">
					<h4>Great prices and excellent customer service!</h4>
					<p>
						“The deals are unbeatable, and the customer service is top-notch. I had a few questions
						and they were answered promptly. Will shop again!”
					</p>
				</div>
			</div>
			<!-- div5 -->
			<div class="div5 eachdiv rounded-xl px-6 py-4 text-white">
				<div class="userdetails">
					<div class="imgbox">
						<img
							src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
							alt=""
						/>
					</div>
					<div class="detbox">
						<p class="name">Patrick Abrams</p>
						<p class="designation">Verified Graduate</p>
					</div>
				</div>
				<div class="review">
					<h4>A one-stop shop for all my needs!</h4>
					<p>
						“this store has it all. I appreciate the The purchasing
						process is smooth, and my orders always arrive on time. Plus, the loyalty program is a
						fantastic perk!”
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.innerdiv {
		display: grid;
		grid-gap: 1.5rem;
		grid-template-rows: repeat(2, 22rem);
		grid-template-columns: repeat(4, 17rem);
	}
	.eachdiv {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
	.div1 {
		background: #733fc8;
		grid-column: 1/3;
		grid-row: 1/2;
		background-image: url(https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/bg-pattern-quotation.svg);
		background-repeat: no-repeat;
		background-position-x: 20rem;
	}
	.div2 {
		background: #49556b;
		grid-column: 3/4;
		grid-row: 1/2;
	}
	.div3 {
		background: white;
		grid-column: 4/5;
		grid-row: 1/3;
		color: black;
	}
	.div4 {
		background: white;
		grid-column: 1/2;
		grid-row: 2/3;
		color: black;
	}
	.div5 {
		background: #18202d;
		grid-column: 2/4;
		grid-row: 2/3;
	}
	.userdetails {
		display: flex;
	}
	.imgbox {
		margin-right: 1rem;
	}
	.imgbox img {
		border-radius: 50%;
		width: 2rem;
		aspect-ratio: 1;
		object-fit: contain;
		border: 2px solid #cec5c5;
	}
	.detbox {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.detbox p {
		margin: 0;
	}
	.detbox .name {
		color: hsl(0, 0%, 81%);
		font-size: 0.9rem;
		margin-bottom: 0.1rem;
		font-weight: 600;
	}
	.detbox .name.dark {
		color: #49505a;
	}
	.detbox .designation {
		color: hsl(0, 0%, 81%);
		opacity: 70%;
		font-size: 0.8rem;
	}
	.detbox .designation.dark {
		color: #49505a;
	}
	.review h4 {
		font-size: 1.5rem;
		color: #f3deff;
		font-weight: 600;
		line-height: 1.5;
		margin-bottom: 1rem;
	}
	.review.dark h4 {
		color: #4b5258;
	}
	.review p {
		font-size: 1rem;
		color: #f3deff;
		font-weight: 500;
		opacity: 70%;
	}
	.review.dark p {
		color: #0e0e0e;
	}

	@media only screen and (max-width: 1000px) {
		.innerdiv {
			transform: scale(0.7);
		}
	}
	@media only screen and (max-width: 800px) {
		.innerdiv {
			transform: scale(0.6);
		}
	}
	@media only screen and (max-width: 600px) {
		.div1 {
			background-position-x: 10rem;
		}
		.innerdiv {
			display: flex;
			flex-direction: column;
			transform: scale(1);
			margin: 2rem;
			margin-bottom: 5rem;
		}
	}

	@media screen and (max-width: 425px) {
		#testimonials-container {
			height: 1800px;
		}
	}
</style>

<script lang="ts">
    import Image01 from "$lib/assets/Images/Image04.webp"
    import Image06 from "$lib/assets/Images/Image06.webp"
    import Image07 from "$lib/assets/Images/Image07.webp"
    import Image08 from "$lib/assets/Images/Image08.webp"
</script>

<section id="section">
	<div id="cards">
		<div class="card-1 card">
			<figure class="visual">
				<img
					class="card-img"
					src={Image01}
                    loading="lazy"
					alt="Person with a game controller in hand"
				/>
				<figcaption class="figcaption">
                    <a href="/">Look for a style</a>
                </figcaption>
			</figure>
		</div>
		<div class="card-2 card">
			<figure class="visual">
				<img
					class="card-img"
					src={Image06}
                    loading="lazy"
					alt="Person with a game controller in hand"
				/>
				<figcaption class="figcaption">
                    <a href="/">Discover what peoples are selling</a>
                </figcaption>
			</figure>
		</div>
		<div class="card-3 card">
			<figure class="visual">
				<img
					class="card-img"
					src={Image07}
                    loading="lazy"
					alt="Person with a game controller in hand"
				/>
				<figcaption class="figcaption">
					<a href="/" class="pl-3">See what others likes</a>
				</figcaption>
			</figure>
		</div>
		<div class="card-4 card">
			<figure class="visual">
				<img
					class="card-img"
					src={Image08}
                    loading="lazy"
					alt="Person with a game controller in hand"
				/>
				<figcaption class="figcaption">
                    <a href="/">Talk to our team</a>
                </figcaption>
			</figure>
		</div>
	</div>
</section>

<style lang="postcss">
	#section {
		display: grid;
		position: relative;
		place-items: center;
		inline-size: 100%;
		min-block-size: max(600px, calc(100dvh - 75px));
		padding-block-end: 0.75rem;
		padding-inline: 0.75rem;
		padding-top: 1rem;
	}

	#cards {
		block-size: 100%;
		inline-size: 100%;
		display: grid;
		gap: 1rem;

		@media (width > 1024px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.card {
		container-type: size;
		block-size: 100%;
		inline-size: 100%;
		min-block-size: 280px;
		position: relative;
	}

	.card::after {
		position: absolute;
		content: '';
		left: 0;
		top: 0;
		block-size: 100%;
		inline-size: 100%;
		mix-blend-mode: multiply;
		transition: opacity 500ms ease;
		opacity: 0;
	}
	.card:hover::after {
		opacity: 1;
	}

	.card-1::after {
		background-color: hsl(343, 98%, 52%);
	}

	.card-2::after {
		background-color: hsl(199, 100%, 38%);
	}

	.card-3::after {
		background-color: hsl(119, 59%, 64%);
	}

	.card-4::after {
		background-color: hsl(49, 83%, 69%);
	}

	.visual {
		block-size: 100%;
		inline-size: 100%;
		display: grid;
		overflow: hidden;
		place-items: center;
	}

	.visual > * {
		grid-area: 1/1;
	}
	.card-img {
		block-size: 100cqb;
		inline-size: 100cqi;
		border-radius: inherit;
		display: block;
		background: conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111);
		filter: grayscale();
		object-fit: cover;
	}

	.figcaption {
		z-index: 2;
		color: white;
		font:
			400 5cqi / normal system-ui,
			sans-serif;
	}
</style>

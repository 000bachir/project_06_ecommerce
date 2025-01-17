<script lang="ts">
	import { onMount } from 'svelte';

	// This function creates a fancy effect on a text element with the id 'intro-title'.
	// function FancySentenceHoverEffetc() {
	// 	// Get the DOM element with id 'intro-title'.
	// 	let sentence = document.getElementById('intro-title');

	// 	// Check if the element exists.
	// 	if (sentence) {
	// 		// Split the text content of the element into individual characters.
	// 		let splittedSentence = sentence.innerHTML.split('');

	// 		// Clear the content of the 'sentence' element.
	// 		sentence.innerHTML = '';

	// 		// Function to remove certain classes from all span elements inside the 'sentence'.
	// 		const removeClasses = () => {
	// 			// Find all span elements inside the 'sentence'.
	// 			const spans = sentence.querySelectorAll('span');
	// 			// Iterate over each span element.
	// 			spans.forEach((span) => {
	// 				// Remove the 'hovered' and 'hovered-adjacent' classes from the span.
	// 				span.classList.remove('hovered');
	// 				span.classList.remove('hovered-adjacent');
	// 			});
	// 		};

	// 		// Iterate over each character in the splitted sentence.
	// 		splittedSentence.forEach((char: string, index: number) => {
	// 			// Create a new span element.
	// 			const El = document.createElement('span');
	// 			// Set the inner HTML of the span to the current character.
	// 			El.innerHTML = char;
	// 			// Set a custom 'data-index' attribute to keep track of the character's index.
	// 			El.dataset.index = index.toString();
	// 			// Append the span element to the 'sentence' element.
	// 			sentence.appendChild(El);

	// 			// Add event listener to each character span.
	// 			Array.from(char).forEach((letter: any) => {
	// 				// When the mouse is over the character span, execute the following function.
	// 				El.addEventListener('mouseover', (e: any) => {
	// 					// Remove the 'hovered' and 'hovered-adjacent' classes from all span elements.
	// 					removeClasses();
	// 					// Get the current span element where the mouse is over.
	// 					const currectElement = e.target;
	// 					// If the current element exists.
	// 					if (currectElement) {
	// 						// Get the index of the current element.
	// 						const index = parseInt(currectElement.getAttribute('data-index'), 10);
	// 						// Calculate the index of the previous and next characters.
	// 						const prevIndex = index === 0 ? null : index - 1;
	// 						const nextIndex = index === char.length - 1 ? null : index + 1;

	// 						// Find the previous and next span elements based on their indices.
	// 						const prevEl =
	// 							prevIndex !== null && document.querySelector(`[data-index="${prevIndex}"]`);
	// 						const NextEl =
	// 							nextIndex !== null && document.querySelector(`[data-index="${nextIndex}"]`);

	// 						// Add the 'hovered' class to the current element.
	// 						e.target.classList.add('hovered');
	// 						// Add the 'hovered-adjacent' class to the previous and next elements if they exist.
	// 						prevEl && prevEl.classList.add('hovered-adjacent');
	// 						NextEl && NextEl.classList.add('hovered-adjacent');
	// 					}
	// 				});
	// 			});

	// 		});
	// 	}
	// }

	

	function FancySentenceHoverEffect() {
		const sentence = document.getElementById('intro-title');
		if (!sentence) return;

		// Split text into individual characters and replace content with spans
		const splittedSentence = sentence.innerHTML.split('');
		sentence.innerHTML = '';
		splittedSentence.forEach((char: string, index: number) => {
			const span = document.createElement('span');
			span.textContent = char;
			span.dataset.index = String(index);
			sentence.appendChild(span);
		});

		//Delegate hover events to the parent element
		sentence.addEventListener('mouseover', (e:any) => {
			const target = e.target;
			if (!target || target.tagName !== 'SPAN') return;

			const index = parseInt(target.dataset.index, 10);
			const spans = sentence.querySelectorAll('span');

			// Reset all classes
			spans.forEach((span) => span.classList.remove('hovered', 'hovered-adjacent'));

			// Add classes to hovered and adjacent spans
			target.classList.add('hovered');
			if (index > 0) spans[index - 1].classList.add('hovered-adjacent');
			if (index < spans.length - 1) spans[index + 1].classList.add('hovered-adjacent');
		});
	}

	onMount(() => {
		FancySentenceHoverEffect();
	});
</script>

<section id="hero" class="relative flex h-dvh w-full items-center justify-center overflow-hidden">
	<div id="buble" class=""></div>
	<div class="absolute flex h-full w-full items-center justify-center">
		<h1 id="intro-title" class=" text-5xl font-thin uppercase text-white">
			Welcome to your digital Store!
		</h1>
	</div>
</section>

<style lang="postcss">
	:root {
		--_float-distance: -20px;
		--_float-speed: 4s;
		--_size: 250px;
		--bg-body-rgb: rgb(0, 0, 0);

		--green: rgb(42, 252, 152);
		--blue: rgb(41, 121, 255);
	}

	#buble {
		width: var(--_size);
		aspect-ratio: 1/1;
		border-radius: 50%;
		backdrop-filter: blur(5px);
		box-shadow:
			inset 0 0.13vmin #de0029,
			inset 0 0.18vmin #326db3,
			inset 0.1vmin 0.1vmin #00aa9e,
			inset 0.1vmin 0.1vmin #f3c202;
		animation: floating var(--_float-speed) ease-in-out infinite;
		will-change: transform;
	}
	#buble::before,
	#buble::after {
		position: absolute;
		border-radius: inherit;
		content: '';
	}

	#buble::before {
		inset: 0;
		backdrop-filter: blur(12px);
		background-image: conic-gradient(
			from -25deg at 80% 20%,
			transparent 85%,
			rgba(255, 255, 255, 0.7) 94%,
			transparent 94%
		);
		filter: blur(4px);
	}

	#buble::after {
		inset: -3px;
		background: rgba(var(--bg-body-rgb), 0.2);
		backdrop-filter: blur(3px);
		z-index: -1;
	}
	@keyframes floating {
		0%,
		100% {
			translate: 0;
		}
		50% {
			translate: 0 var(--_float-distance, -10px);
		}
	}

	:global(.hovered) {
		font-weight: 900;
		color: #00aa9e;
		transition: all 600ms ease;
	}

	:global(.hovered-adjacent) {
		font-weight: 900;
		transition: all 400ms ease;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 2.2rem;
		}
	}
	@media screen and (max-width: 425px) {
		h1 {
			font-size: 2.3rem;
			text-wrap: balance;
			text-align: center;
		}
	}
</style>

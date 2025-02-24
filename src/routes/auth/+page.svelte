<script lang="ts">
	import { onMount } from 'svelte';
	import AuthImage from '$lib/assets/Images/Image05.webp';
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Auth section</title>
</svelte:head>

<main class="relative grid h-dvh w-full grid-cols-2 overflow-hidden">
	<section
		class="relative col-span-1 flex h-full w-full items-center justify-center overflow-hidden"
	>
		<div class=" aspect-video h-96 rounded-xl">
			<h1 class="text-red-500">123456789</h1>
			<form
				method="POST"
				action="?/login"
				class="flex h-full flex-col items-center justify-center gap-4"
				use:enhance
			>
				<label class="input input-bordered flex w-full items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="h-4 w-4 opacity-70"
					>
						<path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
						/>
						<path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
						/>
					</svg>
					<input type="text" class="grow text-white" placeholder="Email" name="email" />
				</label>

				<label class="input input-bordered flex w-full items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="h-4 w-4 opacity-70"
					>
						<path
							fill-rule="evenodd"
							d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
							clip-rule="evenodd"
						/>
					</svg>
					<input type="password" class="grow text-white" name="password" placeholder="Password" />
				</label>

				<div class="flex items-center justify-center gap-6">
					<button class="btn">Login</button>
					<button formaction="?/signup" class="btn">Sign up</button>
				</div>
			</form>
		</div>
	</section>
	<section class="col-span-1 h-full w-full overflow-hidden">
		<img src={AuthImage} alt="" loading="lazy" class="h-full w-full object-cover" />
	</section>
</main>

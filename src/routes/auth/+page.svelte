<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { supabaseClient } from '$lib/supabaseClient';
	import type { Provider } from '@supabase/supabase-js';
	import type { ActionData } from './$types';
	import { type SubmitFunction } from '@sveltejs/kit';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	let loading: boolean = $state(false);
	let error = $state<any | null>(null);
	let successMessage:string = $state('');

	// const handleSubmit: SubmitFunction = () => {
	// 	loading = true;
	// 	error = null;

	// 	return async ({ result, update }) => {
	// 		if (result.type === 'failure') {
	// 			// Ensure proper formatting of the error message
	// 			error = typeof result.data?.errors ? Object.values(result.data?.errors).join(' ') : result.data?.errors || 'An error occured';
	// 		}

	// 		await update();
	// 		loading = false;
	// 	};
	// };

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		error = null;
		successMessage = "";

		return async ({ result, update }) => {
			if (result.type === 'failure') {
				// Ensure proper formatting of the error message
				error = typeof result.data?.errors ? Object.values(result.data?.errors).filter(Boolean).join(' ') : result.data?.errors || 'An error occured';
			}else if(result.type === "success"){
				successMessage = result.data?.message
			}

			await update();
			loading = false;
		};
	};


</script>

<svelte:head>
	<title>User management</title>
</svelte:head>

<main class="relative grid h-dvh w-full grid-cols-2 overflow-hidden bg-black text-white">
	<section class="col-span-1 h-full w-full">
		<div class="mx-auto flex h-full w-[95%] flex-col items-center justify-center">
			<form
				method="POST"
				action="?/login"
				class="flex w-full max-w-md flex-col items-center gap-4"
				use:enhance={handleSubmit}
			>
				<div class="w-full">
					<label for="email" class="mb-2 block">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						value={form?.email ?? ''}
						class="w-full rounded bg-gray-800 p-2"
						disabled={loading}
						required
					/>
					{#if form?.errors?.email}
						<span class="mt-1 text-sm text-red-600">
							{form.errors.email}
						</span>
					{/if}
				</div>

				<div class="w-full">
					<label for="password" class="mb-2 block">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						class="w-full rounded bg-gray-800 p-2"
						disabled={loading}
						required
						minlength="6"
					/>
				</div>

				{#if form?.errors?.email}
					<span class="mt-1 text-sm text-red-600">
						{form.errors.email}
					</span>
				{/if}

				<div class="mt-4 flex gap-4">
					<!-- <button
						type="submit"
						class="rounded bg-blue-600 px-4 py-2 disabled:opacity-50"
						disabled={loading}
					>
						{loading ? 'Loading...' : 'Login'}
					</button> -->

					<button
						type="submit"
						formaction="?/signup"
						class="rounded bg-green-600 px-4 py-2 disabled:opacity-50"
						disabled={loading}
					>
						{loading ? 'Loading...' : 'Sign up'}
					</button>
				</div>
			</form>
		</div>
	</section>
	<section class="col-span-1 h-full w-full">
		<h1 class="text-4xl text-green-500">
			123456789
		</h1>
	</section>
</main>


<!---
import Image from "$lib/assets/Images/Intro_Image_01.webp"
import {Button} from "$lib/components/ui/button"
import {Input} from "$lib/components/ui/input" -->

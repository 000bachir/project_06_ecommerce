<script lang="ts">
	import { onMount } from "svelte";
	import AuthImage from "$lib/assets/Images/Image05.webp";
	import { enhance } from "$app/forms";
	import Label from "$lib/components/ui/label/label.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
</script>


<svelte:head>
	<title>
		Auth section
	</title>
</svelte:head>


<main class="h-dvh w-full relative overflow-hidden grid grid-cols-2">

	<section class="h-full w-full col-span-1 flex items-center justify-center relative overflow-hidden">
		<div class=" rounded-xl h-96 aspect-video">
			<form action="POST" use={enhance} class="flex flex-col items-start justify-evenly h-full">
				<div class="h-auto  flex flex-col items-start w-full gap-6">
					<Label for="Email">Email</Label>
					<Input placeholder="Email" required />
				</div>
				<div class="h-auto  flex flex-col items-start w-full gap-6">
					<Label for="Password">Password</Label>
					<Input placeholder="Password" required type=password />
				</div>
				<div class="h-auto flex  items-center gap-4 w-full justify-center">
					<Button>Sign Up</Button>
					<Button>Back Home</Button>
				</div>
			</form>
		</div>
	</section>
	<section class="h-full w-full col-span-1 overflow-hidden">
		<img src={AuthImage} alt="image for auth section" loading="lazy" class="h-full w-full object-cover">
	</section>

</main>
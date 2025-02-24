<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Avatar from './Avatar.svelte';

	let { data, form  } = $props();

	// Using let instead of $state since these are derived from props

	let { session, supabase, profile } = data;
	$effect(() => {
		({
			session,
			supabase,
			profile
		});
	});

	//state declaration using runes

	let loading = $state(false);
	let fullName = $state(profile?.full_name ?? '');
	let username = $state(profile?.username ?? '');
	let avatarUrl = $state(profile?.avatar_url ?? '')

	// refrencing the form element

	let profileForm: HTMLFormElement;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};
	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
</script>

<div class="form-widget h-dvh w-full text-white">
	<form
		class="form-widget"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<label for="email">Email</label>
			<input id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label for="fullName">Full Name</label>
			<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
		</div>

		<div>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" value={form?.username ?? username} />
		</div>

		<div>
			<input
				type="submit"
				class="button primary block"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
	</form>

	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<button class="button block" disabled={loading}>Sign Out</button>
		</div>
	</form>

	<Avatar
		{supabase}
		bind:url={avatarUrl}
		size={10}
		
		on:upload={() => {
			profileForm.requestSubmit();
		}}
	/>
</div>

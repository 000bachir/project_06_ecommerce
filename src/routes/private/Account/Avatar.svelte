<script lang="ts">
	import { supabaseClient } from '$lib/supabaseClient';
	import type { SupabaseClient } from '@supabase/supabase-js';
	//let size: number = $state(10);
	//const supabase = supabaseClient;

	//let { url = $bindable(), dispatch } = $props();




    let { size = 10, url = $bindable() , supabase = null , dispatch } = $props<{
        size?: number;
        url?: string;
        supabase?: SupabaseClient ; // You might want to use a more specific type here
    }>();




	let avatar_url: string | null = $state(null);
	let uploading: boolean = $state(false);
	let files: FileList | any = $state([]);
	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('avatars').download(path);
			if (error) {
				throw error;
			}

			const url = URL.createObjectURL(data);
			avatar_url = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error loading image: ', error.message);
			}
		}
	};

	const uploadAvatar = async () => {
		try {
			uploading = true;
			if (!files || files.length === 0) {
				throw new Error('you must select an image to upload');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${Math.random()}.${fileExt}`;

			let { error } = await supabase.storage.from('avatars').upload(filePath, file);

			if (error) {
				throw error;
			}

			url = filePath;
			setTimeout(() => {
				dispatch('upload');
			}, 500);
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			uploading = false;
		}
	};
	$effect(() => {
		if (url) downloadImage(url);
	});
</script>

<div class="">
	{#if avatar_url}
		<img
			src={avatar_url}
			alt={avatar_url ? 'Avatar' : 'No image'}
			style=" height : {size}em; width {size}em "
		/>
	{:else}
		<div class="no-image avatar" style="height: {size}em; width: {size}em;"></div>
	{/if}

	<input type="hidden" name="avatarUrl" value={url} />
	<div style="width: {size}em;">
		<label class="button primary block" for="single">
			{uploading ? 'Uploading ...' : 'Upload'}
		</label>
		<input
			style="visibility: hidden; position:absolute;"
			type="file"
			id="single"
			accept="image/*"
			bind:files
			onchange={uploadAvatar}
			disabled={uploading}
		/>
	</div>
</div>

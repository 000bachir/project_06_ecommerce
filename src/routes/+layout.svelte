<script lang="ts">
	import '../app.css';
	import {invalidate} from "$app/navigation";
	import { onMount } from 'svelte';
	import Navbar from "$lib/components/ui/Navbar/Navbar.svelte"

	let { children , data } = $props();

	let {session , supabase} = $derived(data)

	onMount(()=>{
		const {data} = supabase.auth.onAuthStateChange((event,newSession)=>{
			if(newSession?.expires_at !== session?.expires_at){
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()

	})


</script>

<header class="h-20 w-full relative overflow-hidden inset-0 border-b-[1px] border-b-gray-600">
	<Navbar />
</header>


{@render children()}

<script lang="ts">
	import '../app.css';
	import {invalidate} from "$app/navigation";
	import { onMount } from 'svelte';
	import Navbar from "$lib/components/ui/Navbar/Navbar.svelte"

	let { children , data } = $props();

	let {session , supabase} = $derived(data)

	onMount(()=>{
		const {data} = supabase.auth.onAuthStateChange((_,newSession)=>{
			if(newSession?.expires_at !== newSession?.expires_at){
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()

	})


</script>


<Navbar />

{@render children()}

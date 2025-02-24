<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    
    let { data, children }: { data: LayoutData, children: Snippet } = $props();
    // let { supabase } = $derived(data)

    // const logout = async() => {
    //     const {error} = await supabase.auth.signOut()
    //     if(error){
    //         console.error(error)
    //     }
    // }

</script>

<header class="text-white">
    <nav>
      <a href="/" class="text-red-500">Home</a>
    </nav>
    <!-- <button onclick={logout}>Logout</button> -->
</header>
<main>
    {@render children()}
</main>
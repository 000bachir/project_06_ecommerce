import type { LayoutLoad } from './$types';
import { isBrowser, createBrowserClient, createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';


// Define the `load` function for the layout.
export const load: LayoutLoad = async ({ data, fetch, depends }) => {
    // Declare a dependency for Supabase auth to trigger reloads when auth state changes.
    depends('supabase:auth');

    // Determine the environment (browser or server) and create the appropriate Supabase client.
    const supabase = isBrowser()
        ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch, // Use the `fetch` function from the SvelteKit load context in the browser.
            },
        })
        : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch, // Use the `fetch` function from the SvelteKit load context on the server.
            },
            cookies: {
                getAll() {
                    return data.cookies; // Access cookies provided by the server.
                },
            },
        });

    // Fetch the current session from Supabase.
    let { data: { session } } = await supabase.auth.getSession();

    // Fetch the current user data from Supabase.
    let { data: { user } } = await supabase.auth.getUser();

    // Return the session, Supabase client, and user information to the layout.
    return {
        session,
        supabase,
        user,
    };
};

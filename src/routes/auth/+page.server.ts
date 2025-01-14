// Import the `redirect` function from SvelteKit. This is used to redirect users to different routes.
import { redirect } from "@sveltejs/kit";

// Import the `Actions` type from SvelteKit. This defines the structure of form actions.
import type { Actions } from "./$types";


// Define actions for the route. These actions handle form submissions for signup and login.
export const actions: Actions = {
    // The `signup` action handles user registration.
    signup: async ({ request, locals: { supabase } }) => {
        // Retrieve the submitted form data from the request.
        const formData = await request.formData();

        // Extract the `email` and `password` values from the form data.
        const email = await formData.get('email') as string;
        const password = await formData.get('password') as string;

        // Use the Supabase client to register the user with the provided email and password.
        const { error } = await supabase.auth.signUp({ email, password });

        // If there is an error during signup, log it and redirect the user to an error page.
        if (error) {
            console.error(error);
            redirect(303, '/auth/error'); // 303: See Other (used for redirection after form submission).
        } else {
            // If signup is successful, redirect the user to the homepage.
            redirect(303, '/');
        }
    },

    // The `login` action handles user authentication (signing in).
    login: async ({ request, locals: { supabase } }) => {
        // Retrieve the submitted form data from the request.
        const formData = await request.formData();

        // Extract the `email` and `password` values from the form data.
        const email = await formData.get('email') as string;
        const password = await formData.get('password') as string;

        // Use the Supabase client to authenticate the user with their email and password.
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        // If there is an error during login, log it and redirect the user to an error page.
        if (error) {
            console.error(error);
            redirect(303, '/auth/error');
        } else {
            // If login is successful, redirect the user to a private area of the application.
            redirect(303, '/private');
        }
    },
};

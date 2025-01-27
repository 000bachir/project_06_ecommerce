// Import the `redirect` function from SvelteKit. This is used to redirect users to different routes.
import { redirect, fail } from "@sveltejs/kit";

// Import the `Actions` type from SvelteKit. This defines the structure of form actions.
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
    const { session } = await safeGetSession();

    // if the user is already logged in return them to the account page
    if (session) {
        throw redirect(303, '/Private') // Use "throw" to stop further execution
    }
    return {
        url: url.origin
    }
}

// Define actions for the route. These actions handle form submissions for signup and login.
export const actions: Actions = {
    // The `signup` action handles user registration.
    signup: async ({ request, locals: { supabase } , url }) => {
        // Retrieve the submitted form data from the request.
        const formData = await request.formData();

        // Extract the `email` and `password` values from the form data.
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) {
            return fail(400, {
                errors: {
                    email: !email ? "email is required" : "",
                    password: !password ? "password is required" : "",
                },
                email,
                password
            })
        }

        const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)

        if (!validEmail) {
            return fail(400, { errors: { email: 'Please enter a valid email address' }, email })
        }

        try {
            // Use the Supabase client to register the user with the provided email and password.
            const { error } = await supabase.auth.signUp({ email, password , options : {
                emailRedirectTo : `${url.origin}/private/ `
            } });
            // If there is an error during signup, log it and redirect the user to an error page.
            if (error) {
                console.error('signUp error:', error)
                return fail(400, {
                    errors: {
                        email: error.message.includes('email') ? error.message : "",
                        password: error.message.includes('password') ? error.message : "An issue occurred with the password."
                    },
                    email,
                    password
                })
            }
            throw redirect(303, '/Private')

        } catch (error) {
            console.error('Unexpected error happened during signup:', error)
            return fail(500, {
                errors: { email: 'An unexpected error occurred', password: 'An unexpected error occurred' },
                email,
                password
            })
        }
    },

    // // The `login` action handles user authentication (signing in).
    // login: async ({ request, locals: { supabase } }) => {
    //     // Retrieve the submitted form data from the request.
    //     const formData = await request.formData();
    //     // Extract the `email` and `password` values from the form data.
    //     const email = formData.get('email') as string;
    //     const password = formData.get('password') as string;

    //     if (!email || !password) {
    //         return fail(400, {
    //             errors: { email: "email and password are required" },
    //             email
    //         })
    //     }

    //     const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)

    //     if (!validEmail) {
    //         return fail(400, { errors: { email: 'Please enter a valid email address' }, email })
    //     }

    //     try {
    //         // Use the Supabase client to authenticate the user with their email and password.
    //         const { error } = await supabase.auth.signInWithPassword({ email, password });
    //         // If there is an error during login, log it and redirect the user to an error page.
    //         if (error) {
    //             console.error("login error:", error);
    //             return fail(400, {
    //                 errors: { email: error.message },
    //                 email
    //             })
    //         }
    //         throw redirect(303, '/private');
    //         // If login is successful, redirect the user to a private area of the application.

    //     } catch (error) {
    //         console.error('Unexpected error during login:', error);
    //         return fail(500, {
    //             errors: { email: 'An unexpected error occurred', password: "An unexpected error occurred" },
    //             email,
    //             password
    //         });
    //     }
    // },
};


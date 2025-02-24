import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";


export const actions: Actions = {
    signup: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const password = formData.get('password') as string
        const username = formData.get("username") as string


        if (typeof email !== "string" || typeof password !== "string" ){
            console.error("email and password are not of type string")
            return null
        }

        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            console.error(String(error))
            redirect(303, '/auth/error')
        } else {
            redirect(303, '/')
        }
    },
    login: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const password = formData.get('password') as string


        if (typeof email !== "string" || typeof password !== "string") {
            console.error("email and password are not of type string")
            return null
        }

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            console.error(String(error))
            redirect(303, '/auth/error')
        } else {
            redirect(303, '/private')
        }
    }
}
import type { EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

// Define the GET request handler
export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
    // Extract the token_hash, type, and next parameters from the URL query string
    const token_hash = url.searchParams.get('token_hash'); // The OTP hash sent to the user's email
    const type = url.searchParams.get('type') as EmailOtpType | null; // The type of OTP (e.g., magic link, recovery)
    const next = url.searchParams.get('next') ?? '/private'; // The redirect path after successful authentication (defaults to root '/')

    /**
     * Prepare a clean redirect URL by:
     * - Updating the path to the `next` URL.
     * - Removing sensitive parameters like `token_hash` and `type` from the query string.
     */
    const redirectTo = new URL(url);
    redirectTo.pathname = next;
    redirectTo.searchParams.delete('token_hash');
    redirectTo.searchParams.delete('type');

    // If both token_hash and type are provided, attempt to verify the OTP
    if (token_hash && type) {
        // Call Supabase to verify the OTP with the provided type and token_hash
        const { error } = await supabase.auth.verifyOtp({ type, token_hash });

        // If OTP verification is successful, redirect to the cleaned-up URL
        if (!error) {
            redirectTo.searchParams.delete('next'); // Remove the `next` parameter after successful login
            redirect(303, redirectTo); // Perform a 303 redirect to the target URL
        }
    }

    // If OTP verification fails or parameters are missing, redirect to the error page
    redirectTo.pathname = '/auth/error'; // Set the redirect path to the error page
    redirect(303, redirectTo); // Perform a 303 redirect to the error page
};

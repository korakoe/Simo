import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData()) as {
            email: string;
            password: string;
        };

        try {
            await locals.pb.collection("users").authWithPassword(data.email, data.password);
            var redirectUser = true
        } 
        catch (e) {
            var redirectUser = false
            console.error(e);

            if (e.response.message == "Failed to authenticate.") {
                return {
                    userNotExists: true
                }
            }
        }

        if (redirectUser) {
            throw redirect(303, "/app");
        }

    }
}
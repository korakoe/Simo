import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData()) as {
            username: string;
            email: string;
            password: string;
            passwordConfirm: string;
            type: string;
        };

        data.type = "User"

        try {
            await locals.pb.collection("users").create(data);
            await locals.pb.collection("users").authWithPassword(data.email, data.password);
            throw redirect(303, "/app");
        } 
        catch (e) {
            console.error(e);
            throw e;
        }

    }
}
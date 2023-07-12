import { redirect, type Actions } from "@sveltejs/kit";

let redirect = false

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData()) as {
            username: string;
            email: string;
            password: string;
            passwordConfirm: string;
            type: string;
        };

        let email_regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
        /*Validates email... basically i'm not bothered to use css to change the default html alert when using an email input*/

        let username_regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm);
        /*Minimum 3 characters, maximum 8 characters, _ and . in place of spaces (like insta) 
          not allowed to have two or more consecutive dots in a row, not allowed to start or end the username with a dot*/
        

        let password_regex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"); 
        /*Minimum eight characters, at least one uppercase letter, one lowercase letter and one number*/

        data.type = "User"

        if (data.email == "" || data.username == "") {
            return {
                error_message: "You can not leave an empty email or username"
            }
        }
        else if (data.email == "" || data.username == "") {
            return {
                error_message: "You can not leave an empty email or username"
            }
        }
        else if (!username_regex.test(data.username)) {
            console.log(data.username, !username_regex.test(data.username))
            return {
                error_message: "Username is invalid, use a-z, 0-9, _ and ."
            }
        }
        else if (!email_regex.test(data.email)) {
            return {
                error_message: "Email is invalid"
            }
        }
        else if (!password_regex.test(data.password)) {
            return {
                error_message: "Password is invalid, you must have at 8-32 characters, \
                at least one uppercase letter, one lowercase letter and one number"
            }
        }
        else if (data.password && data.passwordConfirm == "") {
            return {
                error_message: "Please confirm your password"
            }
        }
        else if (data.password != data.passwordConfirm) {
            return {
                error_message: "Passwords don't match"
            }
        }

        try {
            await locals.pb.collection("users").create(data);
            await locals.pb.collection("users").authWithPassword(data.email, data.password);
            let redirect = True
        } 
        catch (e) {
            if (e.response.message == "Failed to create record.") {
                return {
                    error_message: "This user is already registered, try a different email or username"
                }
            }

            console.error(e);
            return {
                error_message: "An unknown error has occured, this has been logged"
            }
        }

        if (redirect) {
            throw redirect(303, "/app");
        }

    }
}
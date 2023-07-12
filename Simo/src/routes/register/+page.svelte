<script>
    import DarkToggle from "$lib/darkToggle.svelte";
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/pocketbase";
    import Alerts from "$lib/alerts.svelte";

    export let form

</script>


<form method="post" class="login-card dark:dark-login-card" use:enhance={() => {
    return async ({ result }) => {
        pb.authStore.loadFromCookie(document.cookie);
        await applyAction(result)
    }
}}>
        <h1 class="Large-Red-Centered">Register</h1>
        <h2 class="Medium-Blue-Centered"> Woah! A new User!</h2>
        <hr class="Red-line">
        <div class="Login-form-card">
            <h2 class="Small-Text dark:Dark-Small-Text"> Username</h2>
            <input type="text" name="username" class="form-field">
            <h2 class="Small-Text dark:Dark-Small-Text"> Email</h2>
            <input type="email" name="email" class="form-field">
            <h2 class="Small-Text dark:Dark-Small-Text"> Password</h2>
            <input type="password" name="password" class="form-field">
            <h2 class="Small-Text dark:Dark-Small-Text"> Confirm Password</h2>
            <input type="password" name="passwordConfirm" class="form-field">
            <div class="button-holder">
                <input type="submit" value="Continue" class="form-submit" formnovalidate>
                <a class="form-signup" href="/login">Log-in</a>
            </div>
            
        </div>
</form>

{#if form?.error_message}
    <Alerts message={form?.error_message} type="error" />
{/if}

<script>
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
        <h1 class="Large-Red-Centered no-select">Register</h1>
        <h2 class="Medium-Blue-Centered no-select"> Woah! A new User!</h2>
        <hr class="Red-line no-select">
        <div class="Login-form-card">
            <h2 class="Small-Text dark:Dark-Small-Text no-select"> Username</h2>
            <input type="text" name="username" class="form-field">
            <h2 class="Small-Text dark:Dark-Small-Text no-select"> Email</h2>
            <input type="email" name="email" class="form-field">
            <h2 class="Small-Text dark:Dark-Small-Text no-select"> Password</h2>
            <input type="password" name="password" class="form-field">
            <h2 class="Small-Text dark:Dark-Small-Text no-select"> Confirm Password</h2>
            <input type="password" name="passwordConfirm" class="form-field">
            <div class="button-holder">
                <input type="submit" value="Continue" class="form-submit no-select" formnovalidate>
                <a class="form-signup no-select" href="/login">Log-in</a>
            </div>
            
        </div>
</form>

{#if form?.error_message}
    <Alerts message={form?.error_message} type="error" />
{/if}

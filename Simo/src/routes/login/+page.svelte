<script>
    import Alerts from "$lib/alerts.svelte";
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/pocketbase";

    export let form
</script>

<form method="post" class="login-card dark:dark-login-card"  use:enhance={() => {
        return async ({ result }) => {
            pb.authStore.loadFromCookie(document.cookie);
            await applyAction(result)
        }
    }}>
    <h1 class="Large-Red-Centered">Log-in</h1>
    <h2 class="Medium-Blue-Centered"> It's nice to see you again!</h2>
    <hr class="Red-line">
    <div class="Login-form-card">
        <h2 class="Small-Text dark:Dark-Small-Text"> Email or Username</h2>
        <input type="text" class="form-field" name="email">
        <h2 class="Small-Text dark:Dark-Small-Text"> Password</h2>
        <input type="password" class="form-field" name=password>
        <div class="button-holder">
            <input type="submit" value="Continue" class="form-submit">
            <a class="form-signup" href="/register">Register</a>
        </div>
    </div>
</form>

{#if form?.error_message}
    <Alerts message={form?.error_message} type="error" />
{/if}

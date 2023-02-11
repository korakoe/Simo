<script>
    import DarkToggle from "$lib/darkToggle.svelte";
</script>

<DarkToggle />

<div class="login-card dark:dark-login-card">
    <h1 class="Large-Red-Centered">Log-in</h1>
    <h2 class="Medium-Blue-Centered"> It's nice to see you again!</h2>
    <hr class="Red-line">
    <div class="Login-form-card">
        <h2 class="Small-Text dark:Dark-Small-Text"> Email or Username</h2>
        <input type="email" class="form-field">
        <h2 class="Small-Text dark:Dark-Small-Text"> Password</h2>
        <input type="password" class="form-field">
        <div class="button-holder">
            <input type="submit" value="Continue" class="form-submit">
            <a class="form-signup" href="/signup">Sign-up</a>
        </div>
        
    </div>
</div>


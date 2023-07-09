<script>
    import { currentUser, pb } from "$lib/pocketbase";
    import { redirect } from "@sveltejs/kit";
    import { browser } from '$app/environment';
    
    var username = ""
    var nickname = ""
    var email = ""
    var type = ""

    if (currentUser) {
        currentUser.subscribe((value) => {
            username = value?.username;
            nickname = value?.name;
            email = value?.email;
            type = value?.type
        })
        console.log(`Logged in as ${username} || ${nickname} || ${email} || Perm level: ${type}`)
        if (username == undefined) {
            console.log("Redirecting to login...")
            if (browser) { // to prevent error window is not defined, because it's SSR
                window.location.href = '/login';
            }
        }
    }
    else {
        if (browser) { // to prevent error window is not defined, because it's SSR
                window.location.href = '/login';
            }
    }

</script>


{#if $currentUser}
    <h1 class="LandingTitle">Hello {$currentUser.username}</h1>
{/if}
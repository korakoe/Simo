<script>
    import { currentUser, pb} from "$lib/pocketbase";
    import { redirect } from "@sveltejs/kit";
    import { browser } from '$app/environment';
    import { PUBLIC_PB_ADDR } from "$env/static/public";
    import AvatarContainer from "$lib/avatarContainer.svelte";


    if (currentUser) {
        currentUser.subscribe(function (user) {
            if (user?.username == undefined) {
                if (browser) { // to prevent error window is not defined, because it's SSR
                    console.log("User was not logged in... redirecting")
                    window.location.href = '/login';
                }
            }

        })
    }
</script>


{#if $currentUser}
    <h1 class="LandingTitle">Hello {$currentUser.name}</h1>
    {#key $currentUser.avatar}
        <AvatarContainer 
        containerWidth="5rem" 
        containerHeight="5rem" 
        userId={$currentUser.id} 
        username={$currentUser.username} 
        avatarFile={$currentUser.avatar} 
        styleClass=""
        style="border: 0.25rem solid #ffffff"/>
    {/key}
{/if}
<script>
    import { PUBLIC_PB_ADDR, PUBLIC_NO_AVATAR_URL } from "$env/static/public";

    export let username = 'null';
    export let userId = 'null';
    export let avatarFile = "";
    export let imageWidth = "128";
    export let imageHeight = "128";
    export let containerWidth=`${imageWidth}px`;
    export let containerHeight=`${imageHeight}px`; 
    export let styleClass = "";
    export let style = "";
</script>

<div style='--imageWidth:{containerWidth}; 
            --imageHeight:{containerHeight}; {style}' 
     class="avatar-holder no-select {styleClass}">

    {#if avatarFile != ""}
        <img src={`${PUBLIC_PB_ADDR}/api/files/users/${userId}/${avatarFile}`} 
        alt={`${username}'s avatar'`} class="scale-img">
    {/if}
    {#if avatarFile == ""}
        <img src={PUBLIC_NO_AVATAR_URL} alt={`${username}'s avatar'`} 
        width={imageWidth} height={imageHeight} class="scale-img">
    {/if}

</div>

<style>
    .avatar-holder {
        width: var(--imageWidth);
        height: var(--imageHeight);
        border-radius: 100%;
        overflow: hidden;
    }

    .scale-img {
        width: 100%;
        height: 100%;
    }
</style>
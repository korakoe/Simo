<script>
    export let message = 'An unknown error occurred...';
    export let type = "error";
    import { fly } from 'svelte/transition'
    import { backOut, elasticOut} from 'svelte/easing'

    let visible = true;

    function hide_alert() {
        visible = false
    }

    function JumpDown(node, { duration }) {
        return {
        duration,
        css: (t) => {
            const eased = elasticOut(t);

            return `
            transform: translate(0, 100%);`;
        }
        };
    }

</script>

{#if visible}
    {#if type=="error"}
        <div class="error-alert" out:fly={{y: 100, delay: 300, easing: backOut}}>
            {message}
            <span class="closebtn" on:click={() => hide_alert()}>&times;</span>
        </div>
    {/if}

    {#if type=="info"}
        <div class="info-alert" out:fly={{y: 100, delay: 300, easing: backOut}}>
            {message}
            <span class="closebtn" on:click={() => hide_alert()}>&times;</span>
        </div>
    {/if}
{/if}


<style>
    .error-alert {
        animation:pop-in 0.5s;
        position: fixed;
        padding: 20px;
        background-color: rgba(255,0,136,1); /* Red */
        color: white;
        margin-bottom: 15px;
        color: #ffffff;
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
        font-size: x-small;
        cursor: pointer;
        border-radius: 1rem;
        transition: 0.3s;
        margin: 1rem;
        width: auto;
        min-width: rem;
        bottom: 0;
        left: 10%;
        right: 10%;
    }

    .info-alert {
        animation:pop-in 0.5s;
        position: fixed;
        padding: 20px;
        background-color: #20A4F3; /* Blue */
        color: white;
        margin-bottom: 15px;
        color: #ffffff;
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
        font-size: x-small;
        cursor: pointer;
        border-radius: 1rem;
        transition: 0.3s;
        margin: 1rem;
        width: auto;
        min-width: rem;
        bottom: 0;
        left: 10%;
        right: 10%;
    }

    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }
</style>
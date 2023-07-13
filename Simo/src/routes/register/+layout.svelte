<script>
    import { fly } from 'svelte/transition'

    import DarkToggle from "$lib/darkToggle.svelte";
  
    export let data
</script>
  
<DarkToggle />
<img src="/favicon.ico" alt="Simo." width="25" />

  {#key data.url}
    <div class="transition_container"
      in:fly={{ y: 200, duration: 300, delay: 500 }}
      out:fly={{ y: 200, duration: 300 }}
    >
      <slot />
    </div>
  {/key}
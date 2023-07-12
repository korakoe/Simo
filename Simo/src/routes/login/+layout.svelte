<script>
    import { fly } from 'svelte/transition'
  
    export let data
  </script>
  
<DarkToggle />

  {#key data.url}
    <div class="transition_container"
      in:fly={{ x: -200, duration: 300, delay: 500 }}
      out:fly={{ x: -200, duration: 300 }}
    >
      <slot />
    </div>
  {/key}
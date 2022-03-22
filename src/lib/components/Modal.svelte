<script>
  export let isOpen, closeModal

  import { fade } from "svelte/transition"
</script>

{#if isOpen}
  <div 
    class="modal__container"

    on:click={closeModal}
    transition:fade={{ duration: 200 }}
  >
    <div 
      class="modal"
      on:click|stopPropagation
    >
      <slot />
    </div>
  </div>
{/if}

<style>
.modal__container {
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
}

.modal {
  border-radius: 5px;
  padding: 1em;

  max-width: 400px;
  background: var(--bg-body);
}
</style>

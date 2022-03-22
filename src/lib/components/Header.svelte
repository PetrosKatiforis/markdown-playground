<script>
  import HelpModal from "$lib/components/HelpModal.svelte"

  // Handling the modal state
  let isOpen = false

  function toggleIsOpen() {
    isOpen = !isOpen
  }
</script>

<div class="editor__header">
  <button on:click={toggleIsOpen}>
    Help / Markdown Cheatsheet
  </button>
  
  <a class="btn" target="_blank" href="https://github.com/Petros-K/markdown-playground">
    Github Repository
  </a>
</div>

<HelpModal 
  {isOpen} 
  closeModal={toggleIsOpen} 
/>

<style>
.editor__header {
  display: flex;
  gap: 0.5em;
  align-items: center;

  padding: 1em 1em 0 1em;
}
</style>

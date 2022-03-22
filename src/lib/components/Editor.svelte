<script>
  import placeholderMarkdown from "$lib/data/markdown.js"
  import Header from "$lib/components/Header.svelte"
  import Preview from "$lib/components/Preview.svelte"
  import MarkdownEditor from "$lib/components/MarkdownEditor.svelte"

  let source = placeholderMarkdown   
</script>

<div class="editor">
  <Header />
  
  <div class="editor__main">
    <MarkdownEditor bind:source />

    <Preview markdown={source} />
  </div>
</div>

<style>
.editor {
  max-width: 1100px;
  margin: 2em auto;
}

.editor__main {
  display: flex;
  padding: 1em;
  gap: 3em;

  max-height: 80vh;
}

:global(.editor__main > *) {
  scrollbar-width: none;

  flex: 1 1 0;
  min-height: 200px;
  padding-right: 1em;
  overflow-y: scroll;
}

@media (max-width: 900px) {
  .editor__main {
    flex-direction: column;
    max-height: 90vh;
    height: 90vh;
  }

  .editor {
    margin: 1em auto;
  }
}
</style>

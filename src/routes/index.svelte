<script>
  import Editor from "$lib/components/Editor.svelte"
</script>

<svelte:head>
  <title>Svelte Markdown Playground</title>
  
  <meta 
    name="description" 
    content="
      A svelte application for markdown experiments. 
      Write markdown and view the compiled version with the help of the real time previewer
    "
  >
</svelte:head>

<Editor />

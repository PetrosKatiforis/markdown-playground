<script>
  export let source

  // By default, when pressing tab the browser will focus on the next element of the webpage
  // However inside the textarea it should cause spaces
  function replaceTab(element) {
    const TAB_SIZE = 2

    let start = element.selectionStart
    let end = element.selectionEnd

    // Inserting some spaces in the place of the pressed tab event
    element.value = element.value.substring(0, start) + 
        " ".repeat(TAB_SIZE) + element.value.substring(end)

    element.selectionStart = element.selectionEnd = start + TAB_SIZE 
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case "Tab":
        event.preventDefault()
        replaceTab(event.target)

        // Force an update event for the preview
        source = event.target.value 
    }
  }
</script>

<textarea
  bind:value={source}
  on:keydown={handleKeyDown}

  placeholder="Enter some markdown here"
  spellcheck="false"
/>

<style>
textarea {
  background: none;
  border: none;
  resize: none;
  outline: none;

  font-family: monospace;
}
</style>

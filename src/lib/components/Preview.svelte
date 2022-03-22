<script>
  export let markdown

  import emoji from "node-emoji"
  import hljs from "highlight.js"
  import "highlight.js/styles/base16/material-darker.css"

  import { marked } from "marked"

  // Adding syntax highlighting support
  marked.setOptions({
    highlight: function(code, lang) {
      try {
        return hljs.highlight(code, { language: lang || "js" }).value

      } catch(err) {
        return err.toString()
      }
    }
  })

  // Compiled and reactive HTML version with emojis
  $: output = marked(emoji.emojify(markdown))
</script>

<div class="markdown__preview">
  {@html output}
</div>

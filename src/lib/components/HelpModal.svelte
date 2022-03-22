<script>
  import Modal from "$lib/components/Modal.svelte"
  export let isOpen, closeModal
</script>

<Modal {isOpen} {closeModal}>
  <h1>What's Markdown?</h1>
  <p>
    Markdown is a lightweight markup language for formatted text.
    It can be used to create websites, blog posts, notes, email messages, .README files and much more!
  </p>

  <h2>Creation and Goal</h2>
  <p>
    It was first released in 2004 by John Gruber and Aaron Swartz.
    It was intended to be a readable language that could be easily understood.
  </p>

  <p>
    For a quick guide, check out 
    <a target="_blank" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">this cheatsheet</a>
  </p>
</Modal>

<style>
h1 {
  font-size: 1.3rem;
  margin-bottom: 0.8em;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5em;
  margin-top: 1em;
}

p {
  font-size: 0.9rem;
  margin-top: 1em;
}
</style>

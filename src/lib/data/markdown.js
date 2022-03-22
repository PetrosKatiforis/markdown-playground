export default 
`# Markdown Playground

Lorem markdownum obliquo bella. Respicit [spectat](http://iraefugit.net/causa) ausus puniceo! Quod hos quod pulveris flumina caelo. Humo annum, est vox **fronti trepidare** protinus ibi genetrix rotae tot fidissime pactaque erat ferarum rostro. Mea tamen concutit digitis antiquam inplent Stygia.

> Mea tamen concutit digitis antiquam inplent Stygia.
> espicit ausus puniceo! Quod hos quod pulveris flumina caelo.

## Syntax Highlighting :robot_face: (+ Emojis) 

\`\`\`js
// Adding syntax highlighting support
marked.setOptions({
  highlight: function(code, lang) {
    console.log("Doing some extreme computations...")

    return hljs.highlight(lang, code).value
  }
})
\`\`\`

### Tables and Checklists

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

- [x] Learn how to write Markdown
- [x] Create a markdown note app
- [x] Update your github .README's
`

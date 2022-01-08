import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  
  const mark = `# React Markdown Previewer
## This is an h2 element
### h3 You get the idea
Heres some code, \`<div></div>\`, between 2 backticks.

This is **bold**
This is _italic_
\`\`\`
code inside
\`\`\`
[This is a link](https://freecodecamp.org)
> Block Quotes!

![Coding Image](https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png "Picture of a laptop and coffee")
- One
- Two 

`
  const [markdown, setMarkdown] = useState(mark)
  return <main>
    <section className='markdown'>
      <textarea className='input' value={markdown} id='editor' onChange={(e)=>setMarkdown(e.target.value)}></textarea>
    <article className='result' id='preview'>

    <ReactMarkdown >{markdown}</ReactMarkdown>
    </article>
    </section>
  </main>
}

export default App

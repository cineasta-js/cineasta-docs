import React from 'react'
import Markdown2HTML from 'react-markdown-to-html'
import * as styles from 'components/Markdown.styles'

const Markdown = (props) => (
  <div className={ styles.markdown }>
    <Markdown2HTML src={ props.file } />
  </div>
)

export default Markdown

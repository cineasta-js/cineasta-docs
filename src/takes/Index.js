import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'takes/Index.md'

export const path = '/'
export const scene = 'app'

export const component = (props) => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

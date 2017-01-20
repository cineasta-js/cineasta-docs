import React from 'react'
import Markdown from 'components/markdown'
import markdownFile from 'scenes/index.md'

export const path = '/'
export const take= 'app'

export const component = (props) => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

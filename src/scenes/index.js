import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'scenes/Index.md'

export const path = '/'
export const take= 'app'

export const component = (props) => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

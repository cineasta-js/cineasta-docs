import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'scenes/Generating.md'

export const path = 'generating'
export const take= 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

import React from 'react'
import Markdown from 'components/markdown'
import markdownFile from 'scenes/generating.md'

export const path = 'generating'
export const take= 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

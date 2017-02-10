import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'takes/Generating.md'

export const path = 'generating'
export const scene = 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

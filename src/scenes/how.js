import React from 'react'
import Markdown from 'components/markdown'
import markdownFile from 'scenes/how.md'

export const path = 'how'
export const take= 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

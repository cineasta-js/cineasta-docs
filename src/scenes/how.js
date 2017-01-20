import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'scenes/How.md'

export const path = 'how'
export const take= 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

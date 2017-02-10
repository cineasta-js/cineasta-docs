import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'takes/How.md'

export const path = 'how'
export const scene = 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

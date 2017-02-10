import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'takes/What.md'

export const path = 'what'
export const scene = 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

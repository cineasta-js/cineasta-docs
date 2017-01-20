import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'scenes/What.md'

export const path = 'what'
export const take= 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

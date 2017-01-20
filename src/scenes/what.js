import React from 'react'
import Markdown from 'components/markdown'
import markdownFile from 'scenes/what.md'

export const path = 'what'
export const take= 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
  </div>
)

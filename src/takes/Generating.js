import React from 'react'
import markdownFile from 'takes/Generating.md'
import * as styles from 'takes/Generating.styles'
import { Link } from 'react-router'
import Markdown from 'components/Markdown'

export const path = '/cli/generators'
export const scene = 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
    <p><Link to='/framework' className={ styles.link }>learn about the framework</Link></p>
  </div>
)

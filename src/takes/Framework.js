import React from 'react'
import markdownFile from 'takes/Framework.md'
import * as styles from 'takes/Framework.styles'
import { Link } from 'react-router'
import Markdown from 'components/Markdown'

export const path = '/framework'
export const scene = 'app'

export const component = () => (
  <div>
    <Markdown file={ markdownFile } />
    <p><Link to='/cli' className={ styles.link }>learn about the CLI</Link></p>
  </div>
)

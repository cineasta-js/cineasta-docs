import React from 'react'
import markdownFile from 'takes/Cli.md'
import * as styles from 'takes/Cli.styles'
import { Link } from 'react-router'
import Markdown from 'components/Markdown'

export const path = '/cli'
export const scene = 'app'

export const component = (props) => (
  <div>
    <Markdown file={ markdownFile } />
    <p><Link to='/framework' className={ styles.link }>learn about the framework</Link> or <Link to='/cli/generators' className={ styles.link }>learn about the CLI generators</Link></p>
  </div>
)

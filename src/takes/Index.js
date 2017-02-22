import React from 'react'
import Markdown from 'components/Markdown'
import markdownFile from 'takes/Index.md'
import * as styles from 'takes/Index.styles'
import { Link } from 'react-router'

export const path = '/'

export const component = (props) => (
  <div className={ styles.container }>
    <div className={ styles.nav }>
      <Link to='/framework'>Framework docs</Link>
      <Link to='/cli'>CLI docs</Link>
      <a href='https://github.com/cineasta-js' target='_blank'>github</a>
    </div>
    <Markdown file={ markdownFile } />
    <p>What next? <Link to='/framework' className={ styles.link }>learn about the framework</Link> or <Link to='/cli' className={ styles.link }>learn about the CLI</Link></p>
  </div>
)

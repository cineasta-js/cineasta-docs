import React from 'react'
import Markdown2HTML from 'react-markdown-to-html'

import * as styles from 'scenes/index.styles'

import mdHome from 'scenes/home.md'

export const path = '/'
export const take= 'app'

export const component = (props) => (
  <div className={ styles.content }>
    <h1>Scene</h1>
    <p>cineastaJS framework</p>
    <Markdown2HTML src={ mdHome } />
  </div>
)

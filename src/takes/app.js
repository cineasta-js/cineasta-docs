import React from 'react'
import * as styles from 'takes/app.styles'

export const component = (props) => (
  <div className={ styles.app }>
    <header className={ styles.header }>header</header>
    <article className={ styles.article }>
      <h1>App</h1>
      { props.children }
    </article>
    <aside className={ styles.aside }>aside</aside>
  </div>
)

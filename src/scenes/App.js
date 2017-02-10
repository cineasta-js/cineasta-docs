import React from 'react'
import Menu from 'components/Menu'
import * as styles from 'scenes/App.styles'

export const component = (props) => (
  <div className={ styles.app }>
    <article className={ styles.article }>
      { props.children }
    </article>
    <aside className={ styles.aside }>
      <Menu />
    </aside>
  </div>
)

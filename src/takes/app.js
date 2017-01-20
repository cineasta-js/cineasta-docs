import React from 'react'
import { IndexLink } from 'react-router'
import Menu from 'components/Menu'
import * as styles from 'takes/App.styles'

export const component = (props) => (
  <div className={ styles.app }>
    <header className={ styles.header }>
      <IndexLink to='/'>
        <img alt='cineastaJS Logo'
          className={ styles.logo }
          src='https://github.com/cineasta-js/brand/raw/master/logos/logo-transparent.png' />
      </IndexLink>
      <Menu />
    </header>
    <article className={ styles.article }>
      { props.children }
    </article>
    <aside className={ styles.aside }></aside>
  </div>
)

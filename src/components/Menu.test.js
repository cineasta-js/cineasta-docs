import React from 'react'
import ReactDOM from 'react-dom'
import Menu from 'components/Menu'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Menu />, div)
})

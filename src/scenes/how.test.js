import React from 'react'
import ReactDOM from 'react-dom'
import { component as HowScene } from 'scenes/How'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HowScene />, div)
})
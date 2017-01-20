import React from 'react'
import ReactDOM from 'react-dom'
import { component as HowScene } from 'scenes/how'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HowScene />, div)
})

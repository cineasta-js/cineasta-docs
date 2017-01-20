import React from 'react'
import ReactDOM from 'react-dom'
import { component as GeneratingScene } from 'scenes/Generating'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GeneratingScene />, div)
})

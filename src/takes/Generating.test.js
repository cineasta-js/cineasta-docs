import React from 'react'
import ReactDOM from 'react-dom'
import { component as GeneratingScene } from 'takes/Generating'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GeneratingScene />, div)
})

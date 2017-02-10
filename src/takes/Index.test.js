import React from 'react'
import ReactDOM from 'react-dom'
import { component as IndexScene } from 'takes/Index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<IndexScene />, div)
});

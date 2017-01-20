import React from 'react'
import ReactDOM from 'react-dom'
import { component as WhatScene } from 'scenes/What'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WhatScene />, div)
})

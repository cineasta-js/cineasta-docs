import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'components/Markdown'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Markdown />, div)
})

import test from 'ava'
import sinon from 'sinon'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import TitleText from './'

test('renders paragraphs', t => {
  t.plan(2)

  const output = renderStatic({
    title: 'Hello, world!',
    paragraphs: [
      'Hello',
      'World'
    ]
  })

  t.true(output.includes('<p'))
  t.true(output.includes('Hello'))
})

function renderStatic (props) {
  return renderToStaticMarkup(<TitleText {...props} />)
}

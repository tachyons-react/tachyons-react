import test from 'ava'
import sinon from 'sinon'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import TitleText from './'

test('renders paragraphs', t => {
  t.plan(1)

  const output = renderStatic({
    title: 'Hello, world!',
    paragraphs: [
      'Hello',
      'World'
    ]
  })

  console.log(output)
  t.true(output.includes('<p'))
})

function renderStatic (props) {
  return renderToStaticMarkup(<TitleText {...props} />)
}

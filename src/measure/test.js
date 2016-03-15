import test from 'ava'
import sinon from 'sinon'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Measure from './'

test.beforeEach(t => {
  t.context.component = renderStatic({
    children: [
      'Hello',
      'World'
    ],
    margin: 4,
    marginTop: {
      ns: 2,
      m: 4,
      l: 6
    }
  })
})


test('renders a measure div', t => {
  t.plan(2)

  t.true(t.context.component.includes('<div class="measure'))
  t.true(t.context.component.includes('Hello'))
})

test('applies margin', t => {
  t.plan(2)

  // TODO: Use get class names module
  t.true(t.context.component.includes('ma4'))
  t.true(t.context.component.includes('mt2-ns'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<Measure {...props} />)
}

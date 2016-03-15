import test from 'ava'
import sinon from 'sinon'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Base from './'

test.beforeEach(t => {
  t.context.component = renderStatic({
    children: [
      'Hello',
      'World'
    ],
    m: 4,
    mt: {
      ns: 2,
      m: 4,
      l: 6
    },
    f: {
      all: 3,
      ns: 2,
      l: 1
    }
  })
})

test('applies margin', t => {
  t.plan(2)

  // TODO: Use get class names module
  t.true(t.context.component.includes('ma4'))
  t.true(t.context.component.includes('mt2-ns'))
})

test('applies fonts', t => {
  t.plan(2)

  console.log(t.context.component)
  t.true(t.context.component.includes('f3'))
  t.true(t.context.component.includes('f2-ns'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<Base {...props} />)
}

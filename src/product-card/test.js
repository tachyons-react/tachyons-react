import test from 'ava'
import sinon from 'sinon'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import ProductCard from './'

test.beforeEach(t => {
  t.context.component = renderStatic({
    title: 'Hello, world!'
  })
})

test('renders product card', t => {
  t.plan(1)

  t.true(t.context.component.includes('Hello, world!'))
})

const renderStatic = (props) => {
  return renderToStaticMarkup(<ProductCard {...props} />)
}

import React from 'react'

import Measure from '../src/measure'
import TitleText from '../src/title-text'
import ProductCard from '../src/product-card'

class Root extends React.Component {
  render() {

    const paragraphs = [
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet!'
    ]
		const titleTextHtml = <TitleText title="Hello, world!" paragraphs={paragraphs} />
		const titleTextCode = '<TitleText\n  title="Hello, world!"\n  paragraphs={paragraphs} />'

    const product = {
      name: 'Cat',
      description: 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror.',
      img: 'http://placekitten.com/g/600/300',
      priceWithCurrency: '$1,234'
    }

    const productCardHtml = <ProductCard title={product.name} description={product.description} imgSrc={product.img} price={product.priceWithCurrency} />
    const productCardCode = '<ProductCard\n  title={product.name}\n  description={product.description}\n  imgSrc={product.img}\n  price={product.priceWithCurrency} />'

    const measureCode = '<Measure>\n  <SomeOtherComponent {...props} />\n</Measure>'
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="docs/tachyons.min.css" rel="stylesheet" />
        </head>
        <body>
          <header className="bg-near-white ph3 pv3 pv6-ns m0 bb b--black-10">
            <h1 className="f2 f-subheadline-ns">Tachyons React</h1>
          </header>
          <div className="cf bb b--black-10" style={{display: 'flex', alignItems: 'center' }}>
            <div className="fl w-100 w-50-ns">
              <Measure>
                ;lkjsdf;lkj;lksdgjf
              </Measure>
            </div>
            <div className="fl w-100 w-50-ns bg-near-white pa3">
              <pre className="f3 ml3">
                {measureCode}
              </pre>
            </div>
          </div>
          <div className="cf bb b--black-10" style={{display: 'flex', alignItems: 'center' }}>
            <div className="fl w-100 w-50-ns">
              {titleTextHtml}
            </div>
            <div className="fl w-100 w-50-ns bg-near-white pa3">
              <pre className="f3 ml3">
                {titleTextCode}
              </pre>
            </div>
          </div>
          <div className="cf bb b--black-10" style={{display: 'flex', alignItems: 'center' }}>
            <div className="fl w-100 w-50-ns">
              <div className="ma4">
                {productCardHtml}
              </div>
            </div>
            <div className="fl w-100 w-50-ns bg-near-white pa3">
              <pre className="f3 ml3">
                {productCardCode}
              </pre>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

export default Root

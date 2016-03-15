import React from 'react'

import Measure from '../src/measure'
import TitleText from '../src/title-text'
import ProductCard from '../src/product-card'

class Root extends React.Component {
  render() {
    const measureCode = '<Measure marginHorizontal={{ ns: 2 }}>\n  <SomeOtherComponent {...props} />\n</Measure>'

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
                Hello, world!
              </Measure>
            </div>
            <div className="fl w-100 w-50-ns bg-near-white pa3">
              <pre className="f3 ml3">
                {measureCode}
              </pre>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

export default Root

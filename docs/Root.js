import React from 'react'

import T from '../src/base'
import Measure from '../src/measure'

class Root extends React.Component {
  render() {
    const measureCode = '<Measure pv={{all: 2, ns: 4 }}>\n  <SomeOtherComponent {...props} />\n</Measure>'

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="docs/tachyons.min.css" rel="stylesheet" />
        </head>
        <body>
          <header className="bg-near-white bb b--black-10">
            <T ph={3} pv={{all: 3, ns: 6}} m={0}>
              <h1 className="f2 f-subheadline-ns">Tachyons React</h1>
            </T>
          </header>
          <div className="cf bb b--black-10" style={{display: 'flex', alignItems: 'center' }}>
            <div className="fl w-100 w-50-ns">
              <Measure pv={{all: 2, ns: 4}} pl={2}>
                <h1>Hello, world!</h1>
                <T f={3}>
                  <p>This component is used to restrict the width of text in order to improve readability.</p>
                  <p>It is especially useful for long form text to ensure a proper line length for a good reading rhythm.</p>
                </T>
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

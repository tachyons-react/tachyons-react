import React from 'react'
import TitleText from '../src/title-text'

class Root extends React.Component {
  render() {

    const paragraphs = [
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet!'
    ]
		const titleTextHtml = <TitleText title="Hello, world!" paragraphs={paragraphs} />
		const titleTextCode = '<TitleText\n  title="Hello, world!"\n  paragraphs={paragraphs} />'

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://npmcdn.com/tachyons@4.0.0-beta.10/css/tachyons.min.css" rel="stylesheet" />
        </head>
        <body>
          <header className="bg-near-white ph3 pv3 pv6-ns m0">
            <h1 className="f2 f-subheadline-ns">Tachyons React</h1>
          </header>
          <div className="cf bt b--black-10" style={{display: 'flex', alignItems: 'center' }}>
            <div className="fl w-100 w-50-ns">
              {titleTextHtml}
            </div>
            <div className="fl w-100 w-50-ns bg-near-white pa3">
              <pre className="f3 ml3">
                {titleTextCode}
              </pre>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

export default Root

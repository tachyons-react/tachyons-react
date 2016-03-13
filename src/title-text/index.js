import React, { PropTypes } from 'react'

const TitleText = ({ title, paragraphs }) => {
  const renderedParagraphs = paragraphs.map((p) => {
    return (
      <p key={p} className="measure lh-copy">{p}</p>
    )
  })

  return (
    <div className="pa3 pa5-ns">
      <h1>{title}</h1>
      {renderedParagraphs}
    </div>
  )
}

TitleText.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.array
}

export default TitleText

import React, { PropTypes } from 'react'
import scaleConversion from '../../util/scale-conversion'

const Measure = ({ children, margin, marginTop }) => {
  let classes = ['measure']
  classes.push(scaleConversion('margin', margin))
  classes.push(scaleConversion('marginTop', marginTop))

  return (
		<div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Measure

import React, { PropTypes } from 'react'
import scaleConversion from '../../util/scale-conversion'

const Measure = ({ children, margin }) => {
  let classes = ['measure']
  classes.push(scaleConversion('margin', margin))

  return (
		<div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Measure

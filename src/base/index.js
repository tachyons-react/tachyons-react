import React, { PropTypes } from 'react'

// TODO: Rename scale-conversion to something more sensical
import scaleConversion from '../../util/scale-conversion'

const Base = ({
  className, children,

  margin, marginTop, marginLeft, marginRight, marginBottom,
  marginVertical, marginHorizontal,

  padding, paddingTop, paddingLeft, paddingRight, paddingBottom,
  paddingVertical, paddingHorizontal,
}) => {

  const classes = [className]

  classes.push(scaleConversion('margin', margin))
  classes.push(scaleConversion('marginTop', marginTop))
  classes.push(scaleConversion('marginLeft', marginLeft))
  classes.push(scaleConversion('marginRight', marginRight))
  classes.push(scaleConversion('marginBottom', marginBottom))
  classes.push(scaleConversion('marginVertical', marginVertical))
  classes.push(scaleConversion('marginHorizontal', marginHorizontal))

  classes.push(scaleConversion('padding', padding))
  classes.push(scaleConversion('paddingTop', paddingTop))
  classes.push(scaleConversion('paddingLeft', paddingLeft))
  classes.push(scaleConversion('paddingRight', paddingRight))
  classes.push(scaleConversion('paddingBottom', paddingBottom))
  classes.push(scaleConversion('paddingVertical', paddingVertical))
  classes.push(scaleConversion('paddingHorizontal', paddingHorizontal))

  return (
		<div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Base

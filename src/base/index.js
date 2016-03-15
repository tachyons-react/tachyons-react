import React, { PropTypes } from 'react'
import isPresent from 'is-present'

import getClassesFromPropAndVal from '../../util/get-classes-from-prop-and-val'

const Base = ({
  className, children,

  // 0 to 6 scale
  m, mt, ml, mr, mb, mv, mh,
  p, pt, pl, pr, pb, pv, ph,
  f
}) => {

  const classes = [className]

  if (isPresent(m)) classes.push(getClassesFromPropAndVal('m', m))
  if (isPresent(mt)) classes.push(getClassesFromPropAndVal('mt', mt))
  if (isPresent(ml)) classes.push(getClassesFromPropAndVal('ml', ml))
  if (isPresent(mr)) classes.push(getClassesFromPropAndVal('mr', mr))
  if (isPresent(mb)) classes.push(getClassesFromPropAndVal('mb', mb))
  if (isPresent(mv)) classes.push(getClassesFromPropAndVal('mv', mv))
  if (isPresent(mh)) classes.push(getClassesFromPropAndVal('mh', mh))

  if (isPresent(p)) classes.push(getClassesFromPropAndVal('p', p))
  if (isPresent(pt)) classes.push(getClassesFromPropAndVal('pt', pt))
  if (isPresent(pl)) classes.push(getClassesFromPropAndVal('pl', pl))
  if (isPresent(pr)) classes.push(getClassesFromPropAndVal('pr', pr))
  if (isPresent(pb)) classes.push(getClassesFromPropAndVal('pb', pb))
  if (isPresent(pv)) classes.push(getClassesFromPropAndVal('pv', pv))
  if (isPresent(ph)) classes.push(getClassesFromPropAndVal('ph', ph))

  if (isPresent(f)) classes.push(getClassesFromPropAndVal('f', f))

  return (
		<div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Base

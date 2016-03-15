import propertyToClass from './property-to-class'

export default (prop, val) => {
  if (typeof val === 'number') {
    if (val < 0 || val > 6) {
      throw new TypeError('tachyons-react only accepts ' + prop + 'values between 0 and 6')
    }

    return propertyToClass[prop] + val
  }


  if (typeof val === 'object') {
    const classes = []
    // TODO: Validate all keys are known
    Object.keys(val).forEach(key => {
      classes.push(propertyToClass[prop] + val + '-' + key)
    })
  }
}

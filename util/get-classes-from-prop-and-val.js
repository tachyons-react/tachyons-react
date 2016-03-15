export default (prop, val) => {
  if (typeof val === 'number') {
    if (!isValidVal(val, prop)) {
      throw new TypeError('tachyons-react only accepts ' + prop + ' values between 0 and 6, received ' + val)
    }

    return `${propertyToClass(prop)}${val}`
  }


  if (typeof val === 'object') {
    const classes = []
    Object.keys(val).forEach(key => {
      if (isValidVal(val[key], prop)) {
        if (key === 'all') {
          classes.push(`${propertyToClass(prop)}${val[key]}`)
        } else {
          classes.push(`${propertyToClass(prop)}${val[key]}-${key}`)
        }
      } else {
        throw new TypeError('tachyons-react only accepts ' + prop + 'values between 0 and 6 for ' + key + ', received ' + val[key])
      }
    })

    return classes.join(' ')
  }
}

const isValidVal = (val, prop) => {
  // TODO: Calculate based off the property since some properties
  // have different scales and values
  return val >= 0 && val < 7
}

const propertyToClass = (prop) => {
  if (prop === 'p' || prop === 'm') {
    return `${prop}a`
  } else {
    return prop
  }
}

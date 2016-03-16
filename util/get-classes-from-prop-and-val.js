const propsWith0to6Scale = [
  'm', 'mt', 'ml', 'mr', 'mb', 'mv', 'mh',
  'p', 'pt', 'pl', 'pr', 'pb', 'pv', 'ph',
  'f'
]

const propsWith10StepPct = ['o']

export default (prop, val) => {
  if (typeof val === 'number') {
    if (!isValidVal(val, prop)) {
      throwError(prop, val)
      throw new TypeError('tachyons-react only accepts ' + prop + ' values between 0 and 6, received ' + val)
    }

    return `${propertyToClass(prop)}${val}`
  }


  if (typeof val === 'object') {
    const classes = []
    Object.keys(val).forEach(key => {
      if (isValidVal(val[key], prop)) {
        let klass = `${propertyToClass(prop)}${val[key]}`

        if (key !== 'all') {
          klass = `${klass}-${key}`
        }

        classes.push(klass)
      } else {
        throwError(prop, val[key], key)
      }
    })

    return classes.join(' ')
  }
}

const isValidVal = (val, prop) => {
  // TODO: Calculate based off the property since some properties
  // have different scales and values
  if (propsWith0to6Scale.indexOf(prop) != -1) {
    return val >= 0 && val < 7
  } else if(propsWith10StepPct.indexOf(prop) != -1) {
    return val >= 10 && val <= 100 && val % 10 == 0
  }
}

const propertyToClass = (prop) => {
  if (prop === 'p' || prop === 'm') {
    return `${prop}a`
  } else if (prop === 'o') {
    return `${prop}-`
  } else {
    return prop
  }
}

const throwError = (prop, val, key) => {
  throw new TypeError(
    'tachyons-react only accepts ' + prop +
    'values between 0 and 6 for ' + key || prop +
    ', received ' + val
  )
}

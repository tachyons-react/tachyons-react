# tachyons-react [![Build Status](https://secure.travis-ci.org/tachyons-react/tachyons-react.png?branch=master)](https://travis-ci.org/tachyons-react/tachyons-react) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A 100% mobile-first, responsive, functional React component library using [Tachyons](http://tachyons.io).

## Installation

```bash
npm install --save tachyons-react
```

## Usage

Apply styling to a component using an ergonomic and developer tested API using component properties.
You can target particular breakpoints, or apply them to all.
Rather than applying inline styles, these components use Tachyons CSS classes.
They are intended to be immutable and do one thing well.
Resulting components become a composition of classes based on the properties and values specified.
This reduces page bloat and avoids style duplication.

#### Import the CSS

```html
<link href="docs/tachyons.min.css" rel="stylesheet" />
```

#### Using the base component

You can import the base component to apply structure and typography styling with property declarations:

```javascript
import T from 'tachyons-react/base'

class MyComponent extends React.Component {
  render() {
    <T f={3} m={{all: 2, ns: 4, l: 5}} pv={3}>
      <SomeOtherComponent {...props} />
    </T>
  }
}
```

The declarations are then converted to the relevant Tachyons classes.
Tachyons components are purely functional and hold no state.

#### Components

```javascript
<Measure m={4} pv={{ns: 2}} f={{all: 4, ns: 3, m: 2, l: 1}}>
  <SomeOtherComponent {...props} />
</Measure>
```

#### Breakpoints

- `all`: All breakpoints (unless otherwise specified with another breakpoint)
- `ns`: Not small
- `m`: Medium
- `l`: Large

#### Properties

##### Padding

- `p`: Padding for top, left, right, bottom, and middle.
- `pt`: Padding top.
- `pl`: Padding left.
- `pr`: Padding right.
- `pb`: Padding bottom.
- `pv`: Padding vertical (top and bottom).
- `ph`: Padding horizontal (left and right).

Values: `[0,1,2,3,4,5,6]`

##### Margin

- `m`: Margin for top, left, right, bottom, and middle.
- `mt`: Margin top.
- `ml`: Margin left.
- `mr`: Margin right.
- `mb`: Margin bottom.
- `mv`: Margin vertical (top and bottom).
- `mh`: Margin horizontal (left and right).

Values: `[0,1,2,3,4,5,6]`

##### Font Size

- `f`: Font size, 1 is the largest on the scale, 6 the smallest.

Values: `[1,2,3,4,5,6]`

## Related

- <https://github.com/tachyons-css/tachyons>: CSS used for styling.
- <https://github.com/sindresorhus/ava>: Library used for testing.
- <https://github.com/jxnblk/rebass>: Alternative library that provided a lot of inspiration for `tachyons-react`.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).

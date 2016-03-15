# tachyons-react [![Build Status](https://secure.travis-ci.org/tachyons-react/tachyons-react.png?branch=master)](https://travis-ci.org/tachyons-react/tachyons-react) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

__Work in progress__

A 100% mobile-first, responsive, functional React component library using [Tachyons](http://tachyons.io).

## Installation

```bash
npm install --save tachyons-react
```

## Usage

```javascript
<Measure margin={4} paddingVertical={{ns: 2}} font={{s: 4, ns: 3, m: 2, l: 1}}>
  <SomeOtherComponent {...props} />
</Measure>
```

Apply styling to a component using an ergonomic and developer tested API using component properties.
You can target particular breakpoints, or apply them to all.
Rather than applying inline styles, these components use Tachyons CSS classes.
They are intended to be immutable and do one thing well.
Resulting components become a composition of classes based on the properties and values specified.
This reduces page bloat and avoids style duplication.

### Breakpoints

- `default`: All breakpoints (unless otherwise specified)
- `ns`: Not small
- `m`: Medium
- `l`: Large

### Properties

#### Padding

- `padding`
- `paddingTop`
- `paddingLeft`
- `paddingRight`
- `paddingBottom`
- `paddingVertical`
- `paddingHorizontal`

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

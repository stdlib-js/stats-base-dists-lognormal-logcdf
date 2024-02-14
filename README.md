<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the cumulative distribution function (CDF) for a [lognormal][lognormal-distribution] distribution.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal-logcdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal-logcdf@esm/index.mjs';
```

#### logcdf( x, mu, sigma )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [lognormal][lognormal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var y = logcdf( 2.0, 0.0, 1.0 );
// returns ~-0.2799

y = logcdf( 13.0, 4.0, 2.0 );
// returns ~-1.442
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the natural logarithm of the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = logcdf( 2.0, 8.0, 0.0 );
// returns -Infinity

y = logcdf( 8.0, 8.0, 0.0 );
// returns 0.0

y = logcdf( 10.0, 8.0, 0.0 );
// returns 0.0
```

#### logcdf.factory( mu, sigma )

Returns a `function` for evaluating the [cumulative distribution function][cdf] (CDF) of a [lognormal][lognormal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var mylogcdf = logcdf.factory( 10.0, 2.0 );

var y = mylogcdf( 10.0 );
// returns ~-9.732

y = mylogcdf( 5.0 );
// returns ~-11.203
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal-logcdf@esm/index.mjs';

var sigma;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = (randu() * 10.0) - 5.0;
    sigma = randu() * 20.0;
    y = logcdf( x, mu, sigma );
    console.log( 'x: %d, µ: %d, σ: %d, ln(F(x;µ,σ)): %d', x, mu, sigma, y );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-lognormal-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-lognormal-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-lognormal-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-lognormal-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-lognormal-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-lognormal-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-lognormal-logcdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[lognormal-distribution]: https://en.wikipedia.org/wiki/Log-normal_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->

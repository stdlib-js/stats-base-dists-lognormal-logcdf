/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var nlogcdf = require( '@stdlib/stats-base-dists-normal-logcdf' );
var ln = require( '@stdlib/math-base-special-ln' );
var NINF = require( '@stdlib/constants-float64-ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
*
* @param {number} x - input value
* @param {number} mu - mean
* @param {NonNegativeNumber} sigma - standard deviation
* @returns {number} logarithm of cumulative distribution function
*
* @example
* var y = logcdf( 2.0, 0.0, 1.0 );
* // returns ~-0.2799
*
* @example
* var y = logcdf( 13.0, 4.0, 2.0 );
* // returns ~-1.442
*
* @example
* var y = logcdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Negative standard deviation:
* var y = logcdf( 2.0, 0.0, -1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, 8.0, 0.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( 8.0, 8.0, 0.0 );
* // returns -Infinity
*/
function logcdf( x, mu, sigma ) {
	var lx = ( x <= 0.0 ) ? NINF : ln( x );
	return nlogcdf( lx, mu, sigma );
}


// EXPORTS //

module.exports = logcdf;

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

var constantFunction = require( '@stdlib/utils-constant-function' );
var degenerate = require( '@stdlib/stats-base-dists-degenerate-logcdf' ).factory;
var nlogcdf = require( '@stdlib/stats-base-dists-normal-logcdf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var ln = require( '@stdlib/math-base-special-ln' );
var NINF = require( '@stdlib/constants-float64-ninf' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution.
*
* @param {number} mu - mean
* @param {NonNegativeNumber} sigma - standard deviation
* @returns {Function} logcdf
*
* @example
* var logcdf = factory( 10.0, 2.0 );
* var y = logcdf( 10.0 );
* // returns ~-9.732
*
* y = logcdf( 5.0 );
* // returns ~-11.203
*/
function factory( mu, sigma ) {
	if (
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return constantFunction( NaN );
	}
	if ( sigma === 0.0 ) {
		return degenerate( mu );
	}

	return logcdf;

	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logcdf
	*
	* @example
	* var y = logcdf( -3.14 );
	* // returns <number>
	*/
	function logcdf( x ) {
		var lx = ( x <= 0.0 ) ? NINF : ln( x );
		return nlogcdf( lx, mu, sigma );
	}
}


// EXPORTS //

module.exports = factory;

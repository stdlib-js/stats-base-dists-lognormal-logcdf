"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(h,a){
var l=require('@stdlib/stats-base-dists-normal-logcdf/dist'),s=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-ninf/dist');function N(e,r,n){var t=e<=0?d:s(e);return l(t,r,n)}a.exports=N
});var v=u(function(j,o){
var y=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/stats-base-dists-degenerate-logcdf/dist').factory,x=require('@stdlib/stats-base-dists-normal-logcdf/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-ln/dist'),g=require('@stdlib/constants-float64-ninf/dist');function I(e,r){if(c(e)||c(r)||r<0)return y(NaN);if(r===0)return p(e);return n;function n(t){var q=t<=0?g:F(t);return x(q,e,r)}}o.exports=I
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=i(),R=v();O(f,"factory",R);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

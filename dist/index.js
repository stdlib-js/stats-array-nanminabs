"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(y,i){
var u=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/array-dtypes/dist'),v=require('@stdlib/array-dtype/dist'),d=require('@stdlib/array-base-assert-contains/dist'),l=require('@stdlib/array-base-join/dist'),m=require('@stdlib/stats-strided-nanminabs/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),t=o("real_and_generic"),c="generic";function g(e){var r;if(!u(e))throw new TypeError(a('2Jb2O',e));if(r=v(e)||c,!d(t,r))throw new TypeError(a('2JbHZ',l(t,'", "'),r));return m(e.length,e,1,0)}i.exports=g
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

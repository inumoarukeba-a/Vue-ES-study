"use strict";for(var arrFunc=[],_loop=function(r){arrFunc.push(function(o){console.log("処理".concat(r,"を開始"),(new Date).toLocaleTimeString());var n=2e3*Math.random();setTimeout(function(){console.log("処理".concat(r,"終了"),(new Date).toLocaleTimeString()),o()},n)})},i=0;i<5;i++)_loop(i);console.log(arrFunc);var arrPromise=arrFunc.map(function(o){return new Promise(o)});console.log(arrPromise),Promise.all(arrPromise).then(function(){console.log("Finish")});
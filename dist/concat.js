(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rendom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//方法一
function getArr() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        var num = rendom(1, 10);
        if (arr.indexOf(num) == -1) {
            arr.push(num);
        } else {
            i--;
        }
    }
    return arr;
}
console.log(getArr());
},{}],2:[function(require,module,exports){
var brr = [];
while (brr.length < 10) {
    var num = fn(10, 100);
    if (brr.indexOf(num) == -1) {
        brr.push(num);

    }
}

function fn(mix, max) {
    return Math.floor(Math.random() * (max - mix + 1) + mix);
}
console.log(brr);
},{}]},{},[1,2]);

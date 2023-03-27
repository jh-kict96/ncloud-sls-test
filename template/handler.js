'use strict';

function hello(params) {
    let name = params.name || "World";
    let place = params.place || "Naver";
    return {payload:  "Hello, " + name + " in " + place + "!"};
}

exports.hello = hello;
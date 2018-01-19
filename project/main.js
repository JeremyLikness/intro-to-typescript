"use strict";
var myFunc = function () {
    var textIn = document.getElementById('textIn');
    var textOut = document.getElementById('textOut');
    textIn.onkeyup = function () {
        var text = textIn.value;
        textOut.innerText = text;
    };
};
setTimeout(myFunc, 0);

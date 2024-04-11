function fun1() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 6){
            clearInterval(interval);
        }
        document.getElementById("view").innerHTML = count + "+";
    },100);
}

function fun2() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 25){
            clearInterval(interval);
        }
        document.getElementById("view1").innerHTML = count + "+";
    },100);
}

function fun3() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 50){
            clearInterval(interval);
        }
        document.getElementById("view2").innerHTML = count + "+";
    },100);
}

var addFunctionOnWindowLoad = function (callback) {
    if (window.addEventListener) {
        window.addEventListener('load', callback, false);
    } else {
        window.attachEvent('onload', callback);
    }
}

addFunctionOnWindowLoad(fun1);

addFunctionOnWindowLoad(fun2);

addFunctionOnWindowLoad(fun3);

console.log(5)
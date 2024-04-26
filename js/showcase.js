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

// image scroll change handler

var onScrollHandler = function() {
    let myElem=document.getElementById('logo')
  document.getElementById('nav-menu').style.height="95px"
    var newImageUrl = myElem.src;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop <200) {
       newImageUrl = "../Images/logo.png"
       myElem.style.height="140px"
       myElem.style.transition=".5s ease-out"
    }
    if (scrollTop > 200) {
       newImageUrl = "../Images/logo.png"
       myElem.style.height="104px"
       myElem.style.transition=".5s ease-out"

    }
    myElem.src = newImageUrl;
  };
  document.addEventListener ("scroll", onScrollHandler);


//   actvie nav

  document.addEventListener("DOMContentLoaded", function () {
    var currentPath = window.location.pathname.split("/");
    currentPath = currentPath[2];
  
    var anchors = document.querySelectorAll(".nav-item .nav-link");
  
    document.querySelectorAll(".nav-item .nav-link").forEach(function (activeAnchor) {
      activeAnchor.classList.remove("active");
    });
  
    anchors.forEach(function (anchor)
   {
      var anchorPath = new URL(anchor.href).pathname.split("/");
      anchorPath = anchorPath[2];
  
      if (anchorPath === currentPath) {
        anchor.classList.add("active");
      }
    });
  });


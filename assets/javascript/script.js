// console.log("hello");
containerEl = document.getElementById("container");




// console.log(middleOfWindow);
// containerEl.style.transformOriginY = middleOfWindow;


window.onscroll = function() {
    var middleOfWindow = window.innerHeight/2 + window.scrollY;
    containerEl.style.transformOriginY = middleOfWindow + "px";
    console.log(middleOfWindow);
}
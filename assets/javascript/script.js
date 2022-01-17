// console.log("hello");
containerEl = document.getElementById("container");
project1 = document.getElementById("p1");
project2 = document.getElementById("p2");
project3 = document.getElementById("p3");
project4 = document.getElementById("p4");
project5 = document.getElementById("p5");
project6 = document.getElementById("p6");
project7 = document.getElementById("p7");





// console.log(middleOfWindow);
// containerEl.style.transformOriginY = middleOfWindow;


window.onscroll = function() {
    var middleOfWindow = window.innerHeight/4 + window.scrollY;
    containerEl.style.transformOriginY = middleOfWindow + "px";
    // console.log(middleOfWindow);
}

function moveToTop() {

    var interval = setInterval(function() {
        window.scrollTo(0, window.scrollY - scrollY*.03);
        console.log("1");
        if (window.scrollY == 0) {
            clearInterval(interval);
            selectProject();
        }
    },1);
  
}

function selectProject() {
    containerEl.style.transform = "translate(0%, 0vh) perspective(0px) rotateY(0deg)";
    containerEl.style.top = "0";
    containerEl.style.width = "100%";
    containerEl.style.transitionDuration = ".5s";

    containerEl.removeChild(project2);
    containerEl.removeChild(project3);
    containerEl.removeChild(project4);
    containerEl.removeChild(project5);
    containerEl.removeChild(project6);
    containerEl.removeChild(project7);
}
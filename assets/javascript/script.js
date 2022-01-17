// console.log("hello");
containerEl = document.getElementById("container");
infoEl = document.getElementById("info");







containerEl.addEventListener('click', function(e) {
    if (e.target.classList.contains("clickable")) {
        console.log(e.target.id);
        scrollToTop(e.target.id);
    }
    
});



window.onscroll = adjustPerspective;
adjustPerspective();

function adjustPerspective() {
    var middleOfWindow = window.innerHeight/4 + window.scrollY;
    containerEl.style.transformOriginY = middleOfWindow + "px";
    // console.log(middleOfWindow);
}

function scrollToTop(id) {
    fadeNotClicked(id);
    var interval = setInterval(function() {
        window.scrollTo(0, window.scrollY - scrollY*.03);
        console.log("1");
        if (window.scrollY == 0) {
            clearInterval(interval);
            moveProjectToHeader(id);
            

        }
    },1);
  
}
function fadeNotClicked(id) {
   
    for (i of containerEl.children) {
        if (i.id == id) {
            i.removeAttribute("class");
            containerEl.prepend(i);
        }
    
    }
    for (i of containerEl.children) {

        // console.log(i);
        if (i.id != id) {
            
            i.style.color = "#00000000";
            
        }
       
        

    }
}

function moveProjectToHeader(id) {
    containerEl.style.transform = "translate(0%, 0vh) perspective(0px) rotateY(0deg)";
    containerEl.style.top = "0";
    containerEl.style.width = "100%";
    containerEl.style.transitionDuration = ".5s";
    infoEl.style.display = "block"; 
    
    setTimeout(function() {

        while (containerEl.children.length > 1) {

            containerEl.removeChild(containerEl.lastChild);
        }
        // infoEl.style.display = "block";  
        infoEl.style.backgroundColor = "#ffffff22";
    },500);
    


}
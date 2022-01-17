// console.log("hello");
containerEl = document.getElementById("container");
infoEl = document.getElementById("info");
backButtonEl = document.getElementById("back-button");







containerEl.addEventListener('click', function(e) {
    if (e.target.classList.contains("clickable")) {
        console.log(e.target.id);
        scrollToTop(e.target.id);
    }
    
});

backButtonEl.addEventListener('click', function(e) {
    console.log(e.target);

    containerEl.style.transform = null;
    containerEl.style.top = null;
    containerEl.style.right = null;
    containerEl.style.position = null;
    containerEl.style.height = null;
    backButtonEl.style.display = null;
    
    
        
    infoEl.style.color = null;
    infoEl.style.boxShadow = null; 
    infoEl.style.borderColor = null;
    infoEl.style.transitionDuration = null;
    setTimeout(function() {
        containerEl.style.width = null;
        
        infoEl.style.backgroundColor = null;
        
       
    
    },500);
    setTimeout(function() {
        containerEl.innerHTML = "";
       
        populateProjects();
        containerEl.style.transitionDuration = "0s";
        infoEl.style.display = null;
        
       
    
    },1500);

});





window.onscroll = adjustPerspective;
adjustPerspective();
populateProjects();


function populateProjects() {
    
    for(var i = 1; i < 8; i++) {
        var project = document.createElement('div');
        project.classList.add('clickable');
        project.id = 'p' + i;
        project.textContent = "PROJECT " + i;
        containerEl.appendChild(project);
    }
    


}

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
    infoEl.style.transitionDuration = "2s";
    
    setTimeout(function() {

        while (containerEl.children.length > 1) {

            containerEl.removeChild(containerEl.lastChild);
        }
        // infoEl.style.display = "block";  
        infoEl.style.backgroundColor = "#ffffff22";
        
        infoEl.style.borderColor = "#00000033";
        setTimeout(function() {
            infoEl.style.boxShadow = "5px 5px 5px #00000033";
            infoEl.style.color = "#ffffff99";
            backButtonEl.style.display = "block";
        },800);
    },500);
    


}



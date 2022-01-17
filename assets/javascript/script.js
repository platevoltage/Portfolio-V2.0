// console.log("hello");
containerEl = document.getElementById("container");
infoEl = document.getElementById("info");
backButtonEl = document.getElementById("back-button");
paragraph1El = document.getElementById("paragraph-1");
paragraph2El = document.getElementById("paragraph-2");


//initial setup
adjustPerspective();
populateProjects();


//sets perspective point to middle of viewable window
window.onscroll = adjustPerspective;

backButtonEl.addEventListener('click', returnToHomePage);

containerEl.addEventListener('click', function(e) {
    if (e.target.classList.contains("clickable")) {
        console.log(e.target.id);
        scrollToTop(e.target.id);
    }
    
});











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
    
    var interval = setInterval(function() {
        window.scrollTo(0, window.scrollY - scrollY*.03);
        console.log("1");
        if (window.scrollY == 0) {
            clearInterval(interval);
            moveProjectToHeader(id);
            fadeNotClicked(id);

        }
    },1);
  
}
function fadeNotClicked(id) {
   
    for (i of containerEl.children) {
        if (i.id == id) {
            i.removeAttribute("class");
            // containerEl.prepend(i);
        }
    
    }
    for (i of containerEl.children) {

        // console.log(i);
        if (i.id != id) {
            
            // i.style.color = "#00000000";
            i.classList.add('hidden');
            
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

        // while (containerEl.children.length > 1) {

        //     containerEl.removeChild(containerEl.lastChild);
        // }
        // infoEl.style.display = "block";  
        infoEl.style.backgroundColor = "#ffffff22";
        
        infoEl.style.borderColor = "#00000033";
        setTimeout(function() {
            infoEl.style.boxShadow = "5px 5px 5px #00000033";
            paragraph1El.style.color = "#ffffff99";
            backButtonEl.style.display = "block";
        },800);
        setTimeout(function() {
            paragraph2El.style.color = "#ffffff99";
            console.log(infoEl.children[1]);
        },1000);

    },500);
    


}

function returnToHomePage () {
    containerEl.style.transform = null;
    containerEl.style.top = null;
    containerEl.style.right = null;
    containerEl.style.position = null;
    containerEl.style.height = null;
    backButtonEl.style.display = null;  
    paragraph1El.style.color = null;
    paragraph2El.style.color = null;
    infoEl.style.boxShadow = null; 
    infoEl.style.borderColor = null;
    infoEl.style.transitionDuration = null;
    for (i of containerEl.children) {
        i.removeAttribute("class");
        i.classList.add("clickable");
    }
    setTimeout(function() {
        infoEl.style.backgroundColor = null;
        
    },200)
    setTimeout(function() {
        containerEl.style.width = null;    
         
    },500);
    setTimeout(function() {
        containerEl.style.transitionDuration = "0s";
        infoEl.style.display = null;   
    },1500);
}



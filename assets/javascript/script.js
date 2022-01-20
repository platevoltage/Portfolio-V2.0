
const content = [
    {
        title: "WEATHER WIDGET",

        bgColor: "#008f40",

        effectIcon: "<i class='bi bi-cloud-sun'></i>",

        icon: "<i class='bi bi-cloud-sun'></i>",

        paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante semper, tempor velit eget, lacinia sem. Cras viverra tellus dolor, nec porta lectus rhoncus suscipit. Phasellus volutpat sodales quam vitae sollicitudin. In id interdum arcu. Fusce eu arcu orci. Duis sagittis orci in nulla dictum, id tincidunt eros eleifend. Donec bibendum mattis enim. Mauris pharetra pulvinar dapibus. Nam in ante a mauris congue tristique non vel odio.",

        paragraph2: "Aenean nec ante quis urna sollicitudin volutpat. Integer id ligula risus. Sed suscipit consequat nibh. Nunc tortor sapien, pharetra et lobortis at, viverra non mauris. Donec eu tristique nunc. Sed vel ligula a justo condimentum varius. Suspendisse ac cursus diam. Pellentesque laoreet mauris eu sapien tincidunt, quis suscipit urna dictum. Morbi efficitur justo id mauris vestibulum, eu rhoncus tortor aliquam. Maecenas eros augue, placerat eget mauris nec, mattis commodo sem. Phasellus nec lorem vel felis placerat feugiat quis id lectus. Sed consequat orci urna, ut malesuada mauris maximus vitae. Nulla sit amet suscipit justo. Curabitur commodo arcu non mollis tincidunt. Nam arcu eros, volutpat non odio sit amet, sagittis elementum massa. Vestibulum finibus arcu vitae metus pellentesque luctus."
    },{
        title: "BENDER'S QUIZ",
        bgColor: "#550022",
        icon: "<i class='bi bi-apple'></i>",
        effectIcon: "<i class='bi bi-apple'></i>",
    },{
        title: "PORTFOLIOv1",
        bgColor: "#2222aa",
        icon: "<i class='bi bi-cloud-sun'></i>",
        effectIcon: "<i class='bi bi-cloud-sun'></i>",
    },{
        title: "TETRIS",
        bgColor: "#aaaa44",
        icon: "<i class='bi bi-cloud-sun'></i>",
        effectIcon: "<i class='bi bi-cloud-sun'></i>",
    },{
        title: "SOUND LANE",
        bgColor: "#555555",
        icon: "<i class='bi bi-cloud-sun'></i>",
        effectIcon: "<i class='bi bi-cloud-sun'></i>",
    },{
        title: "SECURIFIER",
        bgColor: "#020277",
        icon: "<i class='bi bi-cloud-sun'></i>",
        effectIcon: "<i class='bi bi-cloud-sun'></i>",
    }

];


const bodyEl = document.querySelector('body');
const containerEl = document.getElementById("container");
const frontPageEl = document.getElementById("front-page");
const infoEl = document.getElementById("info");
const backButtonEl = document.getElementById("back-button");
const paragraph1El = document.getElementById("paragraph-1");
const paragraph2El = document.getElementById("paragraph-2");
const projectIconEl = document.getElementById("project-icon");
const effectEl = document.getElementsByClassName("effect-layer");


//initial setup
adjustPerspective();
populateProjects();


//sets perspective point to middle of viewable window
window.onscroll = adjustPerspective;
window.onresize = adjustPerspective;

backButtonEl.addEventListener('click', returnToHomePage);
// window.onpopstate = returnToHomePage;

containerEl.addEventListener('click', function(e) {
    if (e.target.classList.contains("clickable")) {
        // console.log(e.target.id);
        frontPageEl.classList.add("off-screen")
        scrollToTop(e.target.id);
        projectIconEl.innerHTML = content[e.target.id].icon;
        paragraph1El.textContent = content[e.target.id].paragraph1;
        paragraph2El.textContent = content[e.target.id].paragraph2;

        
        setTimeout(function() {
            window.location.href = '#';
        },1000);
        
    }
    
    
});

setInterval(animateEffectLayer, 20000);











function populateProjects() {
    var array = [];
    for(i in content) {
        var project = document.createElement('div');
        project.classList.add('clickable');
        project.classList.add('off-screen');
        project.id = i;

        project.innerHTML = content[i].title;
        array.push(project);
        containerEl.appendChild(project);
    }

    for (i in content) {
        reveal(i);
    }

}

function reveal(i) {
    setTimeout(function() {
        containerEl.children[i].classList.remove("off-screen");
    },100*i); 
}

function adjustPerspective() {
    var middleOfWindowY = window.innerHeight/5 + window.scrollY*1.5;
    
    containerEl.style.transformOriginY = middleOfWindowY + "px";
    // console.log(containerEl.offsetWidth);
    if (containerEl.classList.contains("home")) {
        containerEl.style.left = containerEl.offsetWidth*.91 + "px";
    } 
    
    frontPageEl.style.transformOriginY = middleOfWindowY + "px";
    // console.log(middleOfWindow);
}

function scrollToTop(id) {
    
    var interval = setInterval(function() {
        window.scrollTo(0, window.scrollY - scrollY*.03);
        
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
            i.classList.remove("clickable");
            i.classList.remove("hidden");
            i.classList.add('on-display');
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
    
    containerEl.classList.remove('home');
    containerEl.style.left = null;
    containerEl.style.transform = "translate(0%, 0vh) perspective(0px) rotateY(0deg)";
    containerEl.style.top = "0";
    containerEl.style.width = "100%";
    containerEl.style.transitionDuration = ".5s";
    infoEl.style.display = "flex"; 
    infoEl.style.transitionDuration = "2s";
    bodyEl.style.backgroundColor = content[id].bgColor;
    setTimeout(function() {

        // while (containerEl.children.length > 1) {

        //     containerEl.removeChild(containerEl.lastChild);
        // }
        // infoEl.style.display = "block";  
        infoEl.style.backgroundColor = "#ffffff22";
        console.log(content[id].bgColor);
        infoEl.style.borderColor = "#00000033";
        projectIconEl.style.color = "#ffffff99";

    },500);
    setTimeout(function() {
        infoEl.style.boxShadow = "5px 5px 5px #00000033";
        paragraph1El.style.color = "#ffffff99";
        backButtonEl.style.display = "block";
        createEffectLayer(id);
    },1300);
    setTimeout(function() {
        paragraph2El.style.color = "#ffffff99";
        animateEffectLayer();
    },1500);


}

function returnToHomePage () {
    
    
    containerEl.classList.add("home");
    containerEl.style.right = "-50%";
    containerEl.style.width = null;  
    projectIconEl.style.color = null;
    paragraph1El.style.color = null;
    paragraph2El.style.color = null;
    projectIconEl.style.transitionDuration = ".5s";
    paragraph1El.style.transitionDuration = ".5s";
    paragraph2El.style.transitionDuration = ".5s";
    

    setTimeout(function() {
        infoEl.style.backgroundColor = null;
        infoEl.style.boxShadow = null; 
        infoEl.style.borderColor = null;
        infoEl.style.transitionDuration = null;
        destroyEffectLayer();
        
    },200)
    setTimeout(function() {
        containerEl.style.transform = null;
        containerEl.style.top = null;
        containerEl.style.right = null;
        containerEl.style.position = null;
        containerEl.style.height = null;
        backButtonEl.style.display = null;  
        
        
        for (i of containerEl.children) {
            i.removeAttribute("class");
            
            i.classList.add("clickable");
            i.classList.add("off-screen");
            
        }
        for (i in content) {
                reveal(i);
            }
        frontPageEl.classList.remove("off-screen");
        frontPageEl.style.transitionDuration = "1s";
        bodyEl.style.backgroundColor = null;
        adjustPerspective();
         
    },500);
    setTimeout(function() {
        containerEl.style.transitionDuration = "0s";
        infoEl.style.display = null;   
        projectIconEl.style.transitionDuration = null;
        paragraph1El.style.transitionDuration = null;
        paragraph2El.style.transitionDuration = null;
        frontPageEl.style.transitionDuration = null;
        
        
       
    },1500);
}




function createEffectLayer(id) {
    for (let i = 0; i < effectEl.length; i++) {
        effectEl[i].innerHTML = content[id].effectIcon;
        // effectEl[i].style.left = "0wv";
        // effectEl[i].style.top = "0wh";
        // effectEl[i].style.color = "#666666";
        effectEl[i].style.transitionDuration = ".1s";
        
        effectEl[i].style.transform = `translate(${(Math.random()*100)}vw, ${(Math.random()*100)}vh)`;
        
    }
    


}

function destroyEffectLayer() {
    for (let i = 0; i < effectEl.length; i++) {
        effectEl[i].innerHTML = "";

        
    }
    


}





function animateEffectLayer() {
    
    
    for (let i = 0; i < effectEl.length; i++) {
        effectEl[i].style.transitionDuration = null;
        effectEl[i].style.transform = 
            `scale(${Math.random()}) 
            translate(${Math.random()*100}vw, ${Math.random()*70}vh) 
            rotateZ(${Math.random()*100}deg)`;
    }
}

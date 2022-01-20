
const content = [
    {
        title: "WEATHER WIDGET",

        bgColor: "#008f40",

        effectIcon: "<i class='bi bi-cloud-sun'></i>",

        icon: "<i class='bi bi-cloud-sun'></i>",

        paragraph1: "A simple, yet easy on the eye weather app. With the help of the Open Weather Map API it displays current weather conditions as well as the five day weather forcast. Moment.js is incorperated for time and date functions. Local Storage is used to store recent searches and to refresh your last search each time the app is launched. Lastly, this app utilizes Bootstrap Icons for weather condition graphics.",

        paragraph2: "Visit the web app: <a href = 'https://antieatingactivist.github.io/weather-widget/' target='_blank' rel='noopener noreferrer'>https://antieatingactivist.github.io/weather-widget/</a> "
    },{
        title: "BENDER'S QUIZ",
        bgColor: "#550022",
        icon: "<img src='./assets/images/bender.svg' style='width: 100%; '>",
        effectIcon: "<img src='./assets/images/benderEffect.svg' style='width: 100%; '>",
    },{
        title: "PORTFOLIOv1",
        bgColor: "#2222aa",
        icon: "<i class='bi bi-aspect-ratio'></i>",
        effectIcon: "<i class='bi bi-aspect-ratio'></i>",
    },{
        title: "TETRIS",
        bgColor: "#aaaa44",
        icon: "<i class='bi bi-cloud-sun'></i>",
        effectIcon: "<i class='bi bi-cloud-sun'></i>",
    },{
        title: "SOUND LANE",
        bgColor: "#555555",
        icon: "<i class='bi bi-music-player'></i>",
        effectIcon: "<i class='bi bi-music-player'></i>",
    },{
        title: "SECURIFIER",
        bgColor: "#020277",
        icon: "<i class='bi bi-key'></i>",
        effectIcon: "<i class='bi bi-key'></i>",
    }

];


const bodyEl = document.querySelector('body');
const footer = document.querySelector('footer');
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
        paragraph1El.innerHTML = content[e.target.id].paragraph1;
        paragraph2El.innerHTML = content[e.target.id].paragraph2;

        
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
    footer.style.fontSize = "30px";
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
        projectIconEl.firstChild.style.opacity = '1';
        

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
    
    footer.style.fontSize = null;
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
        projectIconEl.firstChild.style.opacity = '0';
        
        
    },1500);
    // setTimeout(function() {
        
    // },3000)
}




function createEffectLayer(id) {
    for (let i = 0; i < effectEl.length; i++) {
        effectEl[i].innerHTML = content[id].effectIcon;
        // effectEl[i].style.left = "0wv";
        // effectEl[i].style.top = "0wh";
        // effectEl[i].style.color = "#666666";
        effectEl[i].style.transitionDuration = ".1s";
        
        effectEl[i].style.transform = `translate(${(Math.random()*100)}vw, ${(Math.random()*100)}vh) rotateZ(${Math.random()*100}deg)`;
        
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

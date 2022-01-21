
const content = [
    {
        title: "WEATHER WIDGET",

        // bgColor: "#008f40",
        bgColor: "#4667fa",

        effectIcon: "<i class='bi bi-cloud-sun'></i>",

        icon: "<i class='bi bi-cloud-sun'></i>",

        paragraph1: "A simple, yet easy on the eye weather app. With the help of the Open Weather Map API it displays current weather conditions as well as the five day weather forcast. Moment.js is incorperated for time and date functions. Local Storage is used to store recent searches and to refresh your last search each time the app is launched. Lastly, this app utilizes Bootstrap Icons for weather condition graphics.",

        paragraph2: "Visit the web app: <a href = 'https://antieatingactivist.github.io/weather-widget/' target='_blank' rel='noopener noreferrer'>https://antieatingactivist.github.io/weather-widget/</a><br><br>Code on GitHub: <a href='https://github.com/antieatingactivist/weather-widget/' target='_blank' rel='noopener noreferrer'>https://github.com/antieatingactivist/weather-widget/</a><br><br><img src = './assets/images/weather-widget.png' style='height: 200px; background-color: #ffffff00; padding-left: 10%; padding-right: 10%'>"
    },{
        title: "BENDER'S QUIZ",
        bgColor: "#444444",
        icon: "<img src='./assets/images/bender.svg' style='width: 100%; '>",
        effectIcon: "<img src='./assets/images/benderEffect.svg' style='width: 100%; '>",
        paragraph1: "An expandable and customizable quiz app with a fun theme courtesey of everyone's favorite lazy robot, Bender. It features animations and a leaderboard that makes use of Local Storage to keep scores between games. Questions and answers are kept in an Object making it easy to change the content to your needs, but by default asks questions on Javascript basics",
        paragraph2: "Visit the web app: <a href = 'https://antieatingactivist.github.io/benders-javascript-quiz/' target='_blank' rel='noopener noreferrer'>https://antieatingactivist.github.io/benders-javascript-quiz/</a><br><br>Code on GitHub: <a href='https://github.com/antieatingactivist/benders-javascript-quiz/' target='_blank' rel='noopener noreferrer'>https://github.com/antieatingactivist/benders-javascript-quiz/</a><br><br><br><br><img src = './assets/images/bender-quiz.png' style='height: 300px; background-color: #ffffff00; padding-left: 10%; padding-right: 10%'>",

    },{
        title: "PORTFOLIOv1",
        bgColor: "#131385",
        icon: "<i class='bi bi-aspect-ratio'></i>",
        effectIcon: "<i class='bi bi-aspect-ratio'></i>",
        paragraph1: "Here it is. My first crack at a portfolio. All dynamic elements are implemented using only CSS and is fully mobile responsive ",
        paragraph2: "Visit the web app: <a href = 'https://antieatingactivist.github.io/portfolio/' target='_blank' rel='noopener noreferrer'>https://antieatingactivist.github.io/portfolio/</a><br><br>Code on GitHub: <a href='https://github.com/antieatingactivist/portfolio/' target='_blank' rel='noopener noreferrer'>https://github.com/antieatingactivist/portfolio/</a><br><br><br><br><img src = './assets/images/portfoliov1.png' style='height: 200px; background-color: #ffffff00; padding-left: 10%; padding-right: 10%'>"
    },{
        title: "TETRIS",
        bgColor: "#550022",
        icon: "<img src='./assets/images/tetris.svg' style='width: 100%;'>",
        effectIcon: "<img src='./assets/images/tetrisEffect.svg' style='width: 100%; '>",
        paragraph1: "This relatively simple Javascript based Tetris app was the product my love for games and my impatience. I build this between the time I signed up for my Bootcamp and the time that classes started. It uses a single canvas element and uses a grid of objects that are manipulated to create the game play.",
        paragraph2: "Visit the web app: <a href = 'https://antieatingactivist.github.io/tetris/' target='_blank' rel='noopener noreferrer'>https://antieatingactivist.github.io/tetris/</a><br><br>Code on GitHub: <a href='https://github.com/antieatingactivist/tetris/' target='_blank' rel='noopener noreferrer'>https://github.com/antieatingactivist/tetris/</a><br><br><br><br><img src = './assets/images/tetris.png' style='height: 300px; background-color: #ffffff00; padding-left: 10%; padding-right: 10%'>"
    },{
        title: "SOUND LANE",
        bgColor: "#000e25",
        icon: "<i class='bi bi-music-player'></i>",
        effectIcon: "<i class='bi bi-music-player'></i>",
        paragraph1: "This project was a collaberation between myself and two other people. Sound Lane uses API calls from AudioDB and Last.fm to populate a page with information and images for your favorite musical artists.",
        paragraph2: "Visit the web app: <a href = 'https://antieatingactivist.github.io/Sound-Lane/' target='_blank' rel='noopener noreferrer'>https://antieatingactivist.github.io/Sound-Lane/</a><br><br>Code on GitHub: <a href='https://github.com/antieatingactivist/Sound-Lane/' target='_blank' rel='noopener noreferrer'>https://github.com/antieatingactivist/Sound-Lane/</a><br><br><br><br><img src = './assets/images/sound-lane.png' style='height: 200px; background-color: #ffffff00; padding-left: 10%; padding-right: 10%'>"
    },{
        title: "SECURIFIER",
        bgColor: "#008f40",
        icon: "<i class='bi bi-key'></i>",
        effectIcon: "<i class='bi bi-key'></i>",
        paragraph1: "A very basic password generator that gives you a choice of length, and what type of characters to use. It makes heavy use of Math.random() to generate ASCII codes",
        paragraph2: "Visit the web app: <a href = 'https://antieatingactivist.github.io/securifier/' target='_blank' rel='noopener noreferrer'>https://antieatingactivist.github.io/securifier/</a><br><br>Code on GitHub: <a href='https://github.com/antieatingactivist/securifier/' target='_blank' rel='noopener noreferrer'>https://github.com/antieatingactivist/securifier/</a><br><br><br><br><img src = './assets/images/securifier.png' style='height: 200px; background-color: #ffffff00; padding-left: 10%; padding-right: 10%'>"
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
    scrollToTop();
}

function reveal(i) {
    setTimeout(function() {
        containerEl.children[i].classList.remove("off-screen");
    },100*i); 
}

function adjustPerspective() {
    var middleOfWindowY = window.innerHeight/5 + window.scrollY*1.5;
    console.log(middleOfWindowY);
    containerEl.style.transformOrigin = "50% " + middleOfWindowY + "px";
    frontPageEl.style.transformOrigin = "50% " + middleOfWindowY + "px";
    if (containerEl.classList.contains("home")) {
        containerEl.style.left = containerEl.offsetWidth*.91 + "px";
    }      
}

function scrollToTop(id) {
    
    var interval = setInterval(function() {
        window.scrollTo(0, window.scrollY - scrollY*.03);
        
        if (window.scrollY == 0) {
            clearInterval(interval);
            if (id) {
                moveProjectToHeader(id);
                fadeNotClicked(id);
            }
            

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
    containerEl.style.transform = "translate(0%, 0vh) perspective(300px) rotateY(0deg)";
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
        paragraph2El.getElementsByTagName('img')[0].style.opacity = '1';
        animateEffectLayer();
        
    },1500);


}

function returnToHomePage () {
    
    footer.style.fontSize = null;
    containerEl.classList.add("home");
    containerEl.style.right = "-50%";
    containerEl.style.width = null;  
    projectIconEl.style.color = null;
    paragraph2El.getElementsByTagName('img')[0].style.opacity = null;
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
        effectEl[i].style.transitionDuration = ".1s";  
        effectEl[i].style.transform = `translate(${(Math.random()*100)}vw, ${(Math.random()*100)}vh) rotateZ(${Math.random()*100}deg)`;       
    }
}

function destroyEffectLayer() {
    for (let i = 0; i < effectEl.length; i++) {
        // effectEl[i].innerHTML = "";
        effectEl[i].style.transitionDuration = ".5s";
        effectEl[i].style.transform = `translate(-100vw, -100vh) rotateX(${Math.random()*100}deg)`;
        
    }
    setTimeout(function() {
        for (let i = 0; i < effectEl.length; i++) {
            effectEl[i].innerHTML = "";

            
        }

    },1000);
    


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

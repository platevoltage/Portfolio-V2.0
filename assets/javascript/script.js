
const content = [
    {
        title: "PROJECT 1",

        paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante semper, tempor velit eget, lacinia sem. Cras viverra tellus dolor, nec porta lectus rhoncus suscipit. Phasellus volutpat sodales quam vitae sollicitudin. In id interdum arcu. Fusce eu arcu orci. Duis sagittis orci in nulla dictum, id tincidunt eros eleifend. Donec bibendum mattis enim. Mauris pharetra pulvinar dapibus. Nam in ante a mauris congue tristique non vel odio.",

        paragraph2: "Aenean nec ante quis urna sollicitudin volutpat. Integer id ligula risus. Sed suscipit consequat nibh. Nunc tortor sapien, pharetra et lobortis at, viverra non mauris. Donec eu tristique nunc. Sed vel ligula a justo condimentum varius. Suspendisse ac cursus diam. Pellentesque laoreet mauris eu sapien tincidunt, quis suscipit urna dictum. Morbi efficitur justo id mauris vestibulum, eu rhoncus tortor aliquam. Maecenas eros augue, placerat eget mauris nec, mattis commodo sem. Phasellus nec lorem vel felis placerat feugiat quis id lectus. Sed consequat orci urna, ut malesuada mauris maximus vitae. Nulla sit amet suscipit justo. Curabitur commodo arcu non mollis tincidunt. Nam arcu eros, volutpat non odio sit amet, sagittis elementum massa. Vestibulum finibus arcu vitae metus pellentesque luctus."
    },{
        title: "PROJECT 2",
    },{
        title: "PROJECT 3",
    },{
        title: "PROJECT 4",
    },{
        title: "PROJECT 5",
    },{
        title: "PROJECT 6",
    }

];



const containerEl = document.getElementById("container");
const infoEl = document.getElementById("info");
const backButtonEl = document.getElementById("back-button");
const paragraph1El = document.getElementById("paragraph-1");
const paragraph2El = document.getElementById("paragraph-2");


//initial setup
adjustPerspective();
populateProjects();


//sets perspective point to middle of viewable window
window.onscroll = adjustPerspective;

backButtonEl.addEventListener('click', returnToHomePage);

containerEl.addEventListener('click', function(e) {
    if (e.target.classList.contains("clickable")) {
        // console.log(e.target.id);
        scrollToTop(e.target.id);
        paragraph1El.textContent = content[e.target.id].paragraph1;
        paragraph2El.textContent = content[e.target.id].paragraph2;
    }
    
});











function populateProjects() {
    var array = [];
    for(i in content) {
        var project = document.createElement('div');
        project.classList.add('clickable');
        project.classList.add('off-screen');
        project.id = i;

        project.textContent = content[i].title;
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
    var middleOfWindow = window.innerHeight/4 + window.scrollY;
    containerEl.style.transformOriginY = middleOfWindow + "px";
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
            
        },1000);

    },500);
    


}

function returnToHomePage () {
   
    containerEl.style.width = null;  
    paragraph1El.style.color = null;
    paragraph2El.style.color = null;
    paragraph1El.style.transitionDuration = ".5s";
    paragraph2El.style.transitionDuration = ".5s";

    setTimeout(function() {
        infoEl.style.backgroundColor = null;
        infoEl.style.boxShadow = null; 
        infoEl.style.borderColor = null;
        infoEl.style.transitionDuration = null;
        
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
     
         
    },500);
    setTimeout(function() {
        containerEl.style.transitionDuration = "0s";
        infoEl.style.display = null;   
        paragraph1El.style.transitionDuration = null;
        paragraph2El.style.transitionDuration = null;
    },1500);
}



# Portfolio-V2.0

## https://antieatingactivist.github.io/Portfolio-V2.0/

This is the 2nd candidate for my professional portfolio. It makes use of perspective and uses javascript to alter the point of view according to window size and scroll point. It makes heavy use of animations and transitions.




- window.innerHeight and window.scroll are used to determine perspective

```
function adjustPerspective() {
    var middleOfWindowY = window.innerHeight/5 + window.scrollY*1.5;
    containerEl.style.transformOriginY = middleOfWindowY + "px";
    frontPageEl.style.transformOriginY = middleOfWindowY + "px";
    if (containerEl.classList.contains("home")) {
        containerEl.style.left = containerEl.offsetWidth*.91 + "px";
    }      
}
```

- Random numbers are used to create floating translucent graphics behind the project pages

```
function createEffectLayer(id) {
    for (let i = 0; i < effectEl.length; i++) {
        effectEl[i].innerHTML = content[id].effectIcon;
        effectEl[i].style.transitionDuration = ".1s";  
        effectEl[i].style.transform = `translate(${(Math.random()*100)}vw, ${(Math.random()*100)}vh) rotateZ(${Math.random()*100}deg)`;       
    }
}
```

![Screen Recording 2022-01-20 at 7 57 21 PM](https://user-images.githubusercontent.com/1414728/150463576-0e4d0fb1-4816-4938-a755-82147144d429.gif)


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap Icons](https://icons.getbootstrap.com)


## Deployed Link

* [https://antieatingactivist.github.io/Portfolio-V2.0/](https://antieatingactivist.github.io/Portfolio-V2.0/)


## Authors

Garrett Corbin

- [https://antieatingactivist.github.io/Portfolio-V2.0/](https://antieatingactivist.github.io/Portfolio-V2.0/)
- [https://github.com/antieatingactivist/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)


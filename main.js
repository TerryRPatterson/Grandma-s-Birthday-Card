/*global $*/
/*eslint no-console: 0
 no-unused-vars:0*/

let header = $(".header");
let frame = 1;
let maxFrame = 3;
let progressAnimation = function progressAnimation(){
    if (frame < maxFrame){
        let current = $("#" + frame);
        frame ++;
        let next = $("#" + frame);
        current.addClass("animatingOut");
        current.removeClass("animatingIn");
        console.log(current.css("animation-duration"));
        window.setTimeout(animateOut,3000,current,next);
        setTimeout(progressAnimation,6000);
    }
};
let animateOut = function animateOut(previous,next){
    console.log("Animating");
    previous.removeClass("animatingOut active");
    next.addClass("animatingIn active");
};

setTimeout(progressAnimation,3000);

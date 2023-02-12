console.log("test");

// function 1
// function 2
// function 3

// beim ancklicken des Buttons den Style ändern

/* 
classList
transition-property
transition-duration
text-shadow

*/
const textH1 = document.querySelector("#element");


const btn = document.querySelectorAll("button")
console.log(btn);

btn[0].addEventListener("click", () => {  // [0] = Small
    console.log(" evList + arrow function small");
    textH1.classList.toggle("js_small")
});

btn[1].addEventListener("click", () => {
    textH1.classList.toggle("js_medium")

    textH1.style.transitionProperty = "background-color, font-size";    // der .js_medium class in scss 
    // transition: all 2s; geben, damit der Effect kommt
    // transition-property = aufrufen was alles animiert sein soll,
    // wie hier "background-color, font-size" 
});

btn[2].addEventListener("click", () => {
    textH1.classList.toggle("js_large")
    textH1.style.transitionProperty = "background-color, border-radius font-size rotate";
});

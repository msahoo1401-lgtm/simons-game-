 
let colour = ["yellow", "red", "green", "purple"];

let user = [];
let game = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


// Level Up Function
let levelup = function () {
    level++;
    h2.innerText = `Level ${level}`;
};


// Flash Function
let flashout = function () {

    // Generate random number
    let randno = Math.floor(Math.random() * colour.length);

    // Select the div according to the random color
    let bgg = document.querySelector(`.${colour[randno]}`);

    // Add flash class
    bgg.classList.add("flash");

    // Remove flash class after 1 second
    setTimeout(function () {
        bgg.classList.remove("flash");
    }, 1000);
};


// Event Listener
document.addEventListener("keypress", function () {

    if (started == false) {

        console.log("game started");

        started = true;

        levelup();
        flashout();
    }

});
 

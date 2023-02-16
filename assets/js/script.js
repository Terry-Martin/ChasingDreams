/* document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }*/

// object.onload = startGame();

window.onload = function () {
    startGame();
};

function startGame() {

    // Create array and array property?
    // Assign a random number between 70 and 99 to each of the variable player stats
    const character = {
        name: "Terry",
        age: 41,
        creativity: startingStat(),
        relaxation: startingStat(),
        comfort: startingStat(),
        luck: startingStat(),
        strength: startingStat(),
        mood: function () {
            return (this.luck + this.comfort) / 2;
        }
    }

   

    // Display current character stat values
    document.getElementById("name").textContent = "Name: Terry";
    document.getElementById("age").textContent = "Age: 41";

    document.getElementsByClassName("player-stats")[0].textContent = "Creativity: " + character.creativity;
    document.getElementsByClassName("player-stats")[1].textContent = "Relaxation: " + character.relaxation;
    document.getElementsByClassName("player-stats")[2].textContent = "Comfort: " + character.comfort;
    document.getElementsByClassName("player-stats")[3].textContent = "Luck: " + character.luck;
    document.getElementsByClassName("player-stats")[4].textContent = "Strength: " + character.strength;

    // Set weather array and display random weather data
    const weather = ["Raining", "Sunny", "Snowy", "Hurricane"];
    let weatherType = Math.floor(Math.random() * weather.length);
    document.getElementById("weather").textContent = "Weather: " + weather[weatherType];

    // Set terrain array and display random terrain data
    // https://outforia.com/types-of-terrain/
    const terrain = ["Foothills", "Swamp", "Meadow", "Forest", "Canyon", "Valley", "Dunes", "Glacier"];
    let terrainType = Math.floor(Math.random() * terrain.length);
    document.getElementById("terrain").textContent = "Terrain: " + terrain[terrainType];

}

function startingStat() {

    // Generate a random number between 70 and 99
    return Math.floor(Math.random() * 20) + 70;
}


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/* document.addEventListener("DOMContentLoaded", function () {
    throw ("Alert Works using javascript to console");
}) 


console.log(character.name);
console.log(character.mood()); */

// let x = character.mood();
// document.getElementById("currentMood").textContent = x;

// document.getElementById("currentMood").textContent = character.mood();


// hide element/text
// document.getElementById("terrain").style.display = "none";


// alert example
// window.alert(5 + 6);
// alert(5 + 6);


// Returns a random integer from 0 to 99:
// Math.floor(Math.random() * 100);


// document.getElementById("terrain").style.fontSize = "35px";
// document.getElementById("terrain").style.color = "blue";

// document.getElementsByClassName("player-stats")[2].style.color = "yellow";


// Edit style using getElementsByClassName
    /* for (const s of document.getElementsByClassName("player-stats")) {
        s.style.color = "purple";
    } */
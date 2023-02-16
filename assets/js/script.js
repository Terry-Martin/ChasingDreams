const character = {
    name: "Terry",
    eyeColour: "blue",
    hairColour: "brown",
    relaxLevel: 100,
    tiredness: 132,
    mood: function () {
        return (this.relaxLevel + this.tiredness) / 2;
    }
};




// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    throw ("Alert Works using javascript to console");
})

console.log(character.name);
console.log(character.mood());

//let x = character.mood();
//document.getElementById("currentMood").textContent = x;


document.getElementById("currentMood").textContent = character.mood();


// Set weather array and display random weather data
const weather = ["Raining", "Sunny", "Snowy", "Hurricane"];
let weatherType = Math.floor(Math.random() * weather.length);
document.getElementById("weather").textContent = "Weather: " + weather[weatherType];

// Set terrain array and display random terrain data
//https://outforia.com/types-of-terrain/
const terrain = ["Foothills", "Swamp", "Meadow", "Forest", "Canyon", "Valley", "Dunes", "Glacier"];
let terrainType = Math.floor(Math.random() * terrain.length);
document.getElementById("terrain").textContent = "Terrain: " + terrain[terrainType];

document.getElementById("terrain").style.fontSize = "35px";
document.getElementById("terrain").style.color = "blue";

// hide element/text
//document.getElementById("terrain").style.display = "none";


// alert example
//window.alert(5 + 6);
//alert(5 + 6);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);



// Edit style using getElementsByClassName
for (const s of document.getElementsByClassName("player-stats")) {
    s.style.color = "green";
}

document.getElementsByClassName("player-stats")[2].style.color = "yellow";
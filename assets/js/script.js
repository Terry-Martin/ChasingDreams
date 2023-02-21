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
        
        // Get average of 5 stats and display as Sleep Depth, which is the overall player condition
        sleepDepth: function () {
            return Math.floor((this.creativity + this.relaxation + this.comfort + this.luck + this.strength) / 5);
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

    // Set the weather background
    const weatherImage = [
        "url('/assets/images/weather/rain1.jpg')",
        "url('/assets/images/weather/clear_sky.jpg')",
        "url('/assets/images/weather/snow1.jpg')",
        "url('/assets/images/weather/hurricane2.jpg')"
    ];

    document.getElementsByClassName("right-grid-npc1-info")[0].style.backgroundImage = weatherImage[weatherType]; 


    // Set terrain array and display random terrain data
    // https://outforia.com/types-of-terrain/
    const terrain = ["Foothills", "Swamp", "Meadow", "Forest", "Canyon", "Valley", "Dunes", "Glacier"];

    let terrainType = Math.floor(Math.random() * terrain.length);
    document.getElementById("terrain").textContent = "Terrain: " + terrain[terrainType];

    //Set the terrain background reusing terrainType variable to match terrain type to terrain image and display
     const terrainImage = [
        "url('/assets/images/terrain/foothills.jpg')",
        "url('/assets/images/terrain/swamp.jpg')",
        "url('/assets/images/terrain/meadow.jpg')",
        "url('/assets/images/terrain/forest.jpg')",
        "url('/assets/images/terrain/canyon.jpg')",
        "url('/assets/images/terrain/valley.jpg')",
        "url('/assets/images/terrain/dunes.jpg')",
        "url('/assets/images/terrain/glacier.jpg')"
    ];

    document.getElementsByClassName("right-grid-npc2-info")[0].style.backgroundImage = terrainImage[terrainType]; 
    

    // Set Dream Area number. This will increment by 1 each area the player completes
    let areaNumber = 3;
    document.getElementById("area").textContent = "Dream Area: " + areaNumber;

    // Calculate player sleep depth as a calculation of player stats and display
    document.getElementById("sleep-depth").textContent = "Sleep Depth: " + character.sleepDepth();

    // Change font colour depending on current score
    if (character.sleepDepth() < 26) {
        document.getElementById("sleep-depth").style.color = "red";
    } else if (character.sleepDepth() < 76) {
        document.getElementById("sleep-depth").style.color = "yellow";
    } else {
        document.getElementById("sleep-depth").style.color = "green";
    }

    // Calculate player progress from current dream area. 1 area complete = 15 minutes of sleep
    document.getElementById("total-sleep").textContent = "Total Sleep: " + ((areaNumber * 15) / 60) + " hours";
}


/**
 * Generate a random number between 70 and 99
 */
function startingStat() {
    return Math.floor(Math.random() * 20) + 70;
}


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

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/* document.addEventListener("DOMContentLoaded", function () {
    throw ("Alert Works using javascript to console");
}) 


console.log(character.name);
console.log(character.mood()); */


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


// let t = character.mood();
// document.getElementById("currentMood").textContent = t;
// document.getElementById("currentMood").textContent = character.mood();


/* document.getElementsByClassName("left-grid-content")[0].style.backgroundImage = terrainImage[0];
document.getElementsByClassName("left-grid-content")[0].style.backgroundImage = terrainImage[1];
document.getElementsByClassName("left-grid-content")[0].style.backgroundImage = terrainImage[2];
document.getElementsByClassName("left-grid-content")[0].style.backgroundImage = terrainImage[3];
document.getElementsByClassName("left-grid-content")[0].style.backgroundImage = terrainImage[4];
document.getElementsByClassName("left-grid-content")[0].style.backgroundImage = terrainImage[5];
document.getElementsByClassName("left-grid-content")[0].style.backgroundImage = terrainImage[6]; */

//document.getElementById("left-grid-content1").style.backgroundImage = "url('/assets/images/terrain/canyon.jpg')";
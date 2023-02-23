const startGame = document.getElementById("start-game");
startGame.addEventListener("click", newGame);

const submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);

function newGame() {
    // Prevent page reloading
    event.preventDefault();

    // Call game funtions
    startingStats();
    setWeather();
    setTerrain();
    displayQuestion();
}

// Create character array
// Assign a random number between 70 and 99 to each of the variable player stats
function startingStats() {

    const character = {
        name: "Terry",
        age: 41,
        creativity: generateStat(),
        relaxation: generateStat(),
        comfort: generateStat(),
        luck: generateStat(),
        strength: generateStat(),

        // Get average of 5 stats and display as Sleep Depth, which is the overall player condition
        sleepDepth: function () {
            return Math.floor((this.creativity + this.relaxation + this.comfort + this.luck + this.strength) / 5);
        }
    }

    /**
     * Generate a random number between 70 and 99
     */
    function generateStat() {
        return Math.floor(Math.random() * 20) + 70;
    }

    // Display player stat values
    document.getElementById("name").textContent = "Name: Terry";
    document.getElementById("age").textContent = "Age: 41";

    document.getElementsByClassName("player-stats")[0].textContent = "Creativity: " + character.creativity;
    document.getElementsByClassName("player-stats")[1].textContent = "Relaxation: " + character.relaxation;
    document.getElementsByClassName("player-stats")[2].textContent = "Comfort: " + character.comfort;
    document.getElementsByClassName("player-stats")[3].textContent = "Luck: " + character.luck;
    document.getElementsByClassName("player-stats")[4].textContent = "Strength: " + character.strength;

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
}

function setWeather() {
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
}

function setTerrain() {
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
}

// Update game level and diplay next question
function displayQuestion() {
    let gameCounter = document.getElementById("area-number").textContent;

    //Display Question
    if (gameCounter == 1) {
        document.getElementById("left-grid-content1").innerHTML = "<h3>Missing Song Lyric</h3><h5><em>White Rabbit</em></h5><p>One pill makes you larger<br>And one pill makes you small<br>And the ones that mother gives you<br>Don't do anything at all<br>Go ask <strong> _ _ _ _ _</strong><br>When she's ten feet tall<br></p><p><em>By Jefferson Airplane</em></p>";
    } else if (gameCounter == 2) {
        document.getElementById("left-grid-content1").innerHTML = "<h3>Missing Song Lyric</h3><h5><em>She's Leaving Home</em></h5><p>She (what did we do that was wrong)<br>Is Having (we didn't know it was wrong)<br>_ _ _ (_ _ _ is the one thing that money can't buy)<br>Something inside, that was always denied,<br>For so many years,<br>She's leaving home<p><em>by The Beatles</em></p></p>"
    } else {
        document.getElementById("left-grid-content1").innerHTML = "NEXT"
    }

    gameCounter++;
    document.getElementById("area-number").textContent = gameCounter;

    // ?? Is character.sleepDepth accessible??  
    document.getElementById("total-sleep").textContent = "Total Sleep: " + ((gameCounter * 15) / 60) + " hours";
}

// Check player answer verses correct answer and feedback 
function checkAnswer() {

    // Prevent page reloading
    event.preventDefault();

    let playerAnswer = document.getElementById("player-answer").value;
    playerAnswer = playerAnswer.toUpperCase();

    if (playerAnswer === "ALICE") {
        alert("Correct");
    } else {
        alert("Wrong");
    }
}





/* window.onload = function () {
    startGame();
}; */


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
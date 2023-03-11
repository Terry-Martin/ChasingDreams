const startGame = document.getElementById("start-game");
const submitAnswer = document.getElementById("submit-answer");
const continueGame = document.getElementById("continue-game");
const progress = document.getElementById("check-progress");



startGame.addEventListener("click", newGame);
continueGame.addEventListener("click", displayQuestion);
submitAnswer.addEventListener("click", checkAnswer);
progress.addEventListener("click", showProgress);

document.getElementById("true-false").style.visibility = "hidden";
document.getElementById('missing-lyric-game').style.display = "none";
document.getElementsByClassName("right-grid")[0].style.display = "none";
document.getElementsByClassName("left-grid-user-response")[0].style.display = "none";


let lyricGame = [{
        songTitle: "White Rabbit",
        line1: "And one pill makes you small",
        line2: "And the ones that mother gives you",
        line3: "Don't do anything at all",
        line4: "Go ask <strong> _ _ _ _ _</strong>",
        songBy: "By Jefferson Airplane",
        question: "Who should you ask? (5 letters)",
        answer: "ALICE"
    },

    {
        songTitle: "She's Leaving Home",
        line1: "She (what did we do that was wrong)",
        line2: "Is Having (we didn't know it was wrong)",
        line3: "<strong>_ _ _ </strong>(<strong>_ _ _</strong> is the one thing that money can't buy)",
        line4: "Something inside, that was always denied",
        songBy: "ByThe Beatles",
        question: "What cant money buy? (3 letters (although they claimed it was Love in another song, hmm))",
        answer: "FUN"
    },

    {
        songTitle: "In Dreams",
        line1: "A candy-colored clown they call the <strong>_ _ _ _</strong>man",
        line2: "Tiptoes to my room every night",
        line3: "Just to sprinkle stardust and to whisper",
        line4: "Go to sleep, everything is alright</em>",
        songBy: "By Roy Orbison",
        question: "Who sneaks into Roy's room every night? (4 letters)",
        answer: "SAND"
    },

    {
        songTitle: "All I Have To Do Is Dream",
        line1: "When I feel <strong> _ _ _ _ </strong> in the night",
        line2: "And I need you to hold me tight",
        line3: "Whenever I want you, all I have to do is",
        line4: "Dream",
        songBy: "By The Everly Brothers",
        question: "What colour do the lads use to describe their feelings? (4 letters)",
        answer: "BLUE"
    },

    {
        songTitle: "Boulevard of Broken Dreams",
        line1: "I walk this empty street",
        line2: "On the Boulevard of Broken Dreams",
        line3: "Where the city sleeps",
        line4: "And I'm the only one, and I walk <strong>_ _ _ _ _</strong>",
        songBy: "By Green Day",
        question: "Is anybody at all with Green Day? (5 letters)",
        answer: "ALONE"
    },

    {
        songTitle: "Dont Dream Its Over",
        line1: "… Hey now, hey now",
        line2: "Don't dream it's over",
        line3: "Hey now, hey now",
        line4: "When the <strong>_ _ _ _ _ </strong> comes in",
        songBy: "By Crowded House",
        question: "What comes in? (5 letters)",
        answer: "WORLD"
    },

    {
        songTitle: "Dreams",
        line1: "Oh, thunder only happens when it's raining",
        line2: "Players only love you when they're playing",
        line3: "Say, <strong>_ _ _ _ _</strong>...they will come and they will go",
        line4: "When the rain washes you clean, you'll know",
        songBy: "By Fleetwood Mac",
        question: "Who will come and go? (5 letters)",
        answer: "WOMEN"
    },

    {
        songTitle: "Sweet Dreams",
        line1: "Sweet dreams are made of this",
        line2: "Who am I to disagree",
        line3: "I travel the world and the <strong>_ _ _ _ _ </strong> seas",
        line4: "Everybody's looking for something",
        songBy: "By Eurythmics",
        question: "How many seas are there? (5 letters)",
        answer: "SEVEN"
    },

    {
        songTitle: "Dreamlover",
        line1: "I don't want another <strong>_ _ _ _ _ _ _ _ _</strong>",
        line2: "To disillusion me one more time",
        line3: "Whispering words of forever",
        line4: "Playing with my mind",
        songBy: "By Mariah Carey",
        question: "What doesnt Mariah want? (9 letters)",
        answer: "PRETENDER"
    },

    {
        songTitle: "Dream Operator",
        line1: "Every dream has a name",
        line2: "And names tell your<strong>_ _ _ _ _</strong>",
        line3: "This song is your dream",
        line4: "You're the dream operator",
        songBy: "By Talking Heads",
        question: "What do dreams tell? (5 letters)",
        answer: "STORY"
    },

    {
        songTitle: "Dream Weaver",
        line1: "I've just closed my eyes again",
        line2: "Climbed aboard the dream weaver <strong>_ _ _ _ _</strong>",
        line3: "Driver take away my worries of today",
        line4: "And leave tomorrow behind",
        songBy: "By Gary Wright",
        question: "What mode of transport does Gary take? (5 letters)",
        answer: "TRAIN"
    },

    {
        songTitle: "California Dreamin",
        line1: "All the leaves are brown",
        line2: "And the sky is <strong>_ _ _ _</strong>",
        line3: "I've been for a walk",
        line4: "On a winter's day",
        songBy: "By The Mamas & the Papas",
        question: "What colour is the sky? (4 letters)",
        answer: "GRAY"
    },

    {
        songTitle: "Silent Lucidity",
        line1: "It's a place where you will learn",
        line2: "To face your fears, retrace the years",
        line3: "And ride the whims of your mind",
        line4: "Commanding in another <strong>_ _ _ _ _</strong>",
        songBy: "By Queensrÿche",
        question: "Where will you command? (5 letters)",
        answer: "WORLD"
    },

    {
        songTitle: "Dreams",
        line1: "And now I tell you openly",
        line2: "You have my heart so don't hurt me",
        line3: "You're what I couldn't find",
        line4: "A totally amazing <strong>_ _ _ _</strong>",
        songBy: "By The Cranberries ",
        question: "WHats so amazing? (4 letters)",
        answer: "MIND"
    },

    {
        songTitle: "These Dreams",
        line1: "These dreams go on when I close my eyes",
        line2: "Every second of the night I live another life",
        line3: "These dreams that sleep when it's cold outside",
        line4: "Every moment I'm awake the further I'm away",
        songBy: "By Heart",
        question: "DId this song play in your head as you read it? (2 or 3 letters)",
        answer: "YES" || "NO"
    },

    {
        songTitle: "Dream",
        line1: "We all are living in a dream",
        line2: "But <strong>_ _ _ _</strong> ain't what it seems",
        line3: "Oh, everything's a mess",
        line4: "And all these sorrows I have seen",
        songBy: "By Imagine Dragons",
        question: "What isnt what it seems? (4 letters)",
        answer: "LIFE"
    },

    {
        songTitle: "Get Outta My Dreams, Get Into My Car",
        line1: "Like a road <strong>_ _ _ _ _ _</strong>",
        line2: "Coming after you",
        line3: "Just like a hero",
        line4: "Outta the blue",
        songBy: "By Billy Ocean ",
        question: "Whats it like? (Wile E. Coyote is obsessed)",
        answer: "RUNNER"
    },

    {
        songTitle: "You Make My Dreams",
        line1: "… On a night when bad dreams become a screamer",
        line2: "When they're messin' with a dreamer",
        line3: "I can laugh it in the face",
        line4: "<strong>_ _ _ _ _</strong> and shout my way out",
        songBy: "By Hall & Oate",
        question: "How does Hall or Oate get out? (5 letters)",
        answer: "TWIST"
    },

    {
        songTitle: "#9 Dream",
        line1: "Took a walk down the street",
        line2: "Thru the heat whispered trees",
        line3: "I thought I could hear (hear, hear, hear",
        line4: "Somebody call out my name as it started to <strong>_ _ _ _</strong>",
        songBy: "By John Lennon",
        question: "What did it start to? (4 letters)",
        answer: "RAIN"
    },

    {
        songTitle: "Last Night I Dreamt That Somebody Loved Me",
        line1: "Last night I felt",
        line2: "Real arms around me",
        line3: "No hope, no harm",
        line4: "Just another false <strong>_ _ _ _ _</strong>",
        songBy: "By The Smiths",
        question: "What was false? (5 letters?)",
        answer: "ALARM"
    },

    {
        songTitle: "Dream A Little Dream Of Me",
        line1: "Stars fading but I linger on, dear",
        line2: "Still craving your <strong>_ _ _ _</strong>",
        line3: "I'm longing to linger 'til dawn, dear",
        line4: "Just saying this",
        songBy: "By Doris Day",
        question: "What does Doris crave? (4 letters)",
        answer: "KISS"
    },

    {
        songTitle: "Nice Dream",
        line1: "They love me like I was their <strong>_ _ _ _ _ _ _</strong>",
        line2: "They protect me",
        line3: "Listen to me",
        line4: "They dug me my very own garden",
        songBy: "By Radiohead",
        question: "Who did they love Radio like? (7 letters)",
        answer: "BROTHER"
    },

    {
        songTitle: "The Lion Sleeps Tonight",
        line1: "In the jungle, the mighty jungle",
        line2: "The lion sleeps tonight",
        line3: "In the jungle the <strong>_ _ _ _ _ </strong> jungle",
        line4: "The lion sleeps tonight",
        songBy: "By The Tokens ",
        question: "How was the jungle described? (5 letters)",
        answer: "QUIET"
    },

    {
        songTitle: "I Go to Sleep",
        line1: "When I look up from my <strong>_ _ _ _ _ _</strong>",
        line2: "I dream you are there with me",
        line3: "Though you are far away",
        line4: "I know you'll always be near to me",
        songBy: "By The Pretenders",
        question: "What did The Pretenders look up from? (6 letters)",
        answer: "PILLOW"
    },

    {
        songTitle: "Tá Mo Chleamhnas Á Dhéanamh",
        line1: "'Mo codladh go h-eadarshuth b'aite liom féin",
        line2: "Leabaí luachair a bheith faoi mo thaobh",
        line3: "Buideal <strong>_ _ _ _ _ _</strong> a bheith faoi mo cheann",
        line4: "'S mo chailín deas óg 'bheith ar lámh' liom",
        songBy: "By Altan",
        question: "<s>An bhfuil cead agam dul go dtí</s> What drink/spirit is in the bottle? (6 or 7 letters)",
        answer: "BRANDY" || "brandaí"
    }
];

/// Returns a random integer from 0 to 25:
let lyricQuestionNumber = Math.floor(Math.random() * (lyricGame.length));
let correctAnswer = lyricGame[lyricQuestionNumber].answer;

// Set and display current song and question
document.getElementById("song-title").innerHTML = lyricGame[lyricQuestionNumber].songTitle;
document.getElementById("line-one").innerHTML = lyricGame[lyricQuestionNumber].line1;
document.getElementById("line-two").innerHTML = lyricGame[lyricQuestionNumber].line2;
document.getElementById("line-three").innerHTML = lyricGame[lyricQuestionNumber].line3;
document.getElementById("line-four").innerHTML = lyricGame[lyricQuestionNumber].line4;
document.getElementById("song-by").innerHTML = lyricGame[lyricQuestionNumber].songBy;
document.getElementById("game-question").innerHTML = lyricGame[lyricQuestionNumber].question;

function newGame() {
    // Prevent page reloading
    event.preventDefault();

    // Reset displays
    resetGameData()

    // Call game funtions
    startingStats();
    displayQuestion();

    document.getElementsByClassName("right-grid")[0].style.display = "grid";
    document.getElementsByClassName("left-grid-user-response")[0].style.display = "none";
    document.getElementById("welcome-message").style.display = "none";
    document.getElementById('missing-lyric-game').style.display = "grid";
    document.getElementsByClassName("left-grid-user-response")[0].style.display = "grid";
    document.getElementById("continue-game").disabled = true;
    
}

// Reset game data and displays to start game position
function resetGameData() {
    // Prevent page reloading
    event.preventDefault();

    document.getElementById("area-number").textContent = 0;
    document.getElementById("game-question").textContent = "";
    document.getElementById("player-answer").value = "";
}

// Create character array
// Assign a random number between 70 and 99 to each of the 3 variable player stats
function startingStats() {
    const character = {
        name: "Terry",
        relaxation: generateStat(),
        comfort: generateStat(),
        luck: generateStat(),
        // Get average of 3 stats and display as Sleep Depth, which is the overall player condition
        sleepDepth: function () {
            return Math.floor((this.relaxation + this.comfort + this.luck) / 3);
        }
    }
    //Generate a random number between 70 and 99
    function generateStat() {
        return Math.floor(Math.random() * 20) + 70;
    }

    // Display player stat values
    document.getElementById("name").textContent = "Name: Terry";
    document.getElementsByClassName("player-stats")[0].textContent = character.relaxation;
    document.getElementsByClassName("player-stats")[1].textContent = character.comfort;
    document.getElementsByClassName("player-stats")[2].textContent = character.luck;

    // Calculate player sleep depth as a calculation of player stats and display 
    document.getElementById("sleep-depth").textContent = character.sleepDepth();

    // Change font colour depending on current score
    if (character.sleepDepth() < 26) {
        document.getElementById("sleep-depth").style.color = "red";
    } else if (character.sleepDepth() < 76) {
        document.getElementById("sleep-depth").style.color = "yellow";
    } else {
        document.getElementById("sleep-depth").style.color = "green";
    }
}

// Update game level and diplay next question
function displayQuestion() {
    // Prevent page reloading
    event.preventDefault();

    document.getElementById("submit-answer").disabled = false;
    document.getElementById("continue-game").disabled = true;
    
    let gameCounter = document.getElementById("area-number").textContent;
    gameCounter++;

    document.getElementById("area-number").textContent = gameCounter;
    document.getElementById("total-sleep").textContent = gameCounter;

    // Game complete as player reached level 8 which equals the mythical 8 hours of sleep
    if (gameCounter == 8) {
        alert("CONGRATS!!!");
    }
}

function checkAnswer() {
    event.preventDefault();
    let playerAnswer = document.getElementById("player-answer").value;
    playerAnswer = playerAnswer.toUpperCase();
    if (correctAnswer == playerAnswer) {
        alert("Most Excellent");
    } else {
        alert("oh nooooooo");
    }
}

function updateStats() {
    let xy = parseInt((document.getElementsByClassName("player-stats")[0].textContent));
    let op = parseInt((document.getElementsByClassName("player-stats")[1].textContent));
    let df = parseInt((document.getElementsByClassName("player-stats")[2].textContent));
    let bn = (parseInt((xy + op + df) / 3));

    document.getElementById("sleep-depth").textContent = bn;
}

// Progress Bar
function showProgress() {
    event.preventDefault();

    const block = document.querySelectorAll('.block');
    let num = parseInt(document.getElementById("total-sleep").textContent);

    block.forEach(item => {
        let numElement = item.querySelector('.num');
        //let num = parseInt(numElement.innerText);
        //let num = parseInt(progress);
        //let num = document.getElementById("total-sleep").textContent;
        let count = 0;
        let time = 2000 / num;
        let circle = item.querySelector('.circle');
        setInterval(() => {
            if (count == num) {
                clearInterval();
            } else {
                count += 1;
                numElement.innerText = count;
            }
        }, time)
        circle.style.strokeDashoffset = 503 - (503 * (num / 8));
        let dots = item.querySelector('.dots');
        dots.style.transform =
            `rotate(${360 * ((num * 12.5) / 100)}deg)`;
        if (num == 100) {
            dots.style.opacity = 0;
        }
    })
};



/*
function setGame() {
    // Set game type array and display random game type data
    const game = ["missingLyric", "Echos of the Past", "Morning Ritual", "truthyOrFalsy"];
    let gameType = Math.floor(Math.random() * game.length);
    document.getElementById("game").textContent = game[gameType];

    // Set the weather background
    // ??CHANGE WEATHER TO GAME TYPE??
    const gameImage = [
        "url('/assets/images/weather/rain1.jpg')",
        "url('/assets/images/weather/clear_sky.jpg')",
        "url('/assets/images/weather/snow1.jpg')",
        "url('/assets/images/weather/hurricane2.jpg')"
    ];
    document.getElementsByClassName("right-grid-npc1-info")[0].style.backgroundImage = gameImage[gameType]; 
}
*/


/*
function setTerrain() {
    // Set terrain array and display random terrain data
    // https://outforia.com/types-of-terrain/
    const terrain = ["Foothills", "Swamp", "Meadow", "Forest", "Canyon", "Valley", "Dunes", "Glacier"];
    let terrainType = Math.floor(Math.random() * terrain.length);
    document.getElementById("terrain").textContent = "Terrain: " + terrain[terrainType];

    //Set the terrain background reusing terrainType variable to match terrain type to terrain image and display
    const terrainImage = [
        "url('/assets/images/terrain/foothills.jpg')",
        "url('/assets/images/terrain/swamp.jpg')"
    ];
    document.getElementsByClassName("right-grid-npc2-info")[0].style.backgroundImage = terrainImage[terrainType];
}
*/


/*
    // Prevent page reloading
    event.preventDefault();

    document.getElementById("continue-game").disabled = false;
    document.getElementById("submit-answer").disabled = true;

    document.getElementById("player-answer").value = "";
    // document.getElementById("submit-answer").disabled = "true";

    updateStats();
*/


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
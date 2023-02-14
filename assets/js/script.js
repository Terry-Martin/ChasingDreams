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

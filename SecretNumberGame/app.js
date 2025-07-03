let listOfDrawnNumbers = [];   
let limitNumber = 100;
let secretNumber = randomNumberGenarator();  
console.log(secretNumber);

let attempts = 1;

function displayTextOnScreen(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

displayTextOnScreen("h1", "Secret Number Game");
displayTextOnScreen("p", `Choose a number between 1 to ${limitNumber}`);

function checkGuess(){
    let guess = document.querySelector("input").value;
    if (secretNumber == guess) {
        console.log(secretNumber == secretNumber);
        displayTextOnScreen("h1", "GREAT!");
        let wordAttempts = attempts > 1 ? "attempts" : "attempt";
        // transforms a regular string into one that can be used as a variable.
        // because HTML doesn't fetch variables inside a string, we always pass a string
        // we create a variable with the values inside and in the end use that variable to pass the phrase
        let messageAttempts = `Well done! You guessed the right number with ${attempts} ${wordAttempts}`;
        displayTextOnScreen("p", messageAttempts);
        // goes to the HTML, finds the element with id="restart", and removes the "disabled" attribute
        document.getElementById("restart").removeAttribute("disabled");
    } else {
        if (secretNumber < guess) {
            displayTextOnScreen("p", "The secret number is lesser.");
        } else {
            displayTextOnScreen("p", "The secret number is greater.");
        }
        attempts++;
        clearInput();
    }
}

function randomNumberGenarator() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let quantidadeDeElementosNaLista = listOfDrawnNumbers.length;

    if (quantidadeDeElementosNaLista == limitNumber) {
        listOfDrawnNumbers = [];
    }

    if (listOfDrawnNumbers.includes(chosenNumber)) {
        return randomNumberGenarator();
    } else {
        listOfDrawnNumbers.push(chosenNumber);
        console.log(listOfDrawnNumbers);
        return chosenNumber;
    }
}

function clearInput() {
    // gets the guess input
    guess = document.querySelector("input");
    // clears the guess input field
    guess.value = " ";
}

function initialMessage() {
    displayTextOnScreen("h1", "Secret Number Game");
    displayTextOnScreen("p", `Choose a number between 1 to ${limitNumber}`);
}

function restartGame() {
    secretNumber = randomNumberGenarator();
    console.log(secretNumber);
    clearInput();
    attempts = 1;
    initialMessage();
    document.getElementById("restart").setAttribute("disabled", true);
}

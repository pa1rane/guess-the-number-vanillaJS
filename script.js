const inputVal = document.querySelector("#input");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const lowHigh = document.createElement("p");
const guesses = document.createElement("p");
const guessArr = [];

let number = generateRandomNumber();

function generateRandomNumber() {
    return (Math.random() * 100).toFixed("0");
}

reset.disabled = true;

submit.addEventListener("click", () => {
    const guess = Number(inputVal.value)
    guessArr.push(guess)
    guesses.innerText = "Your Guesses: " + guessArr
    inputVal.value = ""

    if(guess > number) {
      lowHigh.innerText = "To high"
    } else if(guess< number) {
      lowHigh.innerText = "To Low"
    } else {
      lowHigh.innerText = "You are Correct Congrats"
      inputVal.disabled = true;
      submit.disabled = true;
      reset.disabled = false
    }

    if(guessArr.length >= 10 ) {
        inputVal.disabled = true;
        submit.disabled = true;
        reset.disabled = false
    }

    document.body.appendChild(lowHigh)
    document.body.appendChild(guesses)
    
})

reset.addEventListener("click", () => {
    guesses.innerText = " ";
    guessArr.length = 0;
    lowHigh.innerText = " ";
    inputVal.disabled = false;
    submit.disabled = false;
    reset.disabled = true;
    number = generateRandomNumber();
})

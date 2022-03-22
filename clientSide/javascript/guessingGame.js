var max = 100;
var guessCount = 0;
var guessesRemaining = 10;
var randInt = Math.floor(Math.random() * max + 1);

function guessCheck()
{
    let guessInt = document.getElementById("guessField").value;
    guessCount += 1;
    guessesRemaining -= 1;

    if(guessesRemaining == 0 && guessInt != randInt)
    {
        document.getElementById("result").innerHTML = "<p style=color:red;>Oh no! You've run out of guesses! Try again, the answer was " + randInt + ".</p>";
        document.guessForm.style.display = "none";
    }
    else
    {
        if(guessInt == randInt)
        {
            document.getElementById("result").innerHTML = "<p style=color:green;>You got it! It took you " + guessCount + " tries!</p>";
        }
        else if(guessInt > randInt)
        {
            document.getElementById("result").innerText = "Try a lower number.";
        }
        else
        {
            document.getElementById("result").innerText = "Try a higher number.";
        }
    }
    document.getElementById("guessField").value = "";
    document.getElementById("guessesRemaining").innerText = "Enter a number 0-10. You have " + guessesRemaining + " guesses remaining.";
}

function newGame()
{
    document.guessForm.style.display = "block";
    guessCount = 0;
    guessesRemaining = 10;
    randInt = Math.floor(Math.random() * max + 1);
    document.getElementById("result").innerText = "";
    document.getElementById("guessesRemaining").innerText = "Enter a number 0-10. You have " + guessesRemaining + " guesses remaining.";
}
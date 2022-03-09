var x = Math.floor(Math.random() * 10);
var y = Math.floor(Math.random() * 10);

window.onload = function()
{
    document.getElementById("showMessage").innerHTML = "What is ";
    document.getElementById("num1").innerHTML = x;
    document.getElementById("num2").innerHTML = y;
}

function checkAnswer()
{
    var guessNum = document.getElementById("guessedNum").value;
    var answer = x * y;

    if(guessNum == answer)
    {
        document.getElementById("feedback").innerHTML += "<p style=color:green;>Correct Answer!</p>";
    }
    else
    {
        document.getElementById("feedback").innerHTML += "<p style=color:red;>Wrong Answer.</p>";
    }
}

// another way to generate random numbers
// function randomNumGenerator()
// {
//     x = Math.floor(Math.random() * 10);
// }
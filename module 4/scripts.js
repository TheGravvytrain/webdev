function getLetterGrade()
{
    let x = document.changeform.getInput.value;
    if (!document.getElementById)
    {
        return;
    }
    if((x >= 90) && (x <= 100))
    {
        alert("You made a 90 on your exam!");
        alert("Congratulations!");
    }
    else if((x >= 80) && (x < 90))
    {
        alert("You made a B, you'll get them next time!")
    }
    else if((x >= 70) && (x < 80))
    {
        alert("You made a C, you'll get them next time!")
    }
    else if((x >= 60) && (x < 70))
    {
        alert("You made a D, you'll get them next time!")
    }
    else
    {
        alert("You made an F, you can do so much better than that!!")
        alert(x)
    }
}
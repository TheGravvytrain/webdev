function getRandomJoke() 
{
    // Create the arrays
    jokes = new Array(5);
    pics = new Array(5);


    // Initialize the arrays with quotes
    jokes[0] = "Why did the football coach go to the bank? To get his quarter back.";
    // pics[0] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_he6tRibok1l_2HUMksbiR3jN7WMykqvdQ&usqp=CAU";

    jokes[1] = "Can February March? No, but April May!";
    // pics[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfHasVwgbhqKzS_W-cn6poaut2ae1FoWytw&usqp=CAU";

    jokes[2] = "Why was 6 afraid of 7? Because 7 ate nine!";
    // pics[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoPF5lpqwtWCqFglFIE_8JiiDiLvRr4RTeg&usqp=CAU";

    jokes[3] = "I'm so good at sleeping that I do it with my eyes closed.";
    // pics[3] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuGk5lP53HNyasbuuohaqSgOdSaYGX3-b5Q&usqp=CAU";

    jokes[4] = "What's brown and sticky? A stick.";
    // pics[4] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweHuFSFVFl_uTe2sPIjaT9I9knQjnHch8bA&usqp=CAU";


    // Get a random index into the arrays
    i = Math.floor(Math.random() * jokes.length);

    jk = document.getElementById("joke");

    jkString = "<p style='background-color: #ffb6c1' >\"" 
                + jokes[i] + '"' + "<em>"// + pics[i] + "</em></p>"
    jk.innerHTML = jkString;
}

function getRandomImage() 
{
    pics = new Array(5);
    pics[0] = "dogBitingTable.jfif";
    pics[1] = "dressedPug.jfif";
    pics[2] = "funnyHorse.jfif";
    pics[3] = "funnyMonkey.jfif";
    pics[4] = "funnyWeirdAnimal.jfif";

    i = Math.floor(Math.random() * pics.length);

    img = pics[i];

    document.getElementById("randImg").src = `/webdev/clientSide/images/${img}`
}
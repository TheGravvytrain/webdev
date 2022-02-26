var count = 0;

// document.getElementById("count").innerHTML = count;

function incCount()
{
    count++;
    return document.getElementById("count").innerText = count;
}

function decCount()
{
    count--;
    return document.getElementById("count").innerText = count;
}



/////////////////// UNUSED CODE /////////////////////
// var incCount = document.querySelector('#increment');
// var decCount = document.querySelector('#decrement');
// var input = document.querySelector('input');

// function countItInc()
// {
//     $("#incCounter").html(incCount());
// }

// function countItDec()
// {
//     $("#decCounter").html(decCount());
// }

// incCount.addEventListener('click', () =>
// {
//     input.value = parseInt(input.value) + 1;
// })
// decCount.addEventListener('click', () =>
// {
//     input.value = parseInt(input.value) - 1;
// })

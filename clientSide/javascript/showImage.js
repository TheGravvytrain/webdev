function showImage(img)
{
    var largeImg = document.getElementById('bigImage');
    largeImg.src = img;
    getTxt(img)
}

function getTxt(txt)
{
    var picText = document.getElementById('picText');
    picText.src = txt

    // console.log(img)
    if(txt.includes('dense'))
    {
        document.getElementById('picText').innerHTML = "a dense forest";
    }

    if(txt.includes('Bridge'))
    {
        document.getElementById('picText').innerHTML = "a forest bridge";
    }

    if(txt.includes('mountain'))
    {
        document.getElementById('picText').innerHTML = "a forest at a mountain base";
    }
}
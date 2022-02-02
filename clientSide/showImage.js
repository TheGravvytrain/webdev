function showImage(img)
{
    var largeImg = document.getElementById('bigImage');
    largeImg.src = img;
    getTxt(img)
}

function getTxt(txt)
{
    var picText = document.getElementById('pictureText');
    picText.src = txt

    if(img.includes('dense'))
    {
        document.getElementById('picText').innerHTML = "a dense forest";
    }

    if(img.includes('bridge'))
    {
        document.getElementById('picText').innerHTML = "a forest bridge";
    }

    if(img.includes('mountain'))
    {
        document.getElementById('picText').innerHTML = "a forest at a mountain base";
    }
}
// setting images as variables
let bigImg = document.getElementById("bigImg");
let scrollImg = document.getElementById("scrollImg");
let caption = document.getElementById("caption");

let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

let i = 0;

nextButton.onclick = function() {
    i++;
    bigImg.src = imgArray[i];
    caption.innerHTML = infoArray[i];

    if (i == imgArray.length) {
        i = 0;
        bigImg.src = imgArray[i];
        caption.innerHTML = infoArray[i];
    }
}

previousButton.onclick = function() {
    i--;

    if (i == -1) {
        i = 3;
        bigImg.src = imgArray[i];
        caption.innerHTML = infoArray[i];
    }
    else {
        bigImg.src = imgArray[i];
        caption.innerHTML = infoArray[i];
    }    
}
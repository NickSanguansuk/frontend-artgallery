function changeColorRed() {
    let ulv = document.getElementById('test01');
    ulv.style.color = 'red';
}

function changeColorWhite() {
    let ulv = document.getElementById('test01');
    ulv.style.color = 'white';
}

function addP1() {
    addPaintingToFavorite('Tomorrow I May Be Far Away');
}

function addP2() {
    addPaintingToFavorite('Classic Landscape');
}

function addP3() {
    addPaintingToFavorite('Haskell\'s House');
}

function addP4() {
    addPaintingToFavorite('The Farm');
}

function addP5() {
    addPaintingToFavorite('The Boating Party');
}

function addP6() {
    addPaintingToFavorite('The Voyage of Life: Youth');
}

function addP7() {
    addPaintingToFavorite('The Adoration of the Shepherds');
}

function addP8() {
    addPaintingToFavorite('Nonchaloir (Repose)');
}

function addP9() {
    addPaintingToFavorite('Great America');
}

function addP10() {
    addPaintingToFavorite('The Maas at Dordrecht');
}

function addP11() {
    addPaintingToFavorite('The Japanese Footbridge');
}

function addP12() {
    addPaintingToFavorite('Nanny and Child');
}

function addPaintingToFavorite(data) {

    let ulv = document.getElementById('paintings');

    let b = true;

    for (let i = 0; i < ulv.children.length; i++) {
        if (ulv.children[i].textContent == data) {
            b = false;
            break;
        }
    }

    let printText = '';
    let printer;

    if (b === true) {
        let newElement = document.createElement("li");
        newElement.textContent = data;
        ulv.appendChild(newElement);

        printText = 'Recently Added ---> "' + data + '"';

        //printer = document.getElementById('printLocation');
        //printer.lastElementChild.style.color = "white";

    } else {
        printText = '"' + data + '" is already in the favorite list';

        //printer = document.getElementById('printLocation');
        //printer.lastElementChild.style.color = "red";
    }

    document.getElementById('printLocation').innerHTML = printText;
}

function showAllMyFavoriteArts() {

    let ulv = document.getElementById('paintings');

    let printText = '';

    // This is an array (Collection)
    let lists = ulv.children;

    for (let i = 0; i < ulv.children.length; i++) {
        printText += '"' + ulv.children[i].textContent + '", ';
    }

    document.getElementById('printLocation').innerHTML = printText;
}

let button = document.getElementById("printLocation");
button.addEventListener("mouseover", changeColorRed);

document.addEventListener('keypress',function() {
    //console.log("You pressed a key, Thanks!");
    changeColorRed();
});

function mouseOverEvent() {
    //alert("This is a Print Area.");
    changeColorRed();
}

function mouseOverEvent2() {
    changeColorWhite();
}


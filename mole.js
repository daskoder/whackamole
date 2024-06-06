let currMoleTile;
let CurrPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 0; i<9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){

    if (gameOver == true) {
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./bowl.png";
 let num =getRandomTile();
 if(CurrPlantTile&&CurrPlantTile.id == num){
     return;
 }
 currMoleTile = document.getElementById(num);
 currMoleTile.appendChild(mole);
}

function setPlant() {

if (gameOver == true) {
    return;
}

    if(CurrPlantTile){
        CurrPlantTile.innerHTML ="";
    }

    let plant = document.createElement("img");
    plant.src = "./gosling.png";

    let num = getRandomTile();
    if(currMoleTile&&currMoleTile.id == num){
        return;
    }
    CurrPlantTile = document.getElementById(num);
    CurrPlantTile.appendChild(plant);
}
function selectTile(){

if (gameOver == true) {
    return;
}


    if(this == currMoleTile){
        score+=10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == CurrPlantTile){
        document.getElementById("score").innerText = "Game Over: "+score.toString();
        gameOver = true;
    }
}
let nameTxt = document.querySelector('#text');
let nameBtn = document.querySelector('#nameBtn');

nameBtn.addEventListener("click", changeName);
ogName.addEventListener("click", revertName);
// all of these names are characters that belong to my friends and i
//dullahan and xethorie are my fellas
var nameList = ["Onett", "Apollo", "Tavern", "Profes", "Marksman", "Dullahan", "CAC", "Judge", "Lottie", "Nylanthotep", "Emporo", "Jaeger", "Cesare", "Mai", "Clever Jr.", "Rook", "Vitiri", "Xethorie", "Orion", "Jinx", "Lycan", "Caspian", "Priest Zaphkiel", "Jackthaniel"]

function changeName(){
    nameTxt.innerHTML = nameList[Math.floor(Math.random()* 26)] ;
}

function revertName (){
    nameTxt.innerHTML = "...";
}
switch (changeName){
    case 1:
    document.body.style.background = "#f3f3f3 url('https://files.catbox.moe/gccs1c.jpg') no-repeat right top";
    break;
    case 2:
    document.body.style.background = "#f3f3f3 url('https://files.catbox.moe/a1mdmo.jpg') no-repeat right top";
}
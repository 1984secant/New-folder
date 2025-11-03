let nameTxt = document.querySelector('#text');
let nameBtn = document.querySelector('#nameBtn');

nameBtn.addEventListener("click", changeName);
ogName.addEventListener("click", revertName);
// all of these names are characters that belong to my friends and i
//dullahan and xethorie are my fellas
var nameList = ["Onett", "Apollo", "Tavern", "Profes", "Marksman", "Dullahan", "CAC", "Judge", "Lottie", "Nylanthotep", "Emporo", "Jaeger", "Cesare", "Mai", "Clever Jr.", "Rook", "Vitiri", "Xethorie", "Orion", "Jinx", "Lycan", "Caspian", "Priest Zaphkiel", "Jackthaniel" ]

function changeName(){
    nameTxt.innerHTML = nameList[Math.floor(Math.random()* 25)] ;
}

function revertName (){
    nameTxt.innerHTML = "...";
}
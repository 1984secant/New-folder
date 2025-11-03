let nameTxt = document.querySelector('#text');
let nameBtn = document.querySelector('#nameBtn');

nameBtn.addEventListener("click", changeName);
ogName.addEventListener("click", revertName);
var nameList = ["Onett", "Apollo", "Tavern", "Profes", "Marksman", "Dullahan", "CAC", "Judge", "Lottie", "Nylanthotep", "Emporo", "Jaeger", "Cesare", "Mai", "Clever Jr.", "Rook", "Vitiri", "Xethorie", "Orion", "Jinx", "Lycan", "Caspian", "Priest Zaphkiel", "Jackthaniel" ]

function changeName(){
    nameTxt.innerHTML = nameList[Math.floor(Math.random()* 25)] ;
}

function revertName (){
    nameTxt.innerHTML = "...";
}
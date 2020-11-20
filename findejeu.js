let h1 = document.getElementsByTagName('h1')[0]
console.log(h1);
let score = localStorage.getItem("score")
let nbrDeBonnesRep = score/5;

h1 = h1.innerHTML = "Merci d'avoir joué " + localStorage.getItem('pseudo') + "," + "<br> votre score est de : " + score + " points !!! <br> Vous avez répondu correctement " + nbrDeBonnesRep + " fois.";
console.log(h1);

let linkToGame = document.getElementById("linkToGame")
linkToGame.addEventListener("click", redirectToGamePage)//ecoute du lien du jeu

function redirectToGamePage (e) { //fonction de redirection
    window.location.href="jeu.html";//redirection vers la page jeu
}

let linkToMenu = document.getElementById("linkToMenu")
linkToMenu.addEventListener("click", redirectToMenuPage)

function redirectToMenuPage (e) {
    window.location.href="accueil.html";
}

let purpleModeBtn = document.getElementById("purpleModeBtn");
purpleModeBtn.addEventListener("click", changeTopurpleMode);

function changeTopurpleMode() {
    console.log("Je suis dans le tout début de la fonction changeTopurpleMode")
    let pbody = document.getElementById("pbody");
    console.log("je suis le body" + pbody)
    pbody.classList.toggle("pBody");
    let titre = document.getElementById("titre");
    console.log("je suis le titre" + titre)
    titre.classList.toggle("ph1");
    let linkToGame = document.getElementById("linkToGame")
    console.log("je suis linkToGame" + linkToGame)
    linkToGame.classList.toggle("Pbtn")
    let linkToMenu = document.getElementById("linkToMenu")
    console.log("je suis linkToMenu" + linkToMenu)
    linkToMenu.classList.toggle("Pbtn")
    }
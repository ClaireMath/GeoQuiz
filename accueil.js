let demo = document.getElementById("demo");
demo.addEventListener("click", displayNames); //ecoute de demo

function displayNames() {
  //fonction de d'affichage
  demo.innerHTML = "THOMAS - SORY - CLAIRE - MICKAEL - ALPHA - BRIAN"; //faire apparaitre le texte
}

window.onload = function () {
  document.getElementById("reglement").style.display = "none";
}; //empêche l'affichage des règles au chargement de la page

let regles = document.getElementById("regle");
regles.addEventListener("click", afficherRegles);

function afficherRegles(e) {
  //fonction pour l'affichage des règles
  if (getComputedStyle(reglement).display != "none") {
    reglement.style.display = "none";
  } else {
    reglement.style.display = "block";
  }
}

let inputPseudo = document.getElementById("pseudo");
let valid = document.getElementById("valid");
valid.addEventListener("click", recupinputvalue); //ecoute de valide
let divSousPseudo = document.getElementById("souspseudo");
let myForm = document.getElementById("myForm");
let authoriseRedirect = false ;
let inputValue; 

function recupinputvalue(e) {
  //fonction du pseudo
  inputValue = inputPseudo.value; //valeur = pseudo

  if (inputValue) {
    authoriseRedirect = true
    console.log("je suis la valeur de linput : "+ inputValue); //on met le inputvalue dans la console
    localStorage.setItem("pseudo", inputValue); //on met le pseudo dans le local storage
    // alert('Votre pseudo a bien été enregistré') //alerte qui dis que le pseudo a été enregistrer
    divSousPseudo.remove();
    let h3 = document.createElement("h3");
    h3.textContent = inputValue + ", votre pseudo a bien été enregistré.";
    myForm.appendChild(h3);
  } else {
    console.log("je suis dans le else");
    alert("Veuillez indiquer votre pseudo."); //alerte qui dis que le pseudo a été enregistrer
  }
}

let linkToGame = document.getElementById("linkToGame");
console.log('variable linkToGame = ' + linkToGame)
linkToGame.addEventListener("click", redirectToGamePage); //ecoute du lien du jeu 

function redirectToGamePage(e) {

  //  window.location.href="jeu.html";

  // if (authoriseRedirect) {
  //   window.location.href="jeu.html";
  // } else {
  //   console.log("normalement là il se passe l'alerte")
  //   alert('veuillez indiquer votre pseudo')
  // }
  
  //fonction de redirection
  if (inputValue == undefined) {
    alert("Veuillez indiquer votre pseudo.");
  } else {
  // redirection vers la page jeu
  window.location.href="jeu.html";}
}

let purpleMode = document.getElementById("purpleMode");
purpleMode.addEventListener("click", changeTopurpleMode);

function changeTopurpleMode() {
  let body = document.body;
  body.classList.toggle("purpleBody");
  let h1 = document.getElementById("h1");
  h1.classList.toggle("purpleh1et2");
  let h2 = document.getElementById("h2");
  h2.classList.toggle("purpleh1et2");
  demo.classList.toggle("purplehalloffame");
  let linkToGame = document.getElementById("linkToGame");
  linkToGame.classList.toggle("Pbtn");
  let regle = document.getElementById("regle");
  regle.classList.toggle("Pbtn");
  let valid = document.getElementById("valid");
  valid.classList.toggle("Pbtn");
}

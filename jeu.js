let start = document.getElementById("start");
let tabCountries = Array(
  "Italie",
  "Russie",
  "France",
  "Luxembourg",
  "Espagne",
  "Portugal",
  "Royaume-Uni",
  "Irlande",
  "Suisse",
  "Belgique",
  "Roumanie",
  "Moldavie",
  "Norvège",
  "Suède",
  "Finlande",
  "Ukraine",
  "Allemagne",
  "Pays-bas",
  "Danemark",
  "Islande",
  "Estonie",
  "Biélorussie",
  "Bosnie",
  "Letonnie",
  "Bulgarie",
  "Lituanie",
  "Macédoine",
  "Turquie",
  "Grèce",
  "Slovaquie",
  "Chypre",
  "Hongrie",
  "Pologne",
  "Albanie",
  "Autriche",
  "Tchéquie",
  "Croatie",
  "Slovénie",
  "Serbie",
  "Monténégro",
  "Kosovo",
  "Arménie",
  "Géorgie",
  "Azerbaidjan"
);

let tabDescriptionCountries = Array(
  "L'Italie a acquis une renomée mondiale pour sa gastronomie.",
  "Il fait très froid en Russie et mieux vaut ne pas en dire du mal.",
  "En France, on est les champions du monde !!!",
  "Le Luxembourg est connu pour être petit ",
  "L'Espagne est connu pour ses coridas",
  "Le Portugal est connu pour son excellent coach agile Mr André De Sousa",
  "Le Royaume-Uni est connu pour le Brexit",
  "Irlande est connu pour la saint-Patrick",
  "La Suisse est connue pour les banques et les montres",
  "La Belgique est connue pour les bières, les frites et les plantes ",
  "La Roumanie est connue pour es diplomes de médecin ",
  "La Moldavie est connue pour ses vins rouges ",
  "La Norvège est connue pour le froid ",
  "La Suède est connue pour ses Suédoises ",
  "La Finlande est connue pour ses Aurores",
  "L'Ukraine est un vaste pays d'Europe de l'Est réputé pour ses églises orthodoxes",
  "L'Allemagne est connue pour ses bretzels.",
  "La Pays-bas est connue pour ses moulins et sa capitale Amsterdam",
  "La Danemark est connue pour ses batiment de couleurs",
  "L'Islande est connue pour les vikings",
  "L'Estonie est connue pour ses selfies avec Marine",
  "La Biélorussie est connue pour sa démocratie",
  "La Bosnie est connue pour l'assassinat de l'archiduc François-Ferdinand, qui a provoqué la Première Guerre mondiale", 
  "La Lettonie est connue pour son bois",
  "La Bulgarie est connue pour la mer noir",
  "La Lituanie est connue pour ses cathédrales",
  "La Macédoine est connue pour la salade",
  "La Turquie est connue pour ses kebab",
  "La Grèce est connue pour ses yaourts",
  "La Slovaquie est connue pour son armée",
  "La Chypre est connue pour ses sites archéologiques",
  "La Hongrie est connue pour ne pas avoir d'acces à la mer",
  "La Pologne est connue pour ses mines de sel",
  "L'Albanie est connue pour les gens dans le coffre",
  "L'Autriche est connue pour ses philosophes et Mozart",
  "La Tchéquie est connue pour ses chateaux",
  "La Croatie est connue pour l'achat des joueurs",
  "La Slovénie est connue pour ses montagnes, ses stations de ski et ses lacs",
  "La Serbie est connue pour sa mafia",
  "Le Monténégro est connue pour la nature",
  "Le Kosovo est connue pour être libéré de la Serbie",
  "L'Arménie est connue pour ses sites religieux ",
  "La Géorgie est célèbre pour le monastère troglodytique de Vardzia, du XIIe siècle, ainsi que pour l'antique région vinicole de la Kakhétie",
  "Azerbaidjan est connue pour sa cité médiéviale intra-muros et ses fortifications" 
);


let divBtnAndCountry = document.getElementById("divBtnAndCountry");
let h3 = document.getElementsByTagName("h3")[0]

let h1 = document.getElementsByTagName('h1')[0]
h1 = h1.innerHTML = "À toi de jouer, "+ localStorage.getItem('pseudo') +" !" ;//h1 = merci d'avoir joué !


let startingMinutes = 1.5; //définir le timer
let time = startingMinutes * 60; //le commencement du timer
let countdownTime = document.getElementById("timer"); //prend l'element timer

function countdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds; 

  start.style.display = "none";
  countdownTime.style.display = "block";
  countdownTime.innerHTML = `${minutes} : ${seconds}`;
  
  if(time < 0) {
    countdownTime.innerHTML = "0 : 00";
    window.location.href = "findejeu.html";
  } else {
    time--;
    setTimeout(countdown, 1000);
  }
}


let russie = document.getElementById("Russie");
let france = document.getElementById("France");
let italie = document.getElementById("Italie");
let luxembourg = document.getElementById("Luxembourg");
let espagne = document.getElementById("Espagne");
let portugal = document.getElementById("Portugal");
let royaumeuni = document.getElementById("Royaume-Uni");
let irlande = document.getElementById("Irlande");
let suisse = document.getElementById("Suisse");
let belgique = document.getElementById("Belgique");
let roumanie = document.getElementById("Roumanie");
let moldavie = document.getElementById("Moldavie");
let norvege = document.getElementById("Norvège");
let suede = document.getElementById("Suède");
let finlande = document.getElementById("Finlande");
let ukraine = document.getElementById("Ukraine");
let allemagne = document.getElementById("Allemagne");
let paysbas = document.getElementById("Pays-bas");
let danemark = document.getElementById("Danemark");
let islande = document.getElementById("Islande");
let estonie = document.getElementById("Estonie");
let bielorussie = document.getElementById("Biélorussie");
let bosnie = document.getElementById("Bosnie");
let letonnie = document.getElementById("Letonnie");
let bulgarie = document.getElementById("Bulgarie");
let lituanie = document.getElementById("Lituanie");
let macedoine = document.getElementById("Macédoine");
let turquie = document.getElementById("Turquie");
let grece = document.getElementById("Grèce");
let slovaquie = document.getElementById("Slovaquie");
let chypre = document.getElementById("Chypre");
let hongrie = document.getElementById("Hongrie");
let pologne = document.getElementById("Pologne");
let albanie = document.getElementById("Albanie");
let autriche = document.getElementById("Autriche");
let tchequie = document.getElementById("Tchéquie");
let slovenie = document.getElementById("Slovénie");
let croatie = document.getElementById("Croatie");
let serbie = document.getElementById("Serbie");
let montenegro = document.getElementById("Monténégro");
let kosovo = document.getElementById("Kosovo");
let armenie = document.getElementById("Arménie");
let georgie = document.getElementById("Géorgie");
let azerbaidjan = document.getElementById("Azerbaidjan");

italie.addEventListener("click", isAnswerRight)
russie.addEventListener("click", isAnswerRight)
france.addEventListener("click", isAnswerRight)
luxembourg.addEventListener("click", isAnswerRight)
espagne.addEventListener("click", isAnswerRight)
portugal.addEventListener("click", isAnswerRight)
royaumeuni.addEventListener("click", isAnswerRight)
irlande.addEventListener("click", isAnswerRight)
suisse.addEventListener("click", isAnswerRight)
belgique.addEventListener("click", isAnswerRight)
roumanie.addEventListener("click", isAnswerRight)
moldavie.addEventListener("click", isAnswerRight)
norvege.addEventListener("click", isAnswerRight)
suede.addEventListener("click", isAnswerRight)
finlande.addEventListener("click", isAnswerRight)
ukraine.addEventListener("click", isAnswerRight)
allemagne.addEventListener("click", isAnswerRight)
paysbas.addEventListener("click", isAnswerRight)
danemark.addEventListener("click", isAnswerRight)
islande.addEventListener("click", isAnswerRight)
estonie.addEventListener("click", isAnswerRight)
bielorussie.addEventListener("click", isAnswerRight)
bosnie.addEventListener("click", isAnswerRight)
letonnie.addEventListener("click", isAnswerRight)
bulgarie.addEventListener("click", isAnswerRight)
lituanie.addEventListener("click", isAnswerRight)
macedoine.addEventListener("click", isAnswerRight)
turquie.addEventListener("click", isAnswerRight)
grece.addEventListener("click", isAnswerRight)
slovaquie.addEventListener("click", isAnswerRight)
chypre.addEventListener("click", isAnswerRight)
hongrie.addEventListener("click", isAnswerRight)
pologne.addEventListener("click", isAnswerRight)
albanie.addEventListener("click", isAnswerRight)
autriche.addEventListener("click", isAnswerRight)
tchequie.addEventListener("click", isAnswerRight)
slovenie.addEventListener("click", isAnswerRight)
croatie.addEventListener("click", isAnswerRight)
serbie.addEventListener("click", isAnswerRight)
montenegro.addEventListener("click", isAnswerRight)
kosovo.addEventListener("click", isAnswerRight)
armenie.addEventListener("click", isAnswerRight)
georgie.addEventListener("click", isAnswerRight)
azerbaidjan.addEventListener("click", isAnswerRight)


let check = true;
let noP = true ;
let noPdescription = true
let randCountry;
let score = 0;

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
let start = document.getElementById("start");
console.log("je suis start" + start)
start.classList.toggle("Pbtn")
}

let divRightOrWrongAnswer = document.getElementById("rightOrWrongAnswer")
// window.addEventListener("click", isAnswerRight)
let p = document.createElement("p");
let pdescription = document.createElement("p");
// let p2 = document.createElement("p")
let index;
let countriesDescription = document.getElementById("countriesDescription")

function isAnswerRight (event) {
  event.preventDefault();
  console.log('je suis dans la fonction isAnswerRight')
  let idOfClickedElemt = event.srcElement.id;
  console.log(idOfClickedElemt)
  if (idOfClickedElemt == randCountry) {
    score=score+5;
    console.log(score);
    console.log('réponse correcte, le score est égal à : '+score)
    localStorage.setItem('score', score)
    for(index = 0; index < tabDescriptionCountries.length; index++) {
      if (idOfClickedElemt === tabCountries[index]) { 
         console.log ('yes Alpha, ta boucle est bonne!')
         console.log(tabDescriptionCountries[index])  
            if (noPdescription) {
            console.log("réponse juste + je suis dans le if noPDescription")
            pdescription.textContent= tabDescriptionCountries[index]
            countriesDescription.appendChild(pdescription);
            noPdescription = false
            displayRandomCountry();
          } else {
            pdescription.remove();
            noPdescription = true
            pdescription.textContent= tabDescriptionCountries[index]
            countriesDescription.appendChild(pdescription);
            noPdescription = false;
            displayRandomCountry();
          }
        }
    }
   // Création d'un élément p et attribution d'une classe à cet élément
   // et je lui donne un contenu de texte
   // Je greffe ce paragraphe à ma div
   if (noP) {
     console.log("réponse juste + je suis dans le if noP")
    p.setAttribute('class', 'rightRep')
    p.textContent= "Bravo, bonne réponse !"
    divRightOrWrongAnswer.appendChild(p);
    noP = false
    // displayRandomCountry(); 

   } else {
    console.log("reponse juste + il y a déjà un P")
    // p.remove();
    noP = true
    p.setAttribute('class', 'rightRep')
    p.textContent= "Bravo, bonne réponse !"
    divRightOrWrongAnswer.appendChild(p);
    // displayRandomCountry();
   }
    return true;
    
  } else {
    pdescription.remove()
    //(si réponse fausse)
    if (noP) {
    console.log('else = réponse fausse mais pas de p, donc if (noP)')
    // p = document.createElement("p")
    p.setAttribute('class', 'wrongRep')
    p.textContent= "Faux! Cherche encore !"
    divRightOrWrongAnswer.appendChild(p)
    noP = false;

    return false;
  } else {
    console.log("else = réponse fausse + 2éme if donc il y a déjà un p")
    // p.remove();
    noP = true;
    p.setAttribute('class', 'wrongRep')
    p.textContent= "Faux! Cherche encore !"
    divRightOrWrongAnswer.appendChild(p);
  }
}
}

// function isAnswerRight (event) {
//     event.preventDefault();
//     console.log('je suis dans la fonction isAnswerRight')
//     let idOfClickedElemt = event.srcElement.id;
//     console.log(idOfClickedElemt)
//     if (idOfClickedElemt == randCountry) {
//       score=score+5;
//       console.log(score);
//       console.log('réponse correcte, le score est égal à : '+score)
//       localStorage.setItem('score', score)
      
//      // Création d'un élément p et attribution d'une classe à cet élément
//      // et je lui donne un contenu de texte
//      // Je greffe ce paragraphe à ma div
//      if (noP) {
//        console.log("réponse juste + je suis dans le if noP")
//       p.setAttribute('class', 'rightRep')
//       p.textContent= "Bravo, bonne réponse !"
//       divRightOrWrongAnswer.appendChild(p);
//       noP = false
//       displayRandomCountry(); 

//      } else {
//       console.log("reponse juste + il y a déjà un P")
//       // p.remove();
//       noP = true
//       p.setAttribute('class', 'rightRep')
//       p.textContent= "Bravo, bonne réponse !"
//       divRightOrWrongAnswer.appendChild(p);
//       displayRandomCountry();
//      }
//       return true;
      
//     } else {
//       //(si réponse fausse)
//       if (noP) {
//       console.log('else = réponse fausse mais pas de p, donc if (noP)')
//       // p = document.createElement("p")
//       p.setAttribute('class', 'wrongRep')
//       p.textContent= "Faux! Cherche encore !"
//       divRightOrWrongAnswer.appendChild(p)
//       noP = false;

//       return false;
//     } else {
//       console.log("else = réponse fausse + 2éme if donc il y a déjà un p")
//       // p.remove();
//       noP = true;
//       p.setAttribute('class', 'wrongRep')
//       p.textContent= "Faux! Cherche encore !"
//       divRightOrWrongAnswer.appendChild(p);
//     }
//   }
// }
  start.addEventListener('click', displayRandomCountry);

  function displayRandomCountry(e) {
    
    if (check) {
      randCountry = tabCountries[Math.floor(Math.random() * tabCountries.length)];
      console.log("le pays aléatoire est : " + randCountry);

      h3 = document.createElement("h3");
      h3.textContent = "Placez le pays suivant sur la carte : " + randCountry;
      divBtnAndCountry.appendChild(h3);
      check = false;
    } else {
      h3.remove();
      check = true;
      displayRandomCountry();
      }
      return randCountry;
      return check;
  }
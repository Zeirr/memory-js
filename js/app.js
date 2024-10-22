import { flattenAndShuffle } from "./function.js";

//   // Initialisation d'un tableau 4x5

let tableJeu = [
  ["img/1.jpg", "img/1.jpg", "img/2.jpg", "img/2.jpg", "img/3.jpg"],
  ["img/9.jpg", "img/8.jpg", "img/6.jpg", "img/5.jpg", "img/3.jpg"],
  ["img/10.jpg", "img/8.jpg", "img/7.jpg", "img/5.jpg", "img/4.jpg"],
  ["img/10.jpg", "img/9.jpg", "img/7.jpg", "img/6.jpg", "img/4.jpg"],
];
const gridContainer = document.getElementById("cadre-memory");
function affichagePlateau() {
  // Vider le contenu précédent
  gridContainer.innerHTML = "";

  //parcourir le tableau ligne par ligne
  const imagesMelangers = flattenAndShuffle(tableJeu);

  //parcourir chaque élément de la ligne (image)

  imagesMelangers.forEach((imagePath) => {
    let imgElement = document.createElement("img");
    imgElement.src = "img/dos.jpg";
    imgElement.alt = "Image de jeu";
    imgElement.className = "card";
    imgElement.style.backgroundImage = imagePath;
    imgElement.setAttribute("data-image", imagePath);
    gridContainer.appendChild(imgElement); // Ajouter l'image dans le grid
  });
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("play").addEventListener("click", affichagePlateau);
});
let count = 0;
// Add event listener to grid
gridContainer.addEventListener("click", function (event) {
  // The event target is our clicked item
  
  let clicked = event.target;

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (clicked.nodeName === "SECTION") {
    return;
  }

  if (count < 2) {
    count++;
    // Add selected class

    clicked.classList.add("selected");

    
  }
 
});

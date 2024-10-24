import { flattenAndShuffle } from "./function.js";

window.onload = init;

function init() {
  //   // Initialisation d'un tableau 4x5
  let firstGuess = "";
  let countMatch = 0;
  let secondGuess = "";
  let count = 0;
  let previousTarget = null;
  let delay = 1200;
  let tableJeu = [];

  switch (localStorage.getItem("type-memory")) {
    case "Dinosaures":
      switch (localStorage.getItem("taille")) {
        case "4x3":
          tableJeu = [
            ["img/1.jpg", "img/1.jpg", "img/2.jpg", "img/2.jpg", "img/3.jpg"],
            ["img/5.jpg", "img/5.jpg", "img/4.jpg", "img/4.jpg", "img/3.jpg"],
            ["img/6.jpg", "img/6.jpg"],
          ];
          break;
        case "4x5":
          tableJeu = [
            ["img/1.jpg", "img/1.jpg", "img/2.jpg", "img/2.jpg", "img/3.jpg"],
            ["img/9.jpg", "img/8.jpg", "img/6.jpg", "img/5.jpg", "img/3.jpg"],
            ["img/10.jpg", "img/8.jpg", "img/7.jpg", "img/5.jpg", "img/4.jpg"],
            ["img/10.jpg", "img/9.jpg", "img/7.jpg", "img/6.jpg", "img/4.jpg"],
          ];
          break;
      }
      break;
    case "animaux":
      switch (localStorage.getItem("taille")) {
        case "4x3":
          tableJeu = [
            [
              "img/a1.jpg",
              "img/a1.jpg",
              "img/a2.jpg",
              "img/a2.jpg",
              "img/a3.jpg",
            ],
            [
              "img/a5.jpg",
              "img/a5.jpg",
              "img/a4.jpg",
              "img/a4.jpg",
              "img/a3.jpg",
            ],
            ["img/a6.jpg", "img/a6.jpg"],
          ];
          break;
        case "4x5":
          tableJeu = [
            [
              "img/a1.jpg",
              "img/a1.jpg",
              "img/a2.jpg",
              "img/a2.jpg",
              "img/a3.jpg",
            ],
            [
              "img/a9.jpg",
              "img/a8.jpg",
              "img/a6.jpg",
              "img/a5.jpg",
              "img/a3.jpg",
            ],
            [
              "img/a10.jpg",
              "img/a8.jpg",
              "img/a7.jpg",
              "img/a5.jpg",
              "img/a4.jpg",
            ],
            [
              "img/a10.jpg",
              "img/a9.jpg",
              "img/a7.jpg",
              "img/a6.jpg",
              "img/a4.jpg",
            ],
          ];
          break;
      }
      break;
  }

  const gridContainer = document.getElementById("cadre-memory");
  affichagePlateau();
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
  // document.addEventListener("DOMContentLoaded", function () {
  //   affichagePlateau();
  // });
  document.addEventListener("keydown", function (event) {
    // Vérifie si la touche enfoncée est la barre espace
    if (event.code === "Space") {
      event.preventDefault(); // Empêche l'action par défaut (ex: le défilement)
      console.log("Barre d'espace appuyée !");
      // Appelle une fonction ou exécute une action ici
      affichagePlateau();
    }
  });

  const match = () => {
    let selected = document.querySelectorAll(".selected");

    selected.forEach((imgElement) => {
      imgElement.classList.add("match");
      countMatch++;
      if (localStorage.getItem("taille") === "4x5") {
        if (countMatch == 20) {
          alert("Cest gagné !");
        }
      }
      if (localStorage.getItem("taille") === "4x3") {
        if (countMatch == 12) {
          alert("Cest gagné !");
        }
      }
    });
  };

  const resetGuesses = () => {
    firstGuess = "";
    secondGuess = "";
    count = 0;

    let selected = document.querySelectorAll(".selected");
    selected.forEach((imgElement) => {
      imgElement.classList.remove("selected");
      imgElement.src = "img/dos.jpg";
    });
  };
  const resetGuessesAfterMatch = () => {
    firstGuess = "";
    secondGuess = "";
    count = 0;

    let selected = document.querySelectorAll(".selected");
    selected.forEach((imgElement) => {
      imgElement.classList.remove("selected");
    });
  };

  // Add event listener to grid
  gridContainer.addEventListener("click", function (event) {
    // The event target is our clicked item

    let clicked = event.target;

    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.nodeName === "SECTION" || clicked === previousTarget) {
      return;
    }

    if (count < 2) {
      count++;
      // Add selected class
      if (count === 1) {
        // Assign first guess
        firstGuess = clicked.dataset.image;
        clicked.classList.add("selected");
        clicked.src = clicked.dataset.image;
      } else {
        // Assign second guess
        secondGuess = clicked.dataset.image;
        clicked.classList.add("selected");
        clicked.src = clicked.dataset.image;
      }
      // If both guesses are not empty...
      if (firstGuess !== "" && secondGuess !== "") {
        // and the first guess matches the second match...
        if (firstGuess === secondGuess) {
          // run the match function
          setTimeout(match, delay);
          setTimeout(resetGuessesAfterMatch, delay);
        } else {
          setTimeout(resetGuesses, delay);
        }
      }
      previousTarget = clicked;
    }
  });
}

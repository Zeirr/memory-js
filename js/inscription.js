import {
  validateEmail,
  validatePassword,
  validateUser,
  faiblePasswords,
  moyenPasswords,
  fortPasswords,
} from "./validate.js";

window.onload = init;

function init() {
  // for of

  document
    .getElementById(`signup-form`)
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page refresh;

      const $inputs = this.querySelectorAll("input");

      const user = {};
      let isValid = true;

      $inputs.forEach((input) => {
        switch (input.id) {
          case "username":
            if (validateUser) {
              user.username = input.value;
            } else {
              alert("Nom d'utilisateur doit avoir au moins 3 caractères.");
              isValid = false;
            }

            break;
          case "password":
            if (validatePassword) {
              user.password = input.value;
            } else {
              alert(
                "Le mot de passe doit avoir au moins 8 caractères, incluant une lettre et un chiffre."
              );
              isValid = false;
            }

            break;
          case "email":
            if (validateEmail) {
              user.email = input.value;
            } else {
              alert("L'email doit être valide.");
              isValid = false;
            }
            break;
          default:
            console.error("Erreur de saisie");
            break;
        }
      });
      if (isValid) {
        // Récupérer les utilisateurs existants depuis localStorage
        let users = JSON.parse(localStorage.getItem(`users`)) || [];
        // Vérifier si le nom d'utilisateur ou l'email existe déjà
        const utilisateurExistant = users.find(
          (existingUser) =>
            existingUser.username === user.username ||
            existingUser.email === user.email
        );
        if (utilisateurExistant) {
          alert("Utilisateur ou email déjà existant");
        } else {
          // Ajouter le nouvel utilisateur
          users.push(user);
          // Stocker la liste mise à jour
          localStorage.setItem("users", JSON.stringify(users));
          alert("Inscription réussie, redirection ...");
          setTimeout(() => {
            window.location.href = "connection.html";
          }, 1200);
        }
      } else {
        alert("Erreur de saisie");
      }
    });

  const input = document.getElementById("password");
  input.addEventListener("input", function () {
    let password = input.value;
    let modifBalise = document.getElementById("difficultPassword");
    if (password === "") {
      modifBalise.innerText = "";
      return;
    }
    switch (true) {
      case faiblePasswords(password):
        modifBalise.innerHTML = "Force du mot de passe : Faible";
        break;
      case moyenPasswords(password):
        modifBalise.innerHTML = "Force du mot de passe : Moyen";
        break;
      case fortPasswords(password):
        modifBalise.innerHTML = "Force du mot de passe : Fort";
        break;
    }
  });
}

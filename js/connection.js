import { validateUser, validatePassword } from "./validate.js";

window.onload = init;

function init() {
  // for of

  document
    .getElementById(`connect-form`)
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
            existingUser.password === user.password
        );
        if (utilisateurExistant) {
          
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("email", utilisateurExistant.email);
          alert("Connexion réussie");
          setTimeout(() => {
            window.location.href = "profil.html";
          }, 1200);
        } else {
          alert("Utilisateur inconnue ou mot de pass incorrect");
        }
      } else {
        alert("Erreur de saisie");
      }
    });
}


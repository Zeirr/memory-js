import { validateEmail, validatePassword, validateUser } from "./validate.js";

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
        localStorage.setItem(`users`, JSON.stringify(user));
        alert("Inscription réussie");
      }else{alert("Erreur de saisie");}
    });
}

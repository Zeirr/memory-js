window.onload = init;

function init() {
  let nomProfil = sessionStorage.getItem("username");
  let emailProfil = sessionStorage.getItem("email");
  document.getElementById("nomUtilisateur").innerHTML = nomProfil;
  document.getElementById("emailUtilisateur").innerHTML = emailProfil;

  document.getElementById("enregistrer").addEventListener("click", function () {
    const selectionTailleProfil = document.getElementById("taille");
    const selectionType = document.getElementById("selectMemory");
    const selectionTaille = selectionTailleProfil.value;
    const selectionMemory = selectionType.value;
    localStorage.setItem("taille", selectionTaille);
    localStorage.setItem("type-memory", selectionMemory);
  });
}

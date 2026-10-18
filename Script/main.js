import { sauvegarderCle } from "./storage.js";
const formulaire = document.getElementById("api-key-form");
const champ = document.getElementById("api-key");
const paragraphe = document.getElementById("api-key-status");
    
formulaire.addEventListener("submit",function(event){
    event.preventDefault()//empecher le rechargement;
   const  reponse= champ.value.trim();
    sauvegarderCle(reponse);
    paragraphe.textContent = "Clé enregistrée";// si j'appuye sur enregsitrer j'ai cle enregistrer qui saffiche 


})


import { afficherCartes } from './affichage.js';
import { rechercherAnime, rechercherParId, rechercherParClassement,rechercherParGenres } from './api.js';

// Gestion du formulaire de recherche
const formulaire = document.getElementById('search-form');
const typeRecherche = document.getElementById('search-type');
const champParametre = document.getElementById('search-param');
const erreurFormulaire = document.getElementById('form-error');
const genreField =document.getElementById("genre-fieldset");


formulaire.addEventListener('submit', async (e) => {
  e.preventDefault();               // empêche le rechargement de la page
  erreurFormulaire.textContent = '';

  const type = typeRecherche.value;
  const parametre = champParametre.value.trim();

  // La recherche par genre fait partie de la V2
  if (type === 'genre') {
    erreurFormulaire.textContent = "La recherche par genre n'est pas encore disponible.";
    return;
  }

  // Le formulaire a "novalidate", donc on vérifie nous-mêmes
  if (parametre === '') {
    erreurFormulaire.textContent = 'Veuillez saisir un paramètre.';
    return;
  }

  let resultat;
  if (type === 'title') {
    resultat = await rechercherAnime(parametre);
  } else if (type === 'id') {
    resultat = await rechercherParId(parametre);
  } else if (type === 'ranking') {
    resultat = await rechercherParClassement(parametre);
  }

  afficherCartes(resultat);
  });
  typeRecherche.addEventListener("change",function (){
    if(typeRecherche.value==="genre"){
      genreField.hidden=false;// cela veut dire qu'on le rend visible 
    }
    else{
      genreField.hidden=true;
    }
  });

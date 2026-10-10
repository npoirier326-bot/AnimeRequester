import { afficherCartes } from './affichage.js';
const API_KEY = "18e298dd24msh380f23f01091ad3p125b71jsnb4ac42cc11f8";
const API_HOST = "anime-db.p.rapidapi.com";

//recherche d'anime par nom et gestion d'erreurs//
async function rechercherAnime(nom) {
  const url = `https://anime-db.p.rapidapi.com/anime?search=${nom}&page=1&size=10`;
  try {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST
    }
  });
  if (!response.ok) {
    const erreur = await response.json();
    throw new Error(erreur.message || "Erreur lors de la recherche d'anime");
  }

  const data = await response.json();
  return data;

} catch (error) {
  console.error("Erreur rechercherAnime :", error.message);
  return null;
}
}

//fonction de recherche des anime par leur identifiant et gestion d'erreurs//
async function rechercherParId(id) {
  const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;
  try {
    const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST
    }
  });

  if (!response.ok) {
    const erreur = await response.json();
    throw new Error(erreur.message || "Erreur lors de la recherche par ID");
  }
  

  const data = await response.json();
  return data;

  } catch (error) {
    console.error("Erreur rechercherParId :", error.message);
    return null;
  }
}

//recherche d'anime par leur classement et gestion d'erreurs//
async function rechercherParClassement(rang) {
  const url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${rang}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST
      }
    });

    if (!response.ok) {
      const erreur = await response.json();
      throw new Error(erreur.message || "Erreur lors de la recherche par classement");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Erreur rechercherParClassement :", error.message);
    return null;
  }

}

// Gestion du formulaire de recherche
const formulaire = document.getElementById('search-form');
const typeRecherche = document.getElementById('search-type');
const champParametre = document.getElementById('search-param');
const erreurFormulaire = document.getElementById('form-error');

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
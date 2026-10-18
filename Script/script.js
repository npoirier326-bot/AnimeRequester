// Fichier principal : relie le formulaire, l'API, l'affichage et le thème

import { afficherCartes, effacerCartes } from './affichage.js';
import { rechercherAnime, rechercherParId, rechercherParClassement, rechercherParGenres } from './api.js';
import { lireCle } from './storage.js';
import { initTheme } from './theme.js';

// Active le mode clair/sombre (thème sauvegardé dans sessionStorage)
initTheme();

const formulaire = document.getElementById('search-form');
const typeRecherche = document.getElementById('search-type');
const champParametre = document.getElementById('search-param');
const zoneParametre = document.getElementById('param-field');
const aideParametre = document.getElementById('search-param-help');
const zoneGenres = document.getElementById('genre-fieldset');
const listeGenres = document.getElementById('genre-list');
const erreurFormulaire = document.getElementById('form-error');

const textesParType = {
  title: {
    exemple: 'Ex : Evangelion',
    aide: "Saisissez le titre d'un anime.",
    clavier: 'text'
  },
  id: {
    exemple: 'Ex : 1',
    aide: 'Saisissez un identifiant (nombre entier).',
    clavier: 'numeric'
  },
  ranking: {
    exemple: 'Ex : 1',
    aide: 'Saisissez un classement (nombre entier positif).',
    clavier: 'numeric'
  }
};

// Adapte le formulaire au type de recherche choisi
function mettreAJourFormulaire() {
  const type = typeRecherche.value;

  // Recherche par genre : pas de champ texte, on affiche les cases à cocher
  if (type === 'genre') {
    zoneParametre.hidden = true;
    zoneGenres.hidden = false;
    return;
  }

  // Autres types : champ texte avec le bon exemple
  const textes = textesParType[type];
  champParametre.placeholder = textes.exemple;
  champParametre.inputMode = textes.clavier;   // clavier numérique sur mobile
  aideParametre.textContent = textes.aide;
  zoneParametre.hidden = false;
  zoneGenres.hidden = true;
}

formulaire.addEventListener('submit', async (e) => {
  e.preventDefault();   // empêche le rechargement de la page
  erreurFormulaire.textContent = '';

  // La clé API est obligatoire
  if (!lireCle()) {
    erreurFormulaire.textContent = 'Saisissez votre clé API.';
    return;
  }

  const type = typeRecherche.value;

  // Recherche par genre
  if (type === 'genre') {
    const casesCochees = listeGenres.querySelectorAll('input:checked');
    const genresChoisis = Array.from(casesCochees).map((c) => c.value);

    if (genresChoisis.length === 0) {
      erreurFormulaire.textContent = 'Veuillez cocher au moins un genre.';
      return;
    }

    afficherCartes(await rechercherParGenres(genresChoisis));
    return;
  }

  const parametre = champParametre.value.trim();

  if (parametre === '') {
    erreurFormulaire.textContent = 'Veuillez saisir un paramètre.';
    return;
  }

  if ((type === 'id' || type === 'ranking') && !/^[1-9]\d*$/.test(parametre)) {
    erreurFormulaire.textContent = 'Veuillez saisir un nombre entier positif.';
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

typeRecherche.addEventListener('change', mettreAJourFormulaire);

formulaire.addEventListener('reset', () => {
  effacerCartes();
  erreurFormulaire.textContent = '';
  setTimeout(mettreAJourFormulaire, 0);
});

mettreAJourFormulaire();
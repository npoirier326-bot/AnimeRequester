// Affiche les résultats de recherche sous forme de cartes

const conteneur = document.getElementById('results-list');
const statut = document.getElementById('results-status');
const modele = document.getElementById('card-template');

// Crée une carte à partir du modèle et la remplit avec les infos d'un anime
function creerCarte(anime) {
  const carte = modele.content.cloneNode(true);

  // Titre
  let titre = 'Titre inconnu';
  if (anime.title) {
    titre = anime.title;
  }
  carte.querySelector('.card_title').textContent = titre;

  // Image : on la garde seulement si elle existe
  const image = carte.querySelector('.card_image');
  if (anime.image) {
    image.loading = 'lazy';
    image.src = anime.image;
    image.alt = 'Affiche de ' + titre;
    // Si le lien de l'image est cassé, on retire l'image de la carte
    image.addEventListener('error', () => {
      image.remove();
    });
  } else {
    image.remove();
  }

  // Synopsis
  let synopsis = 'N/A';
  if (anime.synopsis) {
    synopsis = anime.synopsis;
  }
  carte.querySelector('.card_synopsis-text').textContent = synopsis;

  // Genres (tableau transformé en texte : "Action, Drama")
  let genres = 'N/A';
  if (anime.genres && anime.genres.length > 0) {
    genres = anime.genres.join(', ');
  }
  carte.querySelector('.card_genres-text').textContent = genres;

  // Classement
  let classement = 'N/A';
  if (anime.ranking) {
    classement = anime.ranking;
  }
  carte.querySelector('.card_ranking-text').textContent = classement;

  // Nombre d'épisodes
  let episodes = 'N/A';
  if (anime.episodes) {
    episodes = anime.episodes;
  }
  carte.querySelector('.card_episodes-text').textContent = episodes;

  return carte;
}

// Affiche le résultat d'une des 3 fonctions de recherche
export function afficherCartes(resultat) {
  // On efface les anciennes cartes
  conteneur.innerHTML = '';

  // Erreur côté API (null) ou rien reçu (undefined)
  if (!resultat) {
    statut.textContent = 'Une erreur est survenue, veuillez réessayer.';
    return;
  }

  // On met le résultat sous forme de liste
  let animes = [];
  if (resultat.data) {
    animes = resultat.data;   // recherche par titre ou genre : la liste est dans "data"
  } else {
    animes = [resultat];      // recherche par id ou classement : un seul anime
  }

  // Aucun résultat
  if (animes.length === 0) {
    statut.textContent = 'Aucun résultat trouvé.';
    return;
  }

  // On affiche une carte par anime
  statut.textContent = animes.length + ' résultat(s) trouvé(s).';
  animes.forEach((anime) => {
    const carte = creerCarte(anime);
    conteneur.appendChild(carte);
  });
}
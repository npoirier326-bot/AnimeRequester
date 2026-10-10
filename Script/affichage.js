const conteneur = document.getElementById('results-list');
const statut = document.getElementById('results-status');
const modele = document.getElementById('card-template');

function creerCarte(anime) {
  const carte = modele.content.cloneNode(true);
 
  let titre = 'Titre inconnu';
  if (anime.title) {
    titre = anime.title;
  }
  carte.querySelector('.card_title').textContent = titre;

  const image = carte.querySelector('.card_image');
  if (anime.image) {
    image.src = anime.image;
    image.alt = 'Affiche de ' + titre;
  } else {
    image.remove();
  }

  let synopsis = 'N/A';
  if (anime.synopsis) {
    synopsis = anime.synopsis;
  }
  carte.querySelector('.card_synopsis-text').textContent = synopsis;

  let genres = 'N/A';
  if (anime.genres && anime.genres.length > 0) {
    genres = anime.genres.join(', ');
  }
  carte.querySelector('.card_genres-text').textContent = genres;

  let classement = 'N/A';
  if (anime.ranking) {
    classement = anime.ranking;
  }
  carte.querySelector('.card_ranking-text').textContent = classement;

  let episodes = 'N/A';
  if (anime.episodes) {
    episodes = anime.episodes;
  }
  carte.querySelector('.card_episodes-text').textContent = episodes;

  return carte;
}
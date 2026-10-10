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
}
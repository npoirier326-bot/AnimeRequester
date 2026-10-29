# Anime Requester

Application web qui permet de rechercher des animes dans une base de données (API Tenrai) et d'afficher les résultats sous forme de cartes.

Site en ligne : https://npoirier326-bot.github.io/AnimeRequester/

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla JS, ES6, modules)
- [API Tenrai](https://api.tenrai.org/documentation) (catalogue MyAnimeList, format Jikan v4, sans clé API)

## Fonctionnalités

### Version 1

- Recherche par **titre**, par **identifiant** ou par **classement**
- 10 résultats maximum pour une recherche par titre, un seul pour un identifiant ou un classement
- Résultats affichés sous forme de cartes : titre, image (si disponible), synopsis, genres, classement et nombre d'épisodes
- Bouton pour lancer la recherche et bouton pour réinitialiser le formulaire
- Gestion des erreurs (aucun résultat, paramètre vide, erreur de l'API)
- Accessibilité : champs avec labels, lien d'évitement, résultats annoncés aux lecteurs d'écran (`aria-live`), navigation au clavier
- Affichage responsive (grille de cartes qui s'adapte à la taille de l'écran)

### Version 2

- Recherche par **genre** : un ou plusieurs genres à cocher parmi 13 propositions. Les animes affichés ont **tous** les genres cochés.
- **Mode clair / sombre** : le choix est mémorisé dans le `sessionStorage` (le thème du système est utilisé par défaut)
## Changement d'API

Le projet utilisait d'abord l'API Anime DB (RapidAPI), qui n'est plus disponible. Comme l'a indiqué l'enseignant, nous utilisons maintenant l'API Tenrai, qui reprend le format de l'API Jikan. Elle n'a pas besoin de clé API : la saisie de la clé, prévue pour RapidAPI, a donc été supprimée.

L'API est en version bêta et son accès public est limité à 120 requêtes par minute. En cas d'erreur, il peut s'agir d'une indisponibilité temporaire.

## Structure du projet

```
AnimeRequester/
├── index.html           # Page principale
├── CSS/
│   └── style.css        # Style du site (thèmes clair et sombre)
├── Script/
│   ├── script.js        # Gestion du formulaire de recherche (point d'entrée)
│   ├── api.js           # Fonctions de requête vers l'API
│   ├── affichage.js     # Création et affichage des cartes
│   └── theme.js          # Mode clair / sombre
└── README.md
```

Le code JavaScript est découpé en modules, chacun avec un rôle précis :

- `api.js` récupère les données depuis l'API
- `affichage.js` transforme ces données en cartes
- `script.js` relie le formulaire, l'API et l'affichage
- `theme.js` gère le mode clair / sombre

## Lancer le projet en local

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/npoirier326-bot/AnimeRequester.git
   ```
2. Ouvrir le dossier dans VS Code.
3. Ouvrir `index.html` avec l'extension **Live Server** (clic droit « Open with Live Server »).

> Le projet utilise des modules JavaScript : il doit être ouvert via un serveur (comme Live Server), pas en double-cliquant sur `index.html`.

## Organisation du travail

- Un dépôt GitHub public, une branche par fonctionnalité (`API`, `formulaire`, `affichageCarte`, `V2`,`dark-mode`, `tenrai`) fusionnée dans `main` avec des Pull Requests
- Les tâches sont suivies avec les **issues** et un **tableau Kanban** GitHub
- Messages de commit au format `feat:`, `fix:`, `docs:`, `refactor:`

## Auteurs

Projet de groupe réalisé dans le cadre du BUT Informatique (R3.01, IUT de Caen).

- Nolan Poirier ([@npoirier326-bot](https://github.com/npoirier326-bot))
- Issam Doumi ([@issam](https://github.com/issam))
- Hamza Ouasri ([@ouasrihamza](https://github.com/ouasrihamza))
- Marwane Nairi ([@renox-marwane](https://github.com/renox-marwane))

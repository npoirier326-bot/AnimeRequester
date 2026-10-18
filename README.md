# Anime Requester

Application web qui permet de rechercher des animes dans une base de données (API Anime DB) et d'afficher les résultats sous forme de cartes.

Site en ligne : https://npoirier326-bot.github.io/AnimeRequester/

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla JS, ES6, modules)
- [API Anime DB](https://rapidapi.com/brianrofiq/api/anime-db) via RapidAPI

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

- Recherche par **genre** : un ou plusieurs genres à cocher parmi 13 propositions
- **Mode clair / sombre** : le choix est mémorisé dans le `sessionStorage` (le thème du système est utilisé par défaut)
- **Clé API saisie par l'utilisateur** sur la page et mémorisée dans le `sessionStorage` : elle n'est jamais écrite dans le code et disparaît à la fermeture de l'onglet
- Message d'erreur si la clé API n'a pas été saisie

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
│   ├── storage.js       # Lecture et sauvegarde de la clé API (sessionStorage)
│   ├── theme.js         # Mode clair / sombre
│   └── main.js          # Enregistrement de la clé API saisie
└── README.md
```

Le code JavaScript est découpé en modules, chacun avec un rôle précis :

- `api.js` récupère les données depuis l'API
- `affichage.js` transforme ces données en cartes
- `script.js` relie le formulaire, l'API et l'affichage
- `storage.js` et `main.js` gèrent la clé API
- `theme.js` gère le mode clair / sombre

## Lancer le projet en local

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/npoirier326-bot/AnimeRequester.git
   ```
2. Ouvrir le dossier dans VS Code.
3. Ouvrir `index.html` avec l'extension **Live Server** (clic droit « Open with Live Server »).
4. Saisir sa clé API dans la page (voir la section suivante).

> Le projet utilise des modules JavaScript : il doit être ouvert via un serveur (comme Live Server), pas en double-cliquant sur `index.html`.

## Clé API

Le site a besoin d'une clé RapidAPI personnelle (gratuite) :

1. Créer un compte sur [RapidAPI](https://rapidapi.com/auth/sign-up)
2. Rechercher **Anime DB** et s'abonner au plan gratuit
3. Copier la valeur de `x-rapidapi-key`
4. La coller dans le champ « Clé API » en haut de la page, puis cliquer sur « Enregistrer la clé »

La clé est conservée uniquement le temps de la session : fermer l'onglet l'efface. Elle n'est jamais enregistrée dans le code du projet.

> Le plan gratuit de RapidAPI limite le nombre de requêtes par jour. Si le site affiche une erreur après de nombreuses recherches, le quota du jour est probablement atteint.

## Organisation du travail

- Un dépôt GitHub public, une branche par fonctionnalité (`API`, `formulaire`, `affichageCarte`, `V2`) fusionnée dans `main` avec des Pull Requests
- Les tâches sont suivies avec les **issues** et un **tableau Kanban** GitHub
- Messages de commit au format `feat:`, `fix:`, `docs:`, `refactor:`

## Auteurs

Projet de groupe réalisé dans le cadre du BUT Informatique (R3.01, IUT de Caen).

- Nolan Poirier ([@npoirier326-bot](https://github.com/npoirier326-bot))
- Issam Doumi ([@issam](https://github.com/issam))
- Hamza Ouasri ([@ouasrihamza](https://github.com/ouasrihamza))
- Marwane Nairi ([@renox-marwane](https://github.com/renox-marwane))

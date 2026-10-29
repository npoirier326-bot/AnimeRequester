import { lireCle } from "./storage.js";


//recherche d'anime par nom et gestion d'erreurs//
export async function rechercherAnime(nom) {
  const url = `https://api.tenrai.org/v1/anime?q=${encodeURIComponent(nom)}&limit=10`;
  try {
    const response = await fetch(url, {
      method: "GET",
     
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
export async function rechercherParId(id) {
  const url = `https://api.tenrai.org/v1/anime/${encodeURIComponent(id)}`;
  try {
    const response = await fetch(url, {
      method: "GET",
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
export async function rechercherParClassement(rang) {
  const url = `https://api.tenrai.org/v1/top/anime?limit=1&page=${encodeURIComponent(rang)}`;
  try {
    const response = await fetch(url, {
      method: "GET",
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
const numerosGenres = {
  "Action": 1,
  "Adventure": 2,
  "Comedy": 4,
  "Drama": 8,
  "Fantasy": 10,
  "Horror": 14,
  "Mystery": 7,
  "Romance": 22,
  "Sci-Fi": 24,
  "Slice of Life": 36,
  "Sports": 30,
  "Supernatural": 37,
  "Suspense": 41
};
export async function rechercherParGenres(genres) {
  if (genres.length === 0) {
    return null;
  }
  const liste = genres.map(function (nom){
    return numerosGenres[nom]

  }).join(",")
  const url = `https://api.tenrai.org/v1/anime?genres=${liste}&limit=10`;
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      const erreur = await response.json();
      throw new Error(erreur.message || "Erreur lors de la recherche par genres");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Erreur rechercherParGenres :", error.message);
    return null;
  }

}
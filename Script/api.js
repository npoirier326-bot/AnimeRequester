import { lireCle } from "./storage.js";
const API_HOST = "anime-db.p.rapidapi.com";

//recherche d'anime par nom et gestion d'erreurs//
export async function rechercherAnime(nom) {
  const url = `https://anime-db.p.rapidapi.com/anime?search=${encodeURIComponent(nom)}&page=1&size=10`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": lireCle(),
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
export async function rechercherParId(id) {
  const url = `https://anime-db.p.rapidapi.com/anime/by-id/${encodeURIComponent(id)}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": lireCle(),
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
export async function rechercherParClassement(rang) {
  const url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${encodeURIComponent(rang)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": lireCle(),
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
import { lireCle } from "./storage.js";


//recherche d'anime par nom et gestion d'erreurs//
export async function rechercherAnime(nom) {
  const url = `https://api.tenrai.org/v1/anime?q=${encodeURIComponent(nom)}&limit=10`;
  try {
    const response = await fetch(url, {
      method: "GET",
     
    });
    if (!response.ok) {
      throw new Error("Erreur " + response.status);
      
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
export async function rechercherParGenres(genres) {
  if (genres.length === 0) {
    return null;
  }
  const liste = genres.join(",")
  const url = `https://anime-db.p.rapidapi.com/anime?genres=${encodeURIComponent(liste)}&page=1&size=10`;
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
      throw new Error(erreur.message || "Erreur lors de la recherche par genres");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Erreur rechercherParGenres :", error.message);
    return null;
  }

}
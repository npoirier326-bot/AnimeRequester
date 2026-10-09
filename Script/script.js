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
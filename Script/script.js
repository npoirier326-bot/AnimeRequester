const API_KEY = "18e298dd24msh380f23f01091ad3p125b71jsnb4ac42cc11f8";
const API_HOST = "anime-db.p.rapidapi.com";

async function rechercherAnime(nom) {
  const url = `https://anime-db.p.rapidapi.com/anime?search=${nom}&page=1&size=10`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST
    }
  });
}
async function rechercherParId(id) {
  const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;
    const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST
    }
  });
}

async function rechercherParClassement(rang) {
  const url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${rang}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST
      }
    });
}
// Gère le mode clair/sombre et sa sauvegarde dans sessionStorage

const CLE = 'theme';
const bouton = document.getElementById('theme-toggle');
const icone = document.getElementById('theme-toggle-icon');

// Applique le thème sur la page et met à jour le bouton
function appliquerTheme(theme) {
  const sombre = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  bouton.setAttribute('aria-pressed', String(sombre));
  icone.textContent = sombre ? '☀' : '☾';
}

// Au chargement : valeur sauvegardée, sinon préférence du système
export function initTheme() {
  const sauvegarde = sessionStorage.getItem(CLE);
  const prefereSombre = window.matchMedia('(prefers-color-scheme: dark)').matches;
  appliquerTheme(sauvegarde || (prefereSombre ? 'dark' : 'light'));

  bouton.addEventListener('click', () => {
    const nouveau = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    sessionStorage.setItem(CLE, nouveau);
    appliquerTheme(nouveau);
  });
}
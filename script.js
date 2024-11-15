// Vérifie si un compteur existe dans le LocalStorage
let visitCount = localStorage.getItem('visitCount');

if (visitCount) {
    // Incrémente le compteur si déjà présent
    visitCount = parseInt(visitCount) + 1;
} else {
    // Initialise le compteur à 1 si aucune visite précédente
    visitCount = 1;
}

// Sauvegarde le compteur mis à jour dans le LocalStorage
localStorage.setItem('visitCount', visitCount);

// Met à jour le contenu du site avec le compteur
document.getElementById('visit-count').textContent = visitCount;

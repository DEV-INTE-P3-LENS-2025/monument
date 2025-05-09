// Données des monuments
const monuments = {
    1: {
        name: "Le musée du Louvre",
        address: "Rue de Rivoli, 75001 Paris",
        description: "Le musée du Louvre est le plus grand musée d'art et d'antiquités au monde. Situé au cœur de Paris, il abrite des œuvres emblématiques comme la Joconde et la Vénus de Milo. Ce palais historique, ancienne résidence des rois de France, est aujourd'hui un lieu incontournable de la culture mondiale."
    },
    2: {
        name: "La tour Eiffel",
        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
        description: "Symbole de Paris et de la France, la tour Eiffel est une structure de fer puddlé de 324 mètres de hauteur. Construite par Gustave Eiffel pour l'Exposition universelle de 1889, elle offre une vue panoramique exceptionnelle sur la capitale et accueille chaque année des millions de visiteurs."
    },
    3: {
        name: "L'arc de triomphe",
        address: "Place Charles de Gaulle, 75008 Paris",
        description: "L'arc de triomphe de l'Étoile est un monument emblématique de Paris, situé au centre de la place Charles de Gaulle. Commandé par Napoléon Ier, il célèbre les victoires de l'armée française et abrite la tombe du Soldat inconnu depuis 1920."
    },
    4: {
        name: "La cathédrale Notre-Dame de Paris",
        address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris",
        description: "Notre-Dame de Paris est l'une des plus grandes cathédrales gothiques au monde. Construite entre 1163 et 1345, elle est célèbre pour son architecture, ses vitraux et ses gargouilles. Bien que partiellement endommagée par l'incendie de 2019, elle reste un symbole majeur de Paris."
    },
    5: {
        name: "Le sacré-cœur de Montmartre",
        address: "35 Rue du Chevalier de la Barre, 75018 Paris",
        description: "La basilique du Sacré-Cœur, située au sommet de la butte Montmartre, est un édifice religieux majeur de Paris. Construite entre 1875 et 1914, elle offre une vue panoramique sur la ville et est connue pour son architecture romano-byzantine distinctive et ses dômes blancs."
    }
};

// Sélectionner tous les boutons et images
const buttons = document.querySelectorAll('.btn-monument');
const images = document.querySelectorAll('img');
const description = document.getElementById('description');
const monumentName = document.getElementById('monument-name');
const monumentAddress = document.getElementById('monument-address');
const monumentText = document.getElementById('monument-text');
const mapContainer = document.getElementById('map-container');

// Fonction pour afficher la description et la carte
function showDescription(monumentId) {
    const monument = monuments[monumentId];
    monumentName.textContent = monument.name;
    monumentAddress.textContent = monument.address;
    monumentText.textContent = monument.description;
    
    // Afficher la carte correspondante
    const map = document.getElementById(`map${monumentId}`);
    mapContainer.innerHTML = '';
    mapContainer.appendChild(map.cloneNode(true));
    
    description.style.display = 'block';
}

// Ajouter les écouteurs d'événements pour les boutons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const monumentId = button.getAttribute('data-monument');
        showDescription(monumentId);
    });
});

// Ajouter les écouteurs d'événements pour les images
images.forEach(image => {
    image.addEventListener('click', () => {
        const monumentId = image.getAttribute('data-monument');
        showDescription(monumentId);
    });
});

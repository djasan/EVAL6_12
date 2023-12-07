const headerImages = [
    '/assets/css/background.jpg',
    '/assets/css/background1.jpg',
    '/assets/css/background2.jpg'
];

let currentImageIndex = 0;

function changeHeaderImage() {
    // Changez l'image du header
    document.getElementById('header').style.backgroundImage = `url('${headerImages[currentImageIndex]}')`;

     // Passez à l'image suivante
     currentImageIndex = (currentImageIndex + 1) % headerImages.length;

     // Ajoutez un console.log pour afficher l'index actuel à chaque changement d'image
     console.log('Image index:', currentImageIndex);
 }
 
 // Affichez d'abord les images du header après que le DOM soit chargé
 document.addEventListener('DOMContentLoaded', () => {
     for (let i = 0; i < headerImages.length; i++) {
         setTimeout(() => {
             changeHeaderImage();
            // console.log('Timeout executed:', i);
         }, i * 5000); // Changez toutes les 5 secondes (ajustez selon vos besoins)
     }
 
     // Changez l'image toutes les 15 secondes une fois que les images du header sont affichées
     setInterval(() => {
         changeHeaderImage();
        // console.log('Interval executed');
     }, 15000);
 });
 document.getElementById('menu-toggle').addEventListener('click', function () {
    let navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

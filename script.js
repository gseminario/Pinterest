// Obtener referencias a los elementos necesarios
const searchButton = document.getElementById('search-button');
const searchInput = document.querySelector('#search input');
const cardContainer = document.querySelector('.card-container');

// Escuchar el evento click del botón de búsqueda
searchButton.addEventListener('click', function() {
  // Obtener el valor de búsqueda del input
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Filtrar las imágenes según el término de búsqueda
  const filteredCards = Array.from(cardContainer.getElementsByClassName('card')).filter(function(card) {
    // Obtener el nombre de la imagen asociada a la tarjeta
    const imageName = card.querySelector('img').getAttribute('alt').toLowerCase();
    // Verificar si el término de búsqueda está presente en el nombre de la imagen
    return imageName.includes(searchTerm);
  });

  // Mostrar solo las tarjetas que coinciden con el término de búsqueda y ocultar las demás
  Array.from(cardContainer.getElementsByClassName('card')).forEach(function(card) {
    card.style.display = 'none';
  });
  filteredCards.forEach(function(card) {
    card.style.display = 'block';
  });
});

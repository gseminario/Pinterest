// Funcionalidad del menú burger
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');
navbarToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
});

// Funcionalidad del buscador
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  const searchInput = document.querySelector('#search input');
  const searchValue = searchInput.value.trim();
  if (searchValue !== '') {
    alert('Realizar búsqueda: ' + searchValue);
    // Aquí puedes agregar la lógica para realizar la búsqueda real
  }
});

// Funcionalidad de los iconos
const notificationsIcon = document.getElementById('notifications');
notificationsIcon.addEventListener('click', function() {
  alert('Mostrar notificaciones');
  // Aquí puedes agregar la lógica para mostrar las notificaciones
});

const messageIcon = document.getElementById('message');
messageIcon.addEventListener('click', function() {
  alert('Abrir mensajes');
  // Aquí puedes agregar la lógica para abrir los mensajes
});

const profileIcon = document.getElementById('profile-img');
profileIcon.addEventListener('click', function() {
  alert('Abrir perfil');
  // Aquí puedes agregar la lógica para abrir el perfil del usuario
});

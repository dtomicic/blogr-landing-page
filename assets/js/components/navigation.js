var togglerContainer = document.getElementById('togglerContainer');
var menuItems = document.getElementById('menuItems');
var connectBtn = document.getElementById('connectBtn');
var connectItems = document.getElementById('connectItems');

togglerContainer.addEventListener('click', function(){
  menuItems.classList.toggle('show');
  togglerContainer.classList.toggle('opened');
});

connectBtn.addEventListener('click', function(){
  connectItems.classList.toggle('show');
  menuItems.classList.toggle('connectOpened');
});

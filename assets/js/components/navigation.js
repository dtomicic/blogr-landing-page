var togglerContainer = document.querySelector('#togglerContainer')
var hamburger = document.getElementById('hamburger-icon');
var closeicon = document.getElementById('close-icon');
var menuitems = document.getElementById('menuItems');
var connectbtn = document.getElementById('connectBtn');
var connectitems = document.getElementById('connectItems');
var arrow = document.getElementById('arrow');

togglerContainer.addEventListener('click', function(){
  togglerContainer.classList.toggle('show');
  if (togglerContainer.classList.contains('show')) {
    hamburger.classList.toggle('hidden');
    closeicon.classList.toggle('show');
    menuitems.classList.toggle('show');
  }else {
    hamburger.classList.toggle('hidden');
    closeicon.classList.toggle('show');
    menuitems.classList.toggle('show');
  }
});

connectbtn.addEventListener('click', function(){
  connectitems.classList.toggle('show');
  arrow.classList.toggle('rotate');
});

var hamburger = document.getElementById('hamburger-icon');
var closeicon = document.getElementById('close-icon');
var menuitems = document.getElementById('menuitems');
var connectbtn = document.getElementById('connectbtn');
var connectitems = document.getElementById('connectitems');
var arrow = document.getElementById('arrow');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hidden');
  closeicon.classList.toggle('show');
  menuitems.classList.toggle('show');
});

closeicon.addEventListener('click', function(){
  menuitems.classList.toggle('show');
  closeicon.classList.toggle('show');
  hamburger.classList.toggle('hidden');
});

connectbtn.addEventListener('click', function(){
  connectitems.classList.toggle('show');
  arrow.classList.toggle('rotate');
});

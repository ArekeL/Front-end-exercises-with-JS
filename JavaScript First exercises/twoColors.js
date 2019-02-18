// Pobranie elementow

var firstDiv = document.querySelector('.s1');
var secondDiv = document.querySelector('.s2');

//Funkcja

function changeColor() {
  // firstDiv.classList.toggle('red');
  // secondDiv.classList.toggle('red');

  // bonus do zadania

  this.classList.toggle('red');
}


// Ustawienie oczekiwania

firstDiv.addEventListener('click', changeColor);
secondDiv.addEventListener('click', changeColor);
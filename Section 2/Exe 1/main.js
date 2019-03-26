const squere = document.createElement('div');
document.body.appendChild(squere);

let grow = true;

let size = 10;

squere.style.width = size + 'px';
squere.style.height = size + 'px';

//Maksymalna wielkosc kwadratu
//window.inerWidth * 0.5

window.addEventListener('scroll', function () {
  if (size >= window.innerWidth / 2) {
    grow = !grow;
  } else if (size <= 5) {
    grow = true;
  }

  if (grow == true) {
    size += 5;
    squere.style.width = size + 'px';
    squere.style.height = size + 'px';
  } else {
    size -= 5;
    squere.style.width = size + 'px';
    squere.style.height = size + 'px';
  }
})
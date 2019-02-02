  // parametry główne. Za pomocą zmiennych stwórz początkową wartość rotate (zero) i wartość o którą będziesz zmieniał stopnie (o 10 stopnii).


  // pobieramy elementy - pobierz przycisk i div


  // podpinamy nasłuchiwanie i umeiszczamy w nim funkcje anonimową. Pamiętaj zmieniamy własciwość transform. Za każdym razie obrót zwiększa się od 10 deg. 


  //Bonus dodaj właściwość transition dla div określoną na .5s.

  const btn = document.querySelector('button')
  const div = document.querySelector('div')

  let rotatePosition = 0;
  const rotateDeg = 15;





  btn.addEventListener('click', function () {
    rotatePosition += rotateDeg;
    div.style.transform = 'rotate(' + rotatePosition + 'deg)';
    // First option for transition
    // div.style.transition = '0.7s';

    // Second option for transition
    div.classList.add('animation');
  });
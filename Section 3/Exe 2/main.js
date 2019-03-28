let size = 10;
let orderElement = 1;


const init = () => {
  const btn = document.createElement('button');
  btn.textContent = '10 elements';
  btn.style.fontSize = '20px';
  document.body.appendChild(btn)
  const ulElement = document.createElement('ul');
  document.body.appendChild(ulElement);

  btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {
  console.log('Dziala function 2');

}

init()
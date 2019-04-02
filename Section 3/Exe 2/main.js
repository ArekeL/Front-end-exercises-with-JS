let size = 10;
let orderElement = 1;


const init = () => {
  const btn = document.createElement('button');
  const btnReset = document.createElement('button');
  btn.textContent = '10 elements';
  btnReset.textContent = 'Reset';
  btn.style.fontSize = '20px';
  btnReset.style.fontSize = '20px';
  document.body.appendChild(btn)
  document.body.appendChild(btnReset)
  const ulElement = document.createElement('ul');
  ulElement.style.listStyle = 'none'
  document.body.appendChild(ulElement);

  btn.addEventListener('click', createLiElements);
  btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.textContent = `Element nr ${orderElement++}`;
    li.style.fontSize = `${size++}px`;
    document.querySelector('ul').appendChild(li);
  }

}

const cleanList = () => {
  document.querySelector('ul').textContent = '';
  size = 10;
  orderElement = 1;
}

init()
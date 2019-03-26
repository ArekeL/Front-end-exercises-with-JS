const colorLine = document.createElement('div');
document.body.appendChild(colorLine);

let grow = true;

let widthSize = 100;
let heightSize = 5;

document.body.style.height = 10000 + 'px';

colorLine.style.width = widthSize + 'vw';
colorLine.style.height = heightSize + 'px';
colorLine.style.backgroundColor = 'green';
colorLine.style.left = '0';
colorLine.style.top = '0';
colorLine.style.position = 'fixed';

function changeHeight() {
  if (heightSize >= window.innerHeight / 2) {
    grow = !grow;
  } else if (heightSize <= 0) {
    grow = true;
  }

  if (grow == true) {
    heightSize += 5
    colorLine.style.height = heightSize + 'px';
    colorLine.style.backgroundColor = 'green';
  } else {
    heightSize -= 5;
    colorLine.style.height = heightSize + 'px'
    colorLine.style.backgroundColor = 'red';
  }
}

window.addEventListener('scroll', changeHeight);
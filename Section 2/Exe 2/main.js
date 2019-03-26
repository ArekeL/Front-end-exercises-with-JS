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

const changeHeight = function () {
  if (heightSize >= window.innerHeight / 2) {
    // grow = false;
    grow = !grow;
    colorLine.style.backgroundColor = 'red';
  } else if (heightSize <= 0) {
    // grow = true;
    grow = !grow;
    colorLine.style.backgroundColor = 'green';
  }

  if (grow == true) {
    heightSize += 10
    // colorLine.style.backgroundColor = 'green';
  } else {
    heightSize -= 10;
    // colorLine.style.backgroundColor = 'red';
  }
  colorLine.style.height = heightSize + 'px';
}

window.addEventListener('scroll', changeHeight);
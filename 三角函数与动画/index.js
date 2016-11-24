var img = new Image(); // 创建一个<img>元素
img.src = 'img.svg';

var img2 = new Image(); // 创建一个<img>元素
img2.src = 'img2.svg';


function drawImg(context) {
  var img = new Image(); // 创建一个<img>元素
  img.src = 'img3.jpg';
  context.drawImage(img, 75, 75, 350, 350)
}

function drawImg2(context) {
  var img2 = new Image(); // 创建一个<img>元素
  img2.src = 'img2.svg';
  context.drawImage(img2, 85, 85, 330, 330)
}

function drawCircle(context, d) {
  context.save();
  drawImg2(context)
  context.beginPath(); //路径开始 
  context.moveTo(250, 250);
  context.fillStyle = 'white';
  context.arc(250, 250, 135, (d) * Math.PI / 180, 410 * Math.PI / 180, false);
  context.lineTo(250, 250);
  context.fill();
  context.closePath(); //路径结束
  context.restore()
}
var end = 135;
var speed = 1;
window.onload = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  //drawImg(context);
  (function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas);
    if (end > 405) {
      return
    }
    end += speed;
    drawCircle(context, end)
  }());
}
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let img,img1,angle,angle1;

img1 = new Image();
img1.src = "images/cog1.png";

img = new Image();
img.src = "images/cog.png";

angle1 = -0.1
angle = 0.1;

img.addEventListener('load',()=>{
  setInterval(animate,10)
})

function animate(){
  context.clearRect(0,0,width,height);

  context.save();
  context.translate(300,300);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle += 0.01;

  context.save();
  context.translate(525,475);
  context.rotate(angle1);
  context.drawImage(img1,-150,-150,300,300);
  context.restore();
  angle1 -= 0.02;

  context.save();
  context.translate(750,300);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle += 0.01;
}

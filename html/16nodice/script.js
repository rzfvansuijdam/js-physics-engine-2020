const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let dice,sw,sh,roll_1,roll_2;
dice = {};

dice.image = new Image();
dice.image.src = "images/dice.png";

dice.image.addEventListener('load',()=>{

  sw = dice.image.width/6;
  sh = dice.image.height;
  roll_1 = Math.floor(Math.random()*6);
  roll_2 = Math.floor(Math.random()*6);
  animate();
})

setInterval(animate,10)

function animate(){
 context.drawImage(dice.image,roll_1*sw,0,sw,sh,200,200,sw,sh);
 context.drawImage(dice.image,roll_2*sw,0,sw,sh,400,200,sw,sh);
 console.log(roll_1,roll_2);
}

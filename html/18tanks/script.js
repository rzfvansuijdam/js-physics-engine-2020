const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
// declare namespace

let spriteSheet,sw,sh,greenTank;

spriteSheet = new Image();
spriteSheet.src = "images/tanksheet.png";

greenTank = {};
greenTank.animationArray = [8,7,6,5,4,3,2,1];
greenTank.index = 0;

greenTank.x = 200;
greenTank.y = 200;

greenTank.vx = 0;
greenTank.vy = -10;


greenTank.draw = function(){
  greenTank.sx = greenTank.animationArray[greenTank.index]%8 * 50;
  greenTank.sy = Math.floor(greenTank.animationArray[greenTank.index]/8) * 50;
  context.drawImage(spriteSheet,greenTank.sx,greenTank.sy,45,50,greenTank.x,greenTank.y,45,50)
}

greenTank.update = function(){
  greenTank.x += greenTank.vx;
  greenTank.y += greenTank.vy;
  if(greenTank.y <0){
    greenTank.y = height;
  }
}

window.addEventListener('keydown',(e)=>{
  switch (e.key) {
    case "ArrowRight":
      greenTank.vx = 10;
      greenTank.vy = 0;
      break;
      case "ArrowDown":
        greenTank.vx = 0;
        greenTank.vy = -10;
        case "ArrowLeft":
          greenTank.vx = -10;
          greenTank.vy = 0;
    default:

  }(e.key);
})



spriteSheet.addEventListener('load',()=>{
  sw = spriteSheet.width/2;
  sh = spriteSheet.height/2;
  setInterval(animate,100);
});

function animate(){
  context.clearRect(0,0,width,height);
  greenTank.update();
  greenTank.draw();
  greenTank.index += 1;
  if(greenTank.index >= greenTank.animationArray.length){
    greenTank.index = 0
  }
  // console.log(greenTank.index)

}

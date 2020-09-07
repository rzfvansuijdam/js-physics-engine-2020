const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,X,ab,bc,ca,altitudebc,altitudeab,altitudeca;

A = new Point(100,100,15,"red",true,"a");
B = new Point(400,150,15,"blue",true,"b");
C = new Point(300,400,15,"green",true,"c");
X = new Point(250,400,15,"green",false,"X");

ab = new Linear(1,1);
bc = new Linear(1,1);
ca = new Linear(1,1);
altitudebc = new Linear(1,1);
altitudeab = new Linear(1,1);
altitudeca = new Linear(1,1);

function animate(){
  context.clearRect(0,0,width,height);
  //path for triangle
  context.fillStyle = "rgba(255,255,0,0.4)";
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath()
  context.stroke();
  context.fill();

  //draw dots
  A.draw(context);
  B.draw(context);
  C.draw(context);

// line draw
  ab.slope = (B.y - A.y)/(B.x - A.x);
  ab.intercept = B.y - B.x*ab.slope;
  ab.draw(context);

  bc.slope = (C.y - B.y)/(C.x - B.x);
  bc.intercept = B.y - B.x*bc.slope;
  bc.draw(context);

  ca.slope = (C.y - A.y)/(C.x - A.x);
  ca.intercept = C.y - C.x*ca.slope;
  ca.draw(context);

// variable line draw
  altitudebc.slope = -1/bc.slope;
  altitudebc.intercept = A.y - A.x*altitudebc.slope;
  altitudebc.draw(context)

  altitudeab.slope = -1/ab.slope;
  altitudeab.intercept = C.y - C.x*altitudeab.slope;
  altitudeab.draw(context)

  altitudeca.slope = -1/ca.slope;
  altitudeca.intercept = B.y - B.x*altitudeca.slope;
  altitudeca.draw(context)

  
  X.x = (altitudeab.x + altitudebc.x + altitudeca.x)/3;
  X.y = (altitudeab.y + altitudebc.y + altitudeca.y)/3;
  X.draw()

}

setInterval(animate,10);
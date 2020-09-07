const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,X,ab,bc,ca,MAB,MBC,MCA,altitudebc,altitudeab,altitudeca;


A = new Point(100,100,15,"red",true,"a");
B = new Point(400,150,15,"blue",true,"b");
C = new Point(300,400,15,"green",true,"c");
X = new Point(250,400,15,"black",false,"X");

MAB = new Point(150,400,5,"blakc",false,"mab");
MBC = new Point(120,400,5,"black",false,"mbc");
MCA = new Point(350,400,5,"black",false,"mca");

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

  //path for circle
  

  //draw dots
  A.draw(context);
  B.draw(context);
  C.draw(context);

  
  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;
  MBC.draw()

  MCA.x = (C.x + A.x)/2;
  MCA.y = (C.y + A.y)/2;
  MCA.draw()

  MAB.x = (A.x + B.x)/2;
  MAB.y = (A.y + B.y)/2;
  MAB.draw()

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

  
  X.x = altitudeab.intersection(altitudebc).x;
  X.y = altitudeab.intersection(altitudebc).y;
  X.draw()

  let dx = X.x - A.x;
  let dy = X.y - A.y;
  distance = Math.sqrt(dx*dx + dy*dy)

  context.beginPath();
  context.arc(X.x,X.y,distance,0,2*Math.PI);
  context.stroke();

}

setInterval(animate,10);
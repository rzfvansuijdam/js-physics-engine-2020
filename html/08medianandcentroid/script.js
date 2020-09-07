const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let A,B,C;
let lAB,lBC,lCA;
let MAB,MBC,MCA;
let lAMBC,lBMCA,lCMAB;
let allrounder;

A = new Point(100,100,20,"red",true,"A");
B = new Point(600,150,20,"yellow",true,"B");
C = new Point(300,300,20,"blue",true,"C");

MBC = new Point(50,50,10,"green",false,"MBC");
MCA = new Point(50,50,10,"purple",false,"MCA");
MAB = new Point(50,50,10,"orange",false,"MAB");
allrounder = new Point(50,50,10,"black",true,"allrounder");

lBC = new Linear(0.5,1);
lAB = new Linear(0.5,1);
lCA = new Linear(0.5,1);
lAMBC = new Linear(2,100);
lCMAB = new Linear(2,100);
lBMCA = new Linear(2,100);

function animate(){
  context.clearRect(0,0,width,height)
  A.draw();
  B.draw();
  C.draw();

  allrounder.x = (A.x + B.x + C.x)/3;
  allrounder.y = (A.y + B.y + C.y)/3;
  allrounder.draw()

  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;
  MBC.draw()

  MCA.x = (C.x + A.x)/2;
  MCA.y = (C.y + A.y)/2;
  MCA.draw()

  MAB.x = (A.x + B.x)/2;
  MAB.y = (A.y + B.y)/2;
  MAB.draw()

  lAB.slope = (B.y - A.y)/(B.x - A.x);
  lAB.intercept = B.y - B.x * lAB.slope;

  lBC.slope = (B.y - C.y)/(B.x - C.x);
  lBC.intercept = C.y - C.x * lBC.slope;

  lCA.slope = (A.y - C.y)/(A.x - C.x);
  lCA.intercept = A.y - A.x * lCA.slope;

// INNER LINES 

  lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  lAMBC.intercept = A.y - A.x * lAMBC.slope;

  lCMAB.slope = (C.y - MAB.y)/(C.x - MAB.x);
  lCMAB.intercept = C.y - C.x * lCMAB.slope;

  lBMCA.slope = (B.y - MCA.y)/(B.x - MCA.x);
  lBMCA.intercept = B.y - B.x * lBMCA.slope;

  lBC.draw(context,"blue");
  lAB.draw(context,"red");
  lCA.draw(context,"black");
  lAMBC.draw(context,"gray")
  lCMAB.draw(context,"gray")
  lBMCA.draw(context,"gray")
}

setInterval(animate,10)
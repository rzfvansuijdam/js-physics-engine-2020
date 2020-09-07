const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let colors = ["Red", "Blue", "Green", "Orange", "Purple"];
let lines = [];

let a = new Point(100, 100, 15, "red", true);
let b = new Point(250, 500, 15, "red", true);
a.draw(context);
b.draw(context);

let myline = new Linear(0.3, 800);
myline.defineByTwoPoints(a, b);
myline.draw(context);


Update();
function Update() {
  context.clearRect(0,0,width,height);
  if (a.drag == true) {
      a.x = mousePosX;
      a.y = mousePosY;
  }
  if (b.drag == true) {
      b.x = mousePosX;
      b.y = mousePosY;
  }


  myline.defineByTwoPoints(a, b);
  myline.draw(context);

  a.draw(context);
  b.draw(context);

}
setInterval(Update, 10);
//maak de public variable aan voor mouse possibilitie
let mousePosX = 0;
let mousePosY = 0;
//onmouse move save the location of my mouse
document.onmousemove = function(e) {
  mousePosX = e.pageX;
  mousePosY = e.pageY;
};
//on mouse down check if its on a circle an set it to draggable
document.onmousedown = function(e) {

  if (a.draggable == true) {
    if (e.pageY > a.y - a.radius && e.pageY < a.y + a.radius) {
      if (e.pageX > a.x - a.radius && e.pageX < a.x + a.radius) {
        a.drag = true;
        return;
      }
    }
  }
  if (b.draggable == true) {
    if (e.pageY > b.y - b.radius && e.pageY < b.y + b.radius) {
      if (e.pageX > b.x - b.radius && e.pageX < b.x + b.radius) {
        b.drag = true;
        return;
      }
    }
  }
};
//on mouse up check if there is a circle that gets dragged an set is back to false
document.onmouseup = function(e) {
    if (a.drag == true) {
      a.drag = false;
  }
  if (b.drag == true) {
    b.drag = false;
}
};
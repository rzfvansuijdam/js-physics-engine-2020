const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let Mypoint = new Point(200,200,50,"red", true)
function animate(){
	context.clearRect(0,0,width,height);
	Mypoint.draw()
}

setInterval(animate,10);
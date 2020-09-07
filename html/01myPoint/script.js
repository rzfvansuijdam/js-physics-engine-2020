const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

addEventListener('mousedown', mouseDownHandler)
function mouseDownHandler(evt){
	console.log(evt)
} 

addEventListener('mouseup', mouseUpHandler)
function mouseUpHandler(evt){
	console.log(evt)
} 

addEventListener('mousemove', mouseMoveHandler)
function mouseMoveHandler(evt){
	console.log(evt)
} 
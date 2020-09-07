
class Polygon{
    constructor(points, color){
  this.points = points;
  this.color = color;
    }
  
    draw(){
      for (let i = 0; i<this.points.length; i++){
        this.points[i].draw(context);
      }
      context.beginPath();
      context.fillStyle = "red";
      context.moveTo(this.points[0].x,this.points[0].y);
      for (let i = 0; i<this.points.length; i++){
        context.lineTo(this.points[i].x,this.points[i].y);
      }
      context.closePath();
      context.fill();
      context.stroke();
    }
  }
  
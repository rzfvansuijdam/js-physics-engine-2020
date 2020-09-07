class Linear {

  constructor(slope, intercept) {

    this.slope = slope;
    this.intercept = intercept;
  }

  y(x) {
    return x* this.slope + this.intercept
  }

  draw(context) {
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(0, this.intercept);
    context.lineTo(width, this.y(width));
    context.closePath();
    context.stroke();
  }
  y(x) {
    // y = a * x + b
    let y = this.slope * x + this.intercept;
    return y;
  }

  defineByTwoPoints(a,b) {
    let dy = b.y - a.y;
    let dx = b.x - a.x;
    this.slope = dy / dx;
    this.intercept = a.y - this.slope * a.x;
  }

  intersection(line) {
    let ans = {};
    ans.x = (line.intercept - this.intercept)/(this.slope - line.slope);
    ans.y = this.y(ans.x)
    return ans;
  }
}
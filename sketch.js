var i = 50;
var col = ['#e4eecb', '#b1d6aa', '#7ac4c3', '#6699ba'];


function setup() {
  createCanvas (500,500);
  
  for(var x = 0; x < width; x+= i) {
    for(var y = 0; y < height; y += i) {
      
      noStroke();
      fill(color(random(col)))
      triangle (x, y, x, y+i, x+i, y+i);
      
      noStroke();
      fill(color(random(col)))
      triangle (x, y, x+i, y, x+i, y+i);
    }
  }
  
}

function draw() {
  
}
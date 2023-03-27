// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw(bg_color, first, last)
  {
    stroke(0);
    // Draw target
    fill(bg_color);                 
    circle(this.x, this.y, this.width);
    fill(color(0, 0, 0));
    circle(this.x, this.y, this.width - 12);
    
    // Draw label
    textFont("Arial", 12);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);

    // Draw boxes around same letter targets and a big letter before each new letter
    if (first)
    {
      textFont("Arial", 36);
      fill(color(255, 255, 0));
      textAlign(CENTER);
      text(this.label[0], this.x - this.width/2 - 20, this.y + this.width/8);

      noFill();
      stroke(255);
      // quarter circle at the top of the target
      arc(this.x - this.width/2, this.y - this.width/4, this.width/2, this.width/2, PI, PI * 3/2);
      // quarter circle at the bottom of the target
      arc(this.x - this.width/2, this.y + this.width/4, this.width/2, this.width/2, PI / 2, PI);
      if (last) {
        // lines to connect the four quarter circles in the case of a single target
        line(this.x - this.width/2, this.y - this.width/2, this.x + this.width/2 - 20, this.y - this.width/2);
        line(this.x - this.width/2, this.y + this.width/2, this.x + this.width/2 - 20, this.y + this.width/2);
      }
      else {
        // lines to connect the two quarter circles to the next target
        line(this.x - this.width/2, this.y - this.width/2, this.x + this.width/2 + 28, this.y - this.width/2);
        line(this.x - this.width/2, this.y + this.width/2, this.x + this.width/2 + 28, this.y + this.width/2);
      }
    }
    if (last)
    {
      noFill();
      stroke(255);
      // quarter circle at the top of the target
      arc(this.x + this.width/4, this.y + this.width/4, this.width/2, this.width/2, 0, PI / 2);
      // quarter circle at the bottom of the target
      arc(this.x + this.width/4, this.y - this.width/4, this.width/2, this.width/2, PI * 3/2, 0);

      textAlign(CENTER);
      // line connecting the two quarter circles
      line(this.x + this.width/2, this.y - this.width/4, this.x + this.width/2, this.y + this.width/4);
      if (!first) {
        // lines above and below the target to connect it to the previous target
        line(this.x - this.width/2 - 32, this.y - this.width/2, this.x + this.width/2 - 20, this.y - this.width/2);
        line(this.x - this.width/2 - 32, this.y + this.width/2, this.x + this.width/2 - 20, this.y + this.width/2);
      }
    }
    if (!first && !last) {
      noFill();
      stroke(255);

      // lines to connect to both the next and previous targets
      line(this.x - this.width + 12, this.y - this.width/2, this.x + this.width - 20, this.y - this.width/2);
      line(this.x - this.width + 12, this.y + this.width/2, this.x + this.width - 20, this.y + this.width/2);
    }
    noStroke();

    textFont("Arial", 16);
    fill(color(255, 255, 255));
  }

  // I made a getter for the label so I can access it in sketch.js in order to know when the first letter changes.
  getLabel()
  {
    return this.label;
  }
}
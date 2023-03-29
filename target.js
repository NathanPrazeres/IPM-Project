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
    // Draw black inner circle to contrast with text
    fill(color(0, 0, 0));
    circle(this.x, this.y, this.width * 0.85);
    
    // Draw label
    textFont("Arial", 12);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);

    // Law of proximity: draw a box around the target
    // Law of common region: draw a box around the target
    // Law of similarity: draw a box around the target
    // Law of connectedness: draw a box around the target
    // Miller's Law: Only have less than 7 colors in the design
    // Hick's Law: don't divide the targets into categories because there would 2 searches necessary

    // Draw boxes around same letter targets and a big letter before each new letter
    if (first)
    {
      textFont("Arial", 36);
      fill(color(255, 255, 0));
      textAlign(CENTER);
      stroke(255, 0, 0);
      strokeWeight(4);
      text(this.label[0], this.x - this.width * 3/4, this.y + this.width/8);

      strokeWeight(1);
      noFill();
      stroke(255);
      // quarter circle at the top of the target
      arc(this.x - this.width/2, this.y - this.width/4, this.width/2, this.width/2, PI, PI * 3/2);
      // quarter circle at the bottom of the target
      arc(this.x - this.width/2, this.y + this.width/4, this.width/2, this.width/2, PI / 2, PI);
      if (last) {
        // lines to connect the four quarter circles (two by two) in the case of a single target
        line(this.x - this.width/2, this.y - this.width/2, this.x + this.width/4, this.y - this.width/2);
        line(this.x - this.width/2, this.y + this.width/2, this.x + this.width/4, this.y + this.width/2);
      }
      else {
        // lines to connect the two quarter circles to the next target
        line(this.x - this.width/2, this.y - this.width/2, this.x + this.width/4 + this.width/2, this.y - this.width/2);
        line(this.x - this.width/2, this.y + this.width/2, this.x + this.width/4 + this.width/2, this.y + this.width/2);
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

      // line connecting the two quarter circles
      line(this.x + this.width/2, this.y - this.width/4, this.x + this.width/2, this.y + this.width/4);
      if (!first) {
        // lines above and below the target to connect it to the previous target
        line(this.x - this.width, this.y - this.width/2, this.x + this.width/4, this.y - this.width/2);
        line(this.x - this.width, this.y + this.width/2, this.x + this.width/4, this.y + this.width/2);
      }
    }
    if (!first && !last) {
      noFill();
      stroke(255);

      // lines to connect to both the next and previous targets
      line(this.x - this.width, this.y - this.width/2, this.x + this.width - this.width/4, this.y - this.width/2);
      line(this.x - this.width, this.y + this.width/2, this.x + this.width - this.width/4, this.y + this.width/2);
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
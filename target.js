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
  draw(bg_color, first)
  {
    // Draw target
    fill(bg_color);                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 12);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
    if (first)
    {
      textFont("Arial", 20, BOLD);
      fill(color(255, 255, 0));
      textAlign(CENTER);
      text(this.label[0], this.x, this.y - 20);
    }
    textFont("Arial", 12);
    fill(color(255, 255, 255));
  }

  getLabel()
  {
    return this.label;
  }
}

class farmer {
}

class farmplot {
  constructor( x, y) {
    this.growstate = 0;
    this.sprite = growstate01;
    this.x = x;
    this.y = y;  
  }
  
  grow() {
    var growTick = round(random(20));
    if((this.growstate<6)&&(growTick<5)) this.growstate = (this.growstate+1);
    switch (this.growstate) {
      case 0:
        this.sprite = growstate01;
        break;
        case 1:
        this.sprite = growstate02;
        break;
        case 2:
        this.sprite = growstate03;
        break;
        case 3:
        this.sprite = growstate04;
        break;
        case 4:
        this.sprite = growstate05;
        break;
        case 5:
        this.sprite = growstate06;
        break;
        case 6:
        this.sprite = growstate07;
        break;
    }
  }
  
  harvest() {
    if((playerx==this.x)&&(playery==this.y-20)&&(this.growstate==6)) {
      score++;
      this.growstate = 0;
      this.sprite = growstate01;
    }
  }
  
  drawPlot() {
    image(this.sprite, this.x, this.y);
  }
  
}
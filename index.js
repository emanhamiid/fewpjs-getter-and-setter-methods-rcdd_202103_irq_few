
// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
    this.pi = 3.14;
  }
  set diameter(diameter){
    this.radius = radius;
  }
  get diameter(){
    return 2 * this.radius;
  }
  set circumference(radius){
    this.radius = radius;
  }
  get circumference(){
    return 2 * this.pi * this.radius;
  }
  set area(radius){
    this.radius=radius;
  }
  get area(){
    return this.pi * this.radius * this.radius;
  }
}

const circle= new Circle(6);
circle.diameter();

const circle1= new Circle(9);
circle1.diameter();

circle.circumference();

circle.area();

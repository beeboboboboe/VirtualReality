class Ufo{
constructor(x,y,z){
this.x = x;
this.y = y;
this.z = z;
this.y = 0;
this.dy = rnd(1,10)/100;

this.obj = document.createElement("a-entity");

let base1 = document.createElement("a-torus");
base1.setAttribute("side", "double");
base1.setAttribute("radius", "5");
base1.setAttribute("rotation", "90 0 0");
this.obj.append( base1 );

let base2 = document.createElement("a-circle");
base2.setAttribute("side", "double");
base2.setAttribute("radius", "6");
base2.setAttribute("rotation", "0 0 0");
this.obj.append( base2 );

let hatch = document.createElement("a-sphere");
this.obj.append( hatch );


scene.append( this.obj );
this.obj.setAttribute("position", {x:0, y:.7, z:-4});

}


}
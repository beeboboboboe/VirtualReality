class Rocket{
 constructor(x,y,z){
     this.x = x;
    this.y = y;
    this.z = z;
    this.y=-4;
    this.dy = rnd(1,10)/100;

    
 this.obj = document.createElement("a-entity");
 
 let base = document.createElement("a-cylinder");
 base.setAttribute("radius", "1");
 base.setAttribute("color", "#808080");
 base.setAttribute("height", "4");
this.obj.append( base );

let tip = document.createElement("a-cone");
tip.setAttribute("radius", "1");
tip.setAttribute("color", "red");
tip.setAttribute("position", "0, 2.5, 0")
this.obj.append( tip );


scene.append( this.obj );
this.obj.setAttribute("position", {x:0, y:-4, z:0});


 }
 
launch(){
this.y+=this.dy;
this.obj.setAttribute("position",{x:0, y:this.y, z:0});

}

 
}
class Ufo{
constructor(x,y,z){
this.x = x;
this.z = z;
this.y = 20;
this.dy = -.1;


this.obj = document.createElement("a-entity");

let base1 = document.createElement("a-torus");
base1.setAttribute("side", "double");
base1.setAttribute("radius", "4.7");
base1.setAttribute("rotation", "90 0 0");
base1.setAttribute("color", "grey");
this.obj.append( base1 );

let base2 = document.createElement("a-circle");
base2.setAttribute("side", "double");
base2.setAttribute("radius", "5");
base2.setAttribute("rotation", "90 0 0");
base2.setAttribute("position", "0 .25 0");
base2.setAttribute("color", "#3cd070");
this.obj.append( base2 );

let base3 = document.createElement("a-circle");
base3.setAttribute("side", "double");
base3.setAttribute("radius", "5");
base3.setAttribute("rotation", "90 0 0");
base3.setAttribute("position", "0 -.13 0");
base3.setAttribute("color", "#3cd070");
this.obj.append( base3 );

let hatch = document.createElement("a-sphere");
hatch.setAttribute("radius", "2");
// hatch.setAttribute("philength", "180");
hatch.setAttribute("color", "#33FF66");
hatch.setAttribute("position", "0 .3 0");
this.obj.append( hatch );

this.obj.addEventListener("click",()=>{
    this.down = true;
    console.log("hi")
    })


scene.append( this.obj );
this.obj.setAttribute("position", {x:x, y:y, z:z});

}
    invade(){
    if( this.down ){
this.y+=this.dy;
this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z})
    }
}
}
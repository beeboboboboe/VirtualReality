class Rocket{
 constructor(x,y,z){
     this.x = x;
    this.z = z;
    this.y=1;
    this.dy = rnd(1,10)/100;
    this.up = false;

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

this.obj.addEventListener("click",()=>{
    this.up = true;
    console.log("hi")
    })

scene.append( this.obj );
this.obj.setAttribute("position", {x:x, y:y, z:z});

 }
 
launch(){
    if( this.up ){
this.y+=this.dy;
this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}

 
}
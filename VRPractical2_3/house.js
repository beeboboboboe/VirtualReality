class House{
constructor(x, y, z){
this.obj=document.createElement("a-entity");

let roof=document.createElement("a-cone");
roof.setAttribute("segments-radial", "4");
roof.setAttribute("position", "0 1.5 0");
roof.setAttribute("radius", "4");
roof.setAttribute("rotation", "0 45 0");
roof.setAttribute("color", "orange");

let base=document.createElement("a-box");
base.setAttribute("position", "0 .4 0");
base.setAttribute("height", "1.3");
base.setAttribute("depth", "1.3");
base.setAttribute("width", "1.3");
base.setAttribute("color", "brown")
this.obj.append( base );
this.obj.append( roof );
this.obj.setAttribute("position",{x:x, y:y, z:z});
scene.append( this.obj );
}
}
class Pallet{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.obj=document.createElement("a-box");
        this.obj.setAttribute("width",".6");
        this.obj.setAttribute("height","2");
        this.obj.setAttribute("depth","2");
        this.obj.setAttribute("rotation", "0 0 90");
        this.obj.setAttribute("src", "pallet");
        scene.append( this.obj );
        this.obj.setAttribute("position", {x:x, y:y, z:z});
    }
}
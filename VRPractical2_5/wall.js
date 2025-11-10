class Wall{
    constructor(x,y,z){
        x=x;
        y=y;
        z=z;
        this.obj=document.createElement("a-box");
        this.obj.setAttribute("height", "7");
        this.obj.setAttribute("width", "1");
        this.obj.setAttribute("depth", "1");
        this.obj.setAttribute("rotation","0 0 -45")
        scene.append( this.obj );
        this.obj.setAttribute("position", {x:x, y:y+3, z:z})
}


}
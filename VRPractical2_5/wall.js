class Wall{
    constructor(x,y,z){
        x=x;
        y=y;
        z=z;
        this.obj=document.createElement("a-box");
        this.obj.setAttribute("height", "8");
        this.obj.setAttribute("width", "2");
        this.obj.setAttribute("depth", "2");
        this.obj.setAttribute("rotation","0, 90, 0");
        this.obj.setAttribute("src", "#apartment")
        scene.append( this.obj );
        this.obj.setAttribute("position", {x:x, y:y, z:z})
}


}
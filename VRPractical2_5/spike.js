class Spike{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.obj=document.createElement("a-cone");
        this.obj.setAttribute("color","red");
        this.obj.setAttribute("height", "1.3");
        this.obj.setAttribute("radius", "1");
        scene.append( this.obj );
        this.obj.setAttribute("position", {x:x, y:y, z:z});

    }

}
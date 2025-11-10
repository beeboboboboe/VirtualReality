class Turn{
    constructor(x,y,z){
        x:x;
        y:y;
        z:z;
        this.obj=document.createElement("a-entity");
        let s=document.createElement("a-box");
            s.setAttribute("height", "7");
            s.setAttribute("width", "1");
            s.setAttribute("depth", "1");
            s.setAttribute("rotation","0 0 -45");
            this.obj.append( s );





scene.append(this.obj);
    }

}
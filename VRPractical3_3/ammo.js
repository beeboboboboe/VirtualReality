class Ammo{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;

        this.obj= document.createElement("a-entity");
        
        let outer = document.createElement("a-box");
        outer.setAttribute("depth", "1");
        outer.setAttribute("height", "1");
        outer.setAttribute("width", "1");
        outer.setAttribute("position", {x:0, y:1, z:0});
        outer.setAttribute("src", "")
    
        let display = document.createElement("a-box")
        display.setAttribute("side", "double")
        display.setAttribute("depth", "0.01")
        display.setAttribute("width", "1")
        display.setAttribute("height", "1");
        display.setAttribute("position", {x:0, y:1, z:.5});
        display.setAttribute("src", "")

        this.obj.append(display)
        this.obj.append(outer);
        scene.append( this.obj );

        this.obj.setAttribute("position", {x:x,y:y,z:z});
        


    }

}
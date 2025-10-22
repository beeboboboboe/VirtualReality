class Cloud{
    constructor(x, y, z){
        this.obj=document.createElement("a-entity");

     let cloud1=document.createElement("a-sphere");
         cloud1.setAttribute("position", "1 0 0");

    let cloud2=document.createElement("a-sphere");
        cloud2.setAttribute("position", "0 0 1");

    let cloud3=document.createElement("a-sphere");
        cloud3.setAttribute("position", "0 0 0");

    this.obj.append( cloud1 );
    this.obj.append( cloud2 );
    this.obj.append( cloud3 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    this.obj.setAttribute("color", "blue");
    console.log(this.obj);
    scene.append( this.obj );
}
}
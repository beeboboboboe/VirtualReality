
let scene;
let sphere;
let entity

window.addEventListener("DOMContentLoaded",function() {
scene=document.querySelector("a-scene");
car=document.querySelector("#car");
pokeball=document.querySelector("#pokemonball");
rocket=document.querySelector("#rocket");
dude=document.querySelector("#dude");
sun=document.querySelector("#sun");
car.x=0;
car.dx=.01;
pokeball.x=1;
pokeball.dx=.1;
rocket.y=1;
rocket.dy=.01;
dude.s=0;
dude.ds=.01;
sun.o=2;
sun.do=-0.007;


loop()
})


function loop(){
car.x+=car.dx;
car.setAttribute("position", {x:car.x, y:0, z:-6});
pokeball.x+=pokeball.dx;
pokeball.setAttribute("rotation", {x:pokeball.x, y:0, z:-5});
rocket.y+=rocket.dy;
rocket.setAttribute("position", {x:4, y:rocket.y, z:-4});
dude.s+=dude.ds;
dude.setAttribute("scale", {x:1, y:dude.s, z:1});
sun.o+=sun.do;
sun.setAttribute("opacity", sun.o);




window.requestAnimationFrame(loop);

}



let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket, ufo;

window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene"); 
  rocket = new Rocket(0, -4, 0);
let rockets=[];
for(let i=0; i<100; i++){
x=rnd(-20, 20);
z=rnd(-20, 20);
let r = new Rocket(x, -4, z);
rockets.push(r);

let u = new Ufo(0, 3, -3)


}
  loop();
})




function loop(){
rocket.launch()
  
  window.requestAnimationFrame( loop );
}

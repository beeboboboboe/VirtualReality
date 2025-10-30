let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket, ufo;

let rockets=[];
window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene"); 

for(let i=0; i<100; i++){
x=rnd(-20, 20)
z=rnd(-20, 20)
let r = new Rocket(x, -4, z);
rockets.push(r);



}
  loop();
})




function loop(){
  for(let r of rockets){
r.launch();

  }
  window.requestAnimationFrame( loop );
}

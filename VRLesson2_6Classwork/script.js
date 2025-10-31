let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mech;
let mechs=[];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  mech = document.getElementById("mech");

  for(let i=0;i<100;i++){
x=rnd(-20, 20);
z=rnd(-20, 20);
 let m=new Mech(x, 13, z);
 mechs.push(m);
}
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}

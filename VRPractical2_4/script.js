let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket, ufo;

let rockets=[];
let ufos=[];
window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene"); 

for(let i=0; i<100; i++){
x=rnd(-20, 20)
z=rnd(-20, 20)
let r = new Rocket(x, -4, z);
rockets.push(r);
}

for(i=0;i<20;i++){
x=rnd(-20, 20)
z=rnd(-20,20)
let u = new Ufo(x, 20, z);
ufos.push(u);
}

  loop();
})




function loop(){
  for(let r of rockets){
r.launch();
  for(let u of ufos){
u.invade();
  }
  }
  window.requestAnimationFrame( loop );
}

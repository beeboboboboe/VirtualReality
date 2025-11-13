/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "---WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
  "---W-----W--------W--------W-----------------W",
  "W--W--W--W--WWWW--W--W--WWWW--WWWWWWWWWWWWWWWW",
  "W-----W--W--W-----W--W--W--------------W--W--W",
  "W--W--WWWWWWW--WWWW--WWWWWWWWWWWWWWWW--W--W--W",
  "W--W-----W--------------W--------------------W",
  "W--W--W--WWWW--WWWW--W--WWWWWWWWWWWWWWWW--W--W",
  "W--W--W-----W-----W--W--------------------W--W",
  "WWWWWWWWWW--WWWWWWWWWWWWWWWW--WWWWWWW--WWWW--W",
  "W-----W--------W--W--W-----------W-----W--W--W",
  "W--WWWW--WWWW--W--W--WWWW--WWWW--WWWWWWW--WWWW",
  "W-----------W--W--------W-----W--------W-----W",
  "W--WWWW--WWWW--WWWWWWW--WWWW--W--WWWW--W--WWWW",
  "W--W--------W--------W-----W--W--W--W--------W",
  "W--W--WWWWWWWWWW--W--WWWW--W--WWWW--WWWWWWWWWW",
  "W--W--------W-----W--------W-----W--W--------W",
  "W--WWWWWWW--WWWWWWWWWWWWW--W--WWWW--WWWW--WWWW",
  "W--W--------W-----------W--W--W--W-----W-----W",
  "W--W--WWWW--WWWW--W--WWWWWWW--W--WWWW--W--WWWW",
  "W--W--W--------W--W-----W--------W-----W-----W",
  "W--W--W--------W--W-----W--------W-----W-----W",
  "W--W--W--------W--W-----W--------W-----W-----W",
  "WWWW--W--WWWW--WWWW--WWWWWWW--WWWW--WWWW--WWWW",
  "W-----W-----W-----W--------------W--W--W--W--W",
  "WWWW--W--WWWWWWW--W--WWWW--WWWW--W--W--W--W--W",
  "W--W--W--------W--W-----W-----W--------W-----W",
  "W--WWWWWWWWWW--WWWWWWW--WWWWWWWWWWWWWWWWWWW--W",
  "W--W--------------------W--------W--W--------W",
  "W--W--W--WWWW--W--WWWWWWWWWW--W--W--W--W--WWWW",
  "W--W--W-----W--W-----------W--W--------W-----W",
  "W--WWWW--WWWWWWWWWWWWWWWW--W--WWWWWWW--WWWW--W",
  "W-----------------W-----------------W--W-----",
  "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW--",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "W"){
        new Wall(c*2,4,r*2)
      }
   else if(cols[c] == "s"){
        new Spike(c*1.1,1,r);
      }else if(cols[c]=="p"){
        new Pallet(c,0,r)
      }


}

  }

})
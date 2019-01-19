/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function PrintShape(shape,height,character){
  switch(shape){
      case "Square":
      let boo = "";
      for(let i =0; i<height;i++){
          boo=boo+character;
      }
      for(let i =0; i<height;i++){
          console.log(boo);
      }
      break;
      
      case "Triangle":
          let boo1 = "";
      for(let i =0; i<=height;i++){
          console.log(boo1);
          boo1=boo1+character;
      }
      break;
      
      case "Diamond":
      let boo2 = "";
      let spaces = height/2;
      let spacesstr ="";
      let chars = 1;
      let h =height;
      do{
      //populate spaces
      for(let i =0; i< spaces; i++){
      boo2=boo2+" ";
      }
      //populate characters
      for(let i =1; i<= chars;i++){
          boo2 = boo2+ character;
      }
              console.log(boo2);
              if(h>height/2+1){
              boo2="";
              chars=chars+2;
              spaces--;
              h--;
              }
              else{
                  spaces++;
                  chars=chars-2;
                  boo2="";
                  h--;
              }
}while(h>=0);
      break;
  }
}

PrintShape("Square",3,"*");
PrintShape("Triangle",5,"$");
PrintShape("Diamond",7,"*")

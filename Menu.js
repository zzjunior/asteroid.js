function Menu(){
  image(img[1],0,0,1280,720);
  //NOME DO JOGO
  textSize(80);
  stroke(0,0,255);
  strokeWeight(8);
  fill(255);
  text("A S T E R O I D",115,180);
// start boton 
  fill(0,10);
  strokeWeight(3);
  if(mouseY > 400&& mouseY < 400+50 &&mouseX > 270 && mouseX < 270 + 250){  
      fill(0); 
      stroke(0);
  }
  rect(270,400,250,50,20);
  textSize(25)
  fill(255);
  stroke(0,0,255);
  text("s    t    a    r    t",315,432);  
  
  
  
  
}
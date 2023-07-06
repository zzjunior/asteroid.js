function Menu(){
  image(img[1],0,0,1280,720);
  //NOME DO JOGO
  textSize(120);
  stroke(0,0,255);
  strokeWeight(8);
  fill(255);
  text("A S T E R O I D",220,280);
// start boton 
  fill(0,10);
  strokeWeight(3);
  if(mouseY > 450&& mouseY < 450+50 &&mouseX > 530 && mouseX < 530 + 250){  
      fill(0); 
      stroke(0);
  }
  rect(530,450,250,50,20);
  textSize(25)
  fill(255);
  stroke(0,0,255);
  text("s    t    a    r    t",575,480);  
  
  
  
  
}
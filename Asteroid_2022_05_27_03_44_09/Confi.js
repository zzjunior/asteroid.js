function Configuracoes(){
  background(0);
  image(img[1],0,0,1280,720);
  fill(255);
  textSize(30);
  text("Configurações",560,100);

  // voltar menu boton
stroke(0,0,255);
fill(0,10);
strokeWeight(3);
  if(mouseY > 330&& mouseY < 330+50 &&mouseX > 550 && mouseX < 550 + 220){
  fill(0);
  stroke(0);
 }
rect(550,330,220,50,50);
  fill(255);
  textSize(22);
  stroke(0,0,255);
  text("Voltar ao Menu",585,360);
  text("resetar",225);
  text("Áudio");
  
  // audio boton 
  stroke(0,0,255);
  fill(0,10);
  strokeWeight(3);
   if(mouseY > 430 && mouseY < 430+50 && mouseX > 550 && mouseX < 550+220){
      fill(0);
      stroke(0);
   }
  rect(550,430,220,50,50);
  fill(255);
  stroke(0,0,255);
  text("Audio",630,462);
}
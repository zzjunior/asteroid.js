function Configuracoes(){
  background(0);
  image(img[1],0,0,1366,768);
  fill(255);
  textSize(30);
  text("Configurações",600,100);
  // voltar menu
stroke(0,0,255);
fill(0,10);
strokeWeight(3);
  if(mouseY > 330&& mouseY < 330+50 &&mouseX > 590 && mouseX < 590 + 220){
  fill(0);
 }
rect(590,330,220,50,50);
  fill(255);
  textSize(22);
  text("Voltar ao Menu",625,360);
  text("resetar",225);
  text("Áudio");
  
}
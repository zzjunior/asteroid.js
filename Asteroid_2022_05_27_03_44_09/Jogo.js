function fase1(){
  background(0,0,128);
  image(img[1],0,0,1366,768);
  image(img[0],x,y,50,50);
  // asteroids caindo //
       for (i=0; i<16; i++){
       image(asteroid[i], vAx[i], vAy[i], 50,50);
        vAy[i] = vAy[i] + 2;
         // verificar a distância  
        if(vAy[i] > 768 && vAx[i] > x - 35 && vAx[i] < x + 35){
        //pontos[0] = pontos[0] +1;
        vAy[i] = -random(50,768);
        vAx[i] = random(0,1266);
                    }
                   //  if(pontos[0] >15){
                      //pontos[0]=0;
               }
                      if(vAy[i] > 700 ){
                      vAy[i] = -random(50,768);
                      vAx[i] = random(0,683);
         }
  //ANIMAÇÕES //
   //image(anime[contador%30],250,310,50,50);
    //if(tempo>2){ contador++; tempo=0; }
  // movimentacao 1
   if(keyIsDown(LEFT_ARROW))
     x-=5;
   if(keyIsDown(RIGHT_ARROW))
     x+=5;
   image(img[0],x,y,50,50);
   // movimentacao 2
     if(keyIsDown(UP_ARROW))
     y-=5;
   if(keyIsDown(DOWN_ARROW))
     y+=5;
   image(img[0],x,y,50,50);
  
  //botão de configurações//
    stroke(0,0,255)
    fill(0,10);
    strokeWeight(3)
    if(mouseY > 15&& mouseY < 15+50 &&mouseX > 1300 && mouseX < 1300 + 50){
      fill(0);
    }
      rect(1300,15,50,50,30);
      fill(255);
      image(img[2],1313,27,25,25);
}
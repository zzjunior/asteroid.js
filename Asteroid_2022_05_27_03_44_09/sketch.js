var anime = [];
var asteroid = [];
var vAx = [];
var vAy = [];
var font = [];
var img = [];
var x;
var y;
var tela = 1;
var contador=0;
var tempo=0;
function preload() {
img[0] = loadImage('./images/nave1.png');
img[1] = loadImage('./images/Untitled-2.png');
img[2] = loadImage('./images/configu.png');
  asteroid[0] = loadImage("./images/asteroid.png");
  asteroid[1] = loadImage("./images/asteroid.png");
  asteroid[2] = loadImage("./images/asteroid.png");
  asteroid[3] = loadImage("./images/asteroid.png");
  asteroid[4] = loadImage("./images/asteroid.png");
  asteroid[5] = loadImage("./images/asteroid.png");
  asteroid[6] = loadImage("./images/asteroid.png");
  asteroid[7] = loadImage("./images/asteroid.png");
  asteroid[8] = loadImage("./images/asteroid.png");
  asteroid[9] = loadImage("./images/asteroid.png");
  asteroid[10] = loadImage("./images/asteroid.png");
  asteroid[11] = loadImage("./images/asteroid.png");
  asteroid[12] = loadImage("./images/asteroid.png");
  asteroid[13] = loadImage("./images/asteroid.png");
  asteroid[14] = loadImage("./images/asteroid.png");
  asteroid[15] = loadImage("./images/asteroid.png");
  anime[0] = loadImage('./anime/01.png');
  anime[1] = loadImage('./anime/02.png');
  anime[2] = loadImage('./anime/03.png');
  anime[3] = loadImage('./anime/04.png');
  anime[4] = loadImage('./anime/05.png');
  anime[5] = loadImage('./anime/06.png');
  anime[6] = loadImage('./anime/07.png');
  anime[7] = loadImage('./anime/08.png');
  anime[8] = loadImage('./anime/09.png');
  anime[9] = loadImage('./anime/10.png');
  anime[10] = loadImage('./anime/11.png');
  anime[11] = loadImage('./anime/12.png');
  anime[12] = loadImage('./anime/13.png');
  anime[13] = loadImage('./anime/14.png');
  anime[14] = loadImage('./anime/15.png');
  anime[15] = loadImage('./anime/16.png');
  anime[16] = loadImage('./anime/17.png');
  anime[17] = loadImage('./anime/18.png');
  anime[18] = loadImage('./anime/19.png');
  anime[19] = loadImage('./anime/20.png');
  anime[20] = loadImage('./anime/21.png');
  anime[21] = loadImage('./anime/22.png');
  anime[22] = loadImage('./anime/23.png');
  anime[23] = loadImage('./anime/24.png');
  anime[24] = loadImage('./anime/25.png');
  anime[25] = loadImage('./anime/26.png');
  anime[26] = loadImage('./anime/27.png');
  anime[27] = loadImage('./anime/28.png');
  anime[28] = loadImage('./anime/29.png');
  anime[29] = loadImage('./anime/30.png');
  anime[30] = loadImage('./anime/31.png');
  anime[31] = loadImage('./anime/32.png');
  anime[32] = loadImage('./anime/33.png');
  anime[33] = loadImage('./anime/34.png');
  anime[34] = loadImage('./anime/35.png');
  anime[35] = loadImage('./anime/36.png');
  anime[36] = loadImage('./anime/37.png');
  anime[37] = loadImage('./anime/38.png');
  anime[38] = loadImage('./anime/39.png');
  anime[39] = loadImage('./anime/40.png');
  anime[40] = loadImage('./anime/41.png');
}

function setup() {
  createCanvas(1366,768);
  x = 275;
  y = 420;
  xA = 290;
  // asteroids caindo // 
      for ( i=0; i<16; i++){
       vAx[i] = random(683,1366);
       vAy[i] = -random(50,768);
    }
}
function draw() {
tempo++;
  if(tela==1){
    Menu();
  }
  if(tela==2){
    Configuracoes(); 
  }
  if(tela==0){
    //Movimentação
    if(x>1366){x=0;}
    if(x<0){x=1366;}
    if(y>768){y=0;}
    if(y<0){y=768;}
    //
    fase1();
}
  }
function mouseClicked(){
  // start boton
    if(mouseY > 450&& mouseY < 450+50 &&mouseX > 530 && mouseX < 530 + 250){
      tela=0;
    }
  // configuracoes boton
     if(mouseY > 15&& mouseY < 15+50 &&mouseX > 1300 && mouseX < 1300 + 50){
        tela=2;
      }
  //voltar menu boton
    if(mouseY > 330&& mouseY < 330+50 &&mouseX > 590 && mouseX < 590 + 220){
      tela=1;
    }
}
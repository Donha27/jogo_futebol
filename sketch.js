let posInicial = 550;
let posX = posInicial;
let posY;
let campo;
let jogador;
let bola;
let perdidos = 0;

function preload(){
  campo = loadImage('img_campo.png');
  jogador = loadImage('img_jogador.png');
  bola = loadImage('img_bola.png');
}
function setup() {
  createCanvas(800, 600);
  posY = random(50, 550);
}
function novaPosicao(){
  if (posX < 1){
  posY = random(50, 550);
  perdidos++;
  posX = posInicial;
  }
}
function draw() {
  background(campo);
  image(jogador, 1, mouseY-75, 150, 150);
  image(bola, posX ,posY , 50, 50);

  posX = posX - 4;

  novaPosicao();
  
  
}
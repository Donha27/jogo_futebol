let posInicial = 550;
let novaPos = posInicial;
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
}
function novaPosicao(){
  
}
function draw() {
  background(campo);
  image(jogador, 1, mouseY-75,150,150);
  
  
  image(bola, novaPos,1,50,50);
  novaPos = novaPos - 4;

  if (novaPos < 1){
    perdidos++;
    novaPos = posInicial;
  }
  
  
}
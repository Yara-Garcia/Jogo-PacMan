let bon
let background1
let boneco1
let boneco2
let porta
const tamanho = 56
const dist = 64

let andarX = 0
let andarY = 490

let botao

function setup() {
  createCanvas(576, 576);
  bon = loadImage('bon.png')
  background1 = loadImage('ceu.jpg')  
  boneco1 = loadImage('verme.png')
  boneco2 = loadImage('rosaa.png')
  boneco3 = loadImage('boneco.png')
  porta = loadImage('portaof.png')
}

function draw() {
  background(220);
  
  if(andarX < 0){
    andarX = 0
  }
  
  if(andarY < 0){  
    andarY = 0
  }
  
  if(andarX > 512){
     andarX = tamanho*8
  }
  
  if(andarY > 512){
     andarY = tamanho*8
  } 
  
  image(background1, 0, 0, 576, 576)
  image(porta, 460, 0, 130, 150)
  image(boneco1, 192, 304, tamanho, tamanho)
  image(boneco2, 384, 220, tamanho, tamanho)
  image(boneco2, 128, 64, tamanho, tamanho)
  image(boneco3, 288, 304, tamanho, tamanho)
  image(boneco1, 400, 82, tamanho, tamanho)
  image(boneco2, 84, 474, tamanho, tamanho)
  image(bon, andarX, andarY, 90, 100)
  
  if (andarX === 512 && andarY === 0) {
    rect(160, 160, 256, 256)
    textSize (35)
    text('WELL DONE!', 180, 300)
    botao = createButton('Restart')
    botao.mousePressed(reset)
    noLoop()
    
  }
  
  else if (andarX === 192 && andarY === 304) {
    rect(160, 160, 256, 256)
    textSize (35)
    text('GAME OVER!', 200, 300)
    botao = createButton('Restart')
    botao.mousePressed(reset)
    noLoop()
    
  }
}

function reset(){
  andarX = 0
  andarY = 490
  botao.remove()
  loop()
}

function keyPressed() {
  if (keyIsDown(DOWN_ARROW)) {
    andarY += dist
  }
  
  if (keyIsDown(UP_ARROW)) {
    andarY -= dist
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    andarX += dist
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    andarX -= dist
  }
    
}

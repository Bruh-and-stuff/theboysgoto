x = 0;
y = 0;
sW = 0
sH = 0
speakData = ""

apple = "";
draw_apple = ""

saidN = ""

var speek = window.webkitSpeechRecognition;
  
var recognition = new speek();

function preload(){
  apple = loadImage("apple.png")
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

 saidN = Number(content)
 if(Number.isInteger(saidN)){
  document.getElementById("status").innerHTML = "Started drawing apples..."
  draw_apple = "set"
 }
 else{
  document.getElementById("status").innerHTML = "No number detected. Try again."
 }

}

function setup() {
  sW = window.innerWidth
  sH = window.innerHeight

  canv = createCanvas(sW, sH - 150)
  canv.position(0, 150)
}

function draw() {
  if(draw_apple == "set")
  {

    for(var i = 1; i <= saidN; i++){
      x = Math.floor(Math.random()*700)
      y = Math.floor(Math.random()*400)
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " apple(s) drawn.";
    draw_apple = "";
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

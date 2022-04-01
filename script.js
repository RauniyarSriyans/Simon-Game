//global constants
const cluePauseTime = 333; 
const nextClueWaitTime = 1000;

//Global Variables
var clueHoldTime = 1000;
var tonePlaying = false;
var volume = 0.5; 
var pattern = [2, 5, 4, 3, 2, 1, 5, 4];
var progress = 0; 
var gamePlaying = false;
var guessCounter = 0;
var playerMistakes = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // Randomize the clue each time 
  pattern = pattern.sort(() => Math.random() - 0.5);
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  clueHoldTime = 1000;
  playerMistakes = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


//code to generate sound
const freqMap = {
  1: 261.6,
  2: 374.6,
  3: 392,
  4: 456.2,
  5: 635
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
    
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
        clueHoldTime = 1000;
      }else{
        //Pattern correct. Add next segment
        progress++;
        clueHoldTime = clueHoldTime/1.3;
        playClueSequence();
      }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
    }else{
      //Guess was incorrect
      //Repeat the sequence
      playerMistakes++;
      playClueSequence();
    }
  
    if(playerMistakes == 3){
      loseGame();
      clueHoldTime = 1000;
      playerMistakes = 0;
    }
  }


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
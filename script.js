// De sounds die ik in dit document heb gebruikt komen van https://pixabay.com/ 
//Emoji heb ik van https://emojipedia.org/nl/slaapsymbool 

console.log("Dit is het spel Walking doggie");
const dier = "Hond"
let h1element = document.querySelector("h1");

//Regelen van hoe de hond eruit ziet, dmv. array
const hondjeStatus = 0
let plaatjeHondArray = ["hond1.jpeg", "hond-boos.jpeg", "hond-tong.jpeg", "hond-verbaasd.jpeg", "hond-verdrietig.jpeg"]; //de plaatjes neerzetten in de javascript
statushond = 0 //dit is het begin dus de eerste hond

//De buttons 
const hondenVoer = document.querySelector(".hondenvoer");
const hondenMand = document.querySelector(".hondenmand");
const hand = document.querySelector(".hand");
const tennisbal = document.querySelector(".tennisbal");


//De progressbar
let hungerstatus = document.querySelector(".hungerstatus"); //het toevoegen van mijn divs aan mijn javascript
let joystatus = document.querySelector(".joystatus");
let sleepingstatus = document.querySelector(".sleepingstatus");
let happystatus = document.querySelector(".happystatus");

let honger = 100 //waarde van de progressbalk
let joy = 100
let sleep = 100
let happy = 100

//Alle sounds op een rijtje
let audioEat = new Audio ("sounds/eating-sound-effect-36186.mp3")
let audioAww = new Audio ("sounds/aww-cute-reaction-6208.mp3")
let audioSnurk = new Audio ("sounds/pug-roncando-95042.mp3")
let audioBall = new Audio ("sounds/bouncing-ball.mp3")

function geefEten() { // maak een functie aan voor de hongerbalk
  honger = honger + 5 // dit zorgt ervoor dat er steeds 1 bij de honger komt
  hungerstatus.style.width = honger + "%" //hiermee koppel je de div met de class aan het groeien van de balk

  joy = joy - 1 //omdat je hem eten geeft wordt de rest minder om het terug te zien noteer je eerst de variabele en daarna pas wat je wilt doen
  console.log(joystatus.style.width)
  joystatus.style.width = joy + "%"
  console.log (joystatus.style.width)
  sleep = sleep - 1 
  sleepingstatus.style.width = sleep + "%"
  happy = happy - 1
  happystatus.style.width = happy + "%"
 //Audio laten afspelen zodra er op de button geklikt word.
  h1element.textContent = "Wist je dat dit mijn favoriete eten is 🍖🍖"
  audioEat.play ()
}

function geefAai() {
  joy = joy + 5 //als ik op 5 zet gaat hij buiten de border hoe moet ik dit aanpassen? 
  joystatus.style.width = joy + "%"

  honger = honger -1 
  hungerstatus.style.width = honger + "%"
  sleep = sleep - 1
  sleepingstatus.style.width = sleep + "%"
  happy= happy - 1
  happystatus.style.width = happy + "%"
  h1element.textContent = "Ahh ik vind je zo lief als jij me aait ❤️❤️"
  audioAww.play ()
}

function gaSlapen() {
  sleep = sleep + 5
  sleepingstatus.style.width = sleep + "%"

  honger = honger - 1 
  hungerstatus.style.width = honger + "%"
  joy = joy - 1
  joystatus.style.width = joy + "%"
  happy = happy - 1
  happystatus.style.width = happy + "%"
  h1element.textContent = "Het liefst slaap ik de hele dag  💤💤💤💤"
  audioSnurk.play ()
}

function gooiBal() {
  happy = happy + 5
  happystatus.style.width = happy + "%"
  
  honger = honger - 1 
  hungerstatus.style.width = honger + "%"
  joy = joy - 1
  joystatus.style.width = joy + "%"
  sleep = sleep - 1
  sleepingstatus.style.width = sleep + "%"
  h1element.textContent = "Ik vind het harstikke leuk om met de bal te spelen 🎾🎾"
  audioBall.play ()
}

//timer toevoegen aan de bar, zodat deze afloopt, elke moet apart aangezet worden zodat ze apart lopen en stilgezet kunnen worden.
let tmrEten = setInterval (timerEten, 500) //activeert de function timer, het getal is in milliseconden
let tmrAai = setInterval (timerAai, 500)
let tmrBal = setInterval (timerBal, 500)
let tmrSlapen = setInterval (timerSlapen, 500)

//in deze functie gaat er steeds 1 vanaf gedurende de seconde, elke timer een aparte functie om ze apart te kunnen laten stoppen.
function timerEten(){ 
  if (honger <= 5) {
    stopTimer (tmrEten)
  }
  else {honger = honger -1 
  hungerstatus.style.width = honger + "%"
 }
  colorChangeBar()
}

function timerAai(){ 
  if (joy <= 5){
    stopTimer(tmrAai) 
  } else {
  joy = joy -1
  joystatus.style.width = joy+ "%"
}
  colorChangeBar()
}

function timerSlapen(){ 
  if (sleep <= 5){
    stopTimer(tmrSlapen) 
  } else { 
    sleep = sleep -1
   sleepingstatus.style.width = sleep + "%" 
  }
  colorChangeBar()
}

function timerBal(){ 
  if (happy <= 5 ){
    stopTimer(tmrBal) 
  } else {
    happy = happy -1
    happystatus.style.width = happy + "%"
  }
  colorChangeBar()
}

//om de timer te laten stoppen
function stopTimer(timer){ 
  clearInterval (timer)
}

// het veranderen van kleur bij de progressiebar + het veranderen van de emotie van de hond
function colorChangeBar(){
  console.log(honger);
  if (honger <= 20 || happy <= 20 || joy <= 20 || sleep <= 20){
    hungerstatus.style.backgroundColor = 'red' //het aangeven van een andere kleur aan de balk zodra er iets anders gebeurd
    happystatus.style.backgroundColor = 'red' 
    joystatus.style.backgroundColor = 'red' 
    sleepingstatus.style.backgroundColor = 'red' 
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[4];
    h1element.textContent = "Noem je dit verzorgen!"
    console.log ("1 " + honger + " " + happy + " " + joy + " " + sleep)
  } else if (honger <= 45 || happy <= 45 || joy <= 45 || sleep <= 45){
    hungerstatus.style.backgroundColor = 'orange'
    happystatus.style.backgroundColor = 'orange'
    joystatus.style.backgroundColor = 'orange'
    sleepingstatus.style.backgroundColor = 'orange'
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[1];
    h1element.textContent = "Let je wel op! Ik wil graag dat je mij verzorgt"
    console.log ("2 " + honger + " " + happy + " " + joy + " " + sleep)
  }  else { //Hij verandert nog niet terug naar groen... Als hij weer boven het getal komt.
    hungerstatus.style.backgroundColor = 'green'
    happystatus.style.backgroundColor = 'green'
    joystatus.style.backgroundColor = 'green'
    sleepingstatus.style.backgroundColor = 'green'
    console.log ("4 " + honger + " " + happy + " " + joy + " " + sleep)
  } 
}
colorChangeBar()

hand.addEventListener ("click", geefAai)
hondenMand.addEventListener ("click", gaSlapen)
hondenVoer.addEventListener ("click", geefEten)
tennisbal.addEventListener ("click", gooiBal)
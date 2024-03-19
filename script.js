// De sounds die ik in dit document heb gebruikt komen van https://pixabay.com/ 
//Emoji heb ik van https://emojipedia.org/nl/slaapsymbool 

console.log("Dit is het spel Walking doggie");
const dier = "Hond"
let h1element = document.querySelector("h1");

//Regelen van hoe de hond eruit ziet, dmv. array
let plaatjeHondArray = ["hond1.jpeg", "hond-boos.jpeg", "hond-tong.jpeg", "hond-verbaasd.jpeg", "hond-verdrietig.jpeg"]; //de plaatjes neerzetten in de javascript

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
const audioEat = new Audio ("sounds/eating-sound-effect-36186.mp3")
const audioAww = new Audio ("sounds/aww-cute-reaction-6208.mp3")
const audioSnurk = new Audio ("sounds/pug-roncando-95042.mp3")
const audioBall = new Audio ("sounds/bouncing-ball.mp3")

//Een gif voor als alle balken vol zijn
const confetti = document.querySelector(".confetti")

function minOne (elem, value) { //een function om minder lijnen te hoeven schrijven in andere functies
  value = value -1
  elem.style.width = value + "%"
  return value //het teruggeven van de aantallen aan de honger, joy, sleep en happy
}

function geefEten() { // maak een functie aan voor de hongerbalk
  if (honger >= 100) { //Zodat het getal niet dramatisch boven de 100 komt
    return
  }
  honger = honger + 5 // dit zorgt ervoor dat er steeds 5 bij de honger komt
  hungerstatus.style.width = honger + "%" //hiermee koppel je de div met de class aan het groeien van de balk
  joy = minOne(joystatus, joy) //Het aanroepen van de functie minOne bij de specifieke elementen
  sleep = minOne(sleepingstatus, sleep)
  happy = minOne(happystatus, happy)
  console.log(joystatus.style.width)
  h1element.textContent = "Wist je dat dit mijn favoriete eten is 🍖🍖"
  audioEat.play ()//Audio laten afspelen zodra er op de button geklikt word.
}

function geefAai() {
  if (joy >= 100) {
    return
  }
  joy = joy + 5 
  joystatus.style.width = joy + "%"
  honger = minOne(hungerstatus, honger) 
  sleep = minOne(sleepingstatus, sleep)
  happy = minOne(happystatus, happy)
  h1element.textContent = "Ahh ik vind je zo lief als jij me aait ❤️❤️"
  audioAww.play ()
}

function gaSlapen() {
  if (sleep >= 100) {
    return
  }
  sleep = sleep + 5
  sleepingstatus.style.width = sleep + "%"
  honger = minOne(hungerstatus, honger) 
  joy = minOne(joystatus, joy)
  happy = minOne(happystatus, happy)
  h1element.textContent = "Het liefst slaap ik de hele dag  💤💤💤💤"
  audioSnurk.play ()
}

function gooiBal() {
  if (happy >= 100) {
    return
  }
  happy = happy + 5
  happystatus.style.width = happy + "%"
  honger = minOne(hungerstatus, honger) 
  sleep = minOne(sleepingstatus, sleep)
  joy = minOne(joystatus, joy)
  h1element.textContent = "Ik vind het harstikke leuk om met de bal te spelen 🎾🎾"
  audioBall.play ()
}

function addToAll(){ // een functie om bij alles eentje toe te voegen
  honger = honger + 3
  hungerstatus.style.width = honger + "%"
  happy = happy + 3
  happystatus.style.width = happy + "%"
  joy = joy + 3
  joystatus.style.width = joy + "%" 
  sleep = sleep + 3
  sleepingstatus.style.width = sleep + "%"
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
  else {
    honger = minOne(hungerstatus, honger) 
 }
  colorChangeBar()
}

function timerAai(){ 
  if (joy <= 5){
    stopTimer(tmrAai) 
  } else {
    joy = minOne(joystatus, joy) 
}
  colorChangeBar()
}

function timerSlapen(){ 
  if (sleep <= 5){
    stopTimer(tmrSlapen) 
  } else { 
    sleep = minOne(sleepingstatus, sleep) 
  }
  colorChangeBar()
}

function timerBal(){ 
  if (happy <= 5 ){
    stopTimer(tmrBal) 
  } else {
    happy = minOne(happystatus, happy) 
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
    h1element.textContent = "Noem je dit verzorgen!" + " " + "Probeer eens op de spatiebalk te klikken"
    console.log ("1 " + honger + " " + happy + " " + joy + " " + sleep)
    confetti.style.visibility = "hidden"
  } else if (honger <= 45 || happy <= 45 || joy <= 45 || sleep <= 45){
    hungerstatus.style.backgroundColor = 'orange'
    happystatus.style.backgroundColor = 'orange'
    joystatus.style.backgroundColor = 'orange'
    sleepingstatus.style.backgroundColor = 'orange'
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[1];
    h1element.textContent = "Let je wel op! Ik wil graag dat je mij verzorgt"
    console.log ("2 " + honger + " " + happy + " " + joy + " " + sleep)
    confetti.style.visibility = "hidden"
  }  else if (honger >= 100 && happy >= 100 && joy >= 100 && sleep >= 100){
    confetti.style.visibility = "visible"
  }
  else {
    hungerstatus.style.backgroundColor = 'green'
    happystatus.style.backgroundColor = 'green'
    joystatus.style.backgroundColor = 'green'
    sleepingstatus.style.backgroundColor = 'green'
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[0];
    console.log ("4 " + honger + " " + happy + " " + joy + " " + sleep)
    confetti.style.visibility = "hidden"
  } 
}

hand.addEventListener ("click", geefAai)
hondenMand.addEventListener ("click", gaSlapen)
hondenVoer.addEventListener ("click", geefEten)
tennisbal.addEventListener ("click", gooiBal)
document.addEventListener ("keypress", (event) => { //Hier word er een functie aangemaakt met daarin een event van de keyboard, wat lijd naar de functie addtoall
 if (event.key === " ") {
  addToAll()
}});
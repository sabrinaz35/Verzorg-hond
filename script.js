// De sounds die ik in dit document heb gebruikt komen van https://pixabay.com/ 
//Emoji heb ik van https://emojipedia.org/nl/slaapsymbool 

console.log("Dit is het spel Walking doggie");
const dier = "Hond"
let h1element = document.querySelector("h1");


//Regelen van hoe de hond eruit ziet

const hondjeStatus = 0
let plaatjeHondArray = ["hond1.jpeg", "hond-boos.jpeg", "hond-tong.jpeg", "hond-verbaasd.jpeg", "hond-verdrietig.jpeg"]; //de plaatjes neerzetten in de javascript
statushond = 0 //dit is het begin dus de eerste hond

/*document.querySelector(".hond").src= 'images/'+plaatjeHondArray[0];*/ // Hier selecteer je de plaatjes dmv een statushond, die moet je terug laten komen om het plaatje te kunnen laten veranderen.

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

let honger = 100 //waarde van de progressbalk start op nul 
let joy = 100
let sleep = 100
let happy = 100

//Alle sounds op een rijtje
let audioEat = new Audio ("sounds/eating-sound-effect-36186.mp3")
let audioAww = new Audio ("sounds/aww-cute-reaction-6208.mp3")
let audioSnurk = new Audio ("sounds/pug-roncando-95042.mp3")
let audioBall = new Audio ("sounds/bouncing-ball.mp3")

function geefEten() { // maak een functie aan voor de hongerbalk
  if (honger == 100) {
    h1element.textContent = "OEF daar heb ik nu geen behoefte aan" // dit komt in beeld als het 100 is
  } else {
    honger = honger + 5 // dit zorgt ervoor dat er steeds 1 bij de honger komt
    hungerstatus.style.width = honger + "%" //hiermee koppel je de div met de class aan het groeien van de balk
  }
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
  if (joy == 100) {
    h1element.textContent = "Blijf van mij af, ik wil niet geaaid worden"
  } else {
    joy = joy + 5 //als ik op 5 zet gaat hij buiten de border hoe moet ik dit aanpassen? 
    joystatus.style.width = joy + "%"
  }
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
  if (sleep == 100) {
    h1element.textContent = "Ik ben helemaal niet moe"
  } else {
    sleep = sleep + 5
    sleepingstatus.style.width = sleep + "%"
  }
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
  if (happy == 100) {
    h1element.textContent = "Stop met die bal gooien ik heb geen zin meer"
  } else {
    happy = happy + 5
    happystatus.style.width = happy + "%"
  }
  honger = honger - 1 
  hungerstatus.style.width = honger + "%"
  joy = joy - 1
  joystatus.style.width = joy + "%"
  sleep = sleep - 1
  sleepingstatus.style.width = sleep + "%"
  h1element.textContent = "Ik vind het harstikke leuk om met de bal te spelen 🎾🎾"
  audioBall.play ()
}

//timer toevoegen aan de bar, zodat deze afloopt
setInterval (timer1, 1000) //activeert de function timer, het getal is in milliseconden

function timer1 (){ //in deze functie gaat er steeds 1 vanaf gedurende de seconde
  honger = honger -1 
  hungerstatus.style.width = honger + "%"
  happy = happy -1
  happystatus.style.width = happy + "%"
  joy = joy -1
  joystatus.style.width = joy+ "%"
  sleep = sleep -1
  sleepingstatus.style.width = sleep + "%"
  colorChangeBar()
}

function stopTimer(){ //om de timer te laten stoppen bij 1 
  clearInterval (timer1)
}

// het veranderen van kleur bij de progressiebar + het veranderen van de emotie van de hond
function colorChangeBar (){
  console.log(honger);
  if (honger <= 20 || happy <= 20 || joy <= 20 || sleep <= 20){
    hungerstatus.style.backgroundColor = 'red' //het aangeven van een andere kleur aan de balk zodra er iets anders gebeurd
    happystatus.style.backgroundColor = 'red' 
    joystatus.style.backgroundColor = 'red' 
    sleepingstatus.style.backgroundColor = 'red' 
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[4];
    h1element.textContent = "Noem je dit verzorgen!"
  } else if (honger <= 45 || happy <= 45 || joy <= 45 || sleep <= 45){
    hungerstatus.style.backgroundColor = 'orange'
    happystatus.style.backgroundColor = 'orange'
    joystatus.style.backgroundColor = 'orange'
    sleepingstatus.style.backgroundColor = 'orange'
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[1];
    h1element.textContent = "Let je wel op! Ik wil graag dat je mij verzorgt"
  } else if (honger || happy || joy || sleep == 5){
    stopTimer()
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[0];
  } else { //Hij verandert nog niet terug naar groen... Als hij weer boven het getal komt.
    hungerstatus.style.backgroundColor = 'green'
    happystatus.style.backgroundColor = 'green'
    joystatus.style.backgroundColor = 'green'
    sleepingstatus.style.backgroundColor = 'green'
    h1element.textContent = "Je bent zo lief!!"
  } 
}
colorChangeBar()


hand.addEventListener ("click", geefAai)
hondenMand.addEventListener ("click", gaSlapen)
hondenVoer.addEventListener ("click", geefEten)
tennisbal.addEventListener ("click", gooiBal)


//  let audioEten = new Audio ("sounds/eating-sound-effect-36186.mp3") //Het ophalen van de audio uit je documenten
// audioEten.play()
 //Het aanspreken om het te laten doen, deze audio kan niet in dezelfde functie geplaatst worden.




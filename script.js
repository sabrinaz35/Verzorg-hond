// De sounds die ik in dit document heb gebruikt komen van https://pixabay.com/ 

console.log("Dit is het spel Walking doggie");
const dier = "Hond"
let h1element = document.querySelector("h1");


//Regelen van hoe de hond eruit ziet

const hondjeStatus = 0
let plaatjeHondArray = ["hond1.PNG", "hond-boos.PNG", "hond-tong.PNG", "hond-verbaasd.PNG", "hond-verdrietig.PNG"]; //de plaatjes neerzetten in de javascript
statushond = 0 //dit is het begin dus de eerste hond

/*document.querySelector(".hond").src= 'images/'+plaatjeHondArray[0];*/ // Hier selecteer je de plaatjes dmv een statushond, die moet je terug laten komen om het plaatje te kunnen laten veranderen.

const hondenVoer = document.querySelector(".hondenvoer");
const hondenMand = document.querySelector(".hondenmand");
const hand = document.querySelector(".hand");
const tennisbal = document.querySelector(".tennisbal");
/*
function updatePlaatje(){ //functie om je plaatje aan te passen
  document.querySelector(".hond").src= 'images/'+plaatjeHondArray[0]; // verander in statushond om plaatjes te veranderen
}
*/

function etenGeven() {
  statushond = statushond + 1 // door +1 een mee te geven veranderd het plaatje in de array is het 0,1,2,3,4 
  updatePlaatje() //Deze toevoegen want dat is de functie waar je plaatje aan gekoppeld is 
}

hondenVoer.addEventListener ("click", etenGeven) //Activeren van een click aan de hondenvoer en daarmee veranderd het plaatje

//Audio toevoegen aan het klikken van de buttons 
//Kan je ook op een andere manier audio toevoegen? Anders moet ik dit 4 keer doen voor elke knop 1

//De progressbar

let hungerstatus = document.querySelector(".hungerstatus"); //het toevoegen van mijn divs aan mijn javascript
let joystatus = document.querySelector(".joystatus");
let sleepingstatus = document.querySelector(".sleepingstatus");
let happystatus = document.querySelector(".happystatus");

let honger = 100 //waarde van de progressbalk start op nul 
let joy = 100
let sleep = 100
let happy = 100


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
 let audioEat = new Audio ("sounds/eating-sound-effect-36186.mp3")
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

  let audioAww = new Audio ("sounds/aww-cute-reaction-6208.mp3")
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

  let audioSnurk = new Audio ("sounds/pug-roncando-95042.mp3")
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

  let audioBall = new Audio ("sounds/bouncing-ball.mp3")
  audioBall.play ()
}

//timer toevoegen aan de bar

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
}

function stopTimer(){ //om de timer te laten stoppen bij 1 
  clearInterval (timer1)
}

// het veranderen van kleur bij de progressiebar 

function colorChangeBar (){
  if (honger,happy,joy,sleep <= 20){
    hungerstatus.style.backgroundColor = 'red' //het aangeven van een andere kleur aan de balk zodra er iets anders gebeurd
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[1];
  } else if (honger||happy||joy||sleep >= 85){
   hungerstatus.style.backgroundColor = 'green'
   document.querySelector(".hond").src= 'images/'+plaatjeHondArray[0];
  } else if (honger||happy||joy||sleep == 5){
    stopTimer()
    document.querySelector(".hond").src= 'images/'+plaatjeHondArray[2];
  } else {
    hungerstatus.style.backgroundColor = 'orange'
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




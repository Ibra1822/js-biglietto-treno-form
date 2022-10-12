
/* Scrivere (come ieri) un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */


let nomeCognomeInput = document.querySelector('#nome');
let kmInput =  document.querySelector('#km');
let etaInput = document.querySelector('#eta');
const bottoneGenera = document.querySelector('#btn')
let prezzoStandard;

// evento click su bottoneGenera

// elemento.addEventListener(nomeEvento, coseDaFare)


bottoneGenera.addEventListener('click', function(e) {
  e.preventDefault();
  const nomeCognome = nomeCognomeInput.value;
  const km =  kmInput.value;
  const eta = etaInput.value;

  console.log('Nome e cognome ', nomeCognome)
  console.log('Kilometri ', km)
  console.log('Eta', eta)
  
  //continuare qui

  let prezzokm = 0.21;

  let prezzoStandard =  km * prezzokm;

  console.log('prezzostandard',prezzoStandard);

  let maggiorenne = document.querySelector('#Maggiorenne');

  let minorenne = document.querySelector('#Minore');

  let anziano = document.querySelector('#Anziano');

  // maggiorenne = 18;

  // minorenne = 17;

  // anziano = 66;

  let scontoMinori = 0.20;

  let  scontoTotMinori;

  if(eta === minorenne){

    scontoTotMinori =  prezzoStandard - prezzoStandard * scontoMinori;
  
  }

  console.log('sonto minori attivo', scontoTotMinori);



})



// const etaMinori = 18;
 
// const scontoMinori=  0.20;

// let scontoTotMinori = prezzoStandard - prezzoStandard * scontoMinori;


// const etaAnziani = 65; 

// const scontoAnziani = 0.50;

// let scontoTotAnziani = prezzoStandard - prezzoStandard * scontoAnziani;


// if(eta < etaMinori){

//   console.log(scontoTotMinori);

// }

// else if(eta > etaAnziani){
  
//   console.log('Hai diritto a',scontoTotAnziani);


// }else{

//   console.log(prezzoStandard);

// }
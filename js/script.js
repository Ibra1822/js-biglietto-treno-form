
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

let Risultato;

bottoneGenera.addEventListener('click', function(e) {
  e.preventDefault();
  const nomeCognome = nomeCognomeInput.value;
  const km =  kmInput.value;
  const eta = etaInput.value;

  console.log('Nome e cognome ', nomeCognome)
  console.log('Kilometri ', km)
  console.log('Eta', eta)
  
  let prezzokm = 0.21;

  let prezzoStandard =  km * prezzokm;

  console.log('prezzostandard',prezzoStandard);

  let scontoMinori = 0.20;

  let  scontoTotMinori;

  let scontoAnziani = 0.50;

  let scontoTotAnziani;

  const max= 100000;

  const min= 90000;


  if(eta === 'Minore'){

    scontoTotMinori =  prezzoStandard - prezzoStandard * scontoMinori;

    document.querySelector('.nome-p').innerHTML= nomeCognome;

    console.log('sonto minori attivo', scontoTotMinori);

    document.getElementById('offerta').innerHTML='Sconto Minori';

    document.getElementById('carrozza').innerHTML= Math.floor(Math.random()* 12) +1;

    document.getElementById('codice').innerHTML= Math.floor(Math.random() * (max - min) + min);
    
    document.getElementById('costo').innerHTML= scontoTotMinori.toFixed(2);

    document.getElementById("con-title-down").style.opacity = "1";
  
  }else if(eta === 'Anziano'){

    scontoTotAnziani = prezzoStandard - prezzoStandard * scontoAnziani;
    console.log('sonto anziani attivo', scontoTotAnziani);

    document.querySelector('.nome-p').innerHTML= nomeCognome;

    document.getElementById('offerta').innerHTML='Sconto over 65';

    document.getElementById('carrozza').innerHTML=Math.floor(Math.random ()* 12) +1;

    document.getElementById('codice').innerHTML= Math.floor(Math.random() * (max - min) + min);

    document.getElementById('costo').innerHTML= scontoTotAnziani.toFixed(2);

    document.getElementById("con-title-down").style.opacity = "1";


  }else{
    console.log(prezzoStandard);

    document.querySelector('.nome-p').innerHTML= nomeCognome;

    document.getElementById('offerta').innerHTML='Prezzo Standard';

    document.getElementById('carrozza').innerHTML=Math.floor(Math.random ()* 12) +1;

    document.getElementById('codice').innerHTML= Math.floor(Math.random() * (max - min) + min);

    document.getElementById('costo').innerHTML= prezzoStandard.toFixed(2);

    document.getElementById("con-title-down").style.opacity = "1";

    
  }
})





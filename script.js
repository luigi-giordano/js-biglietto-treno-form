/*VARIABILI*/
const priceTicketKm = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;

//SELEZIONO GLI ELEMENTI DEL FORM
const nomeCognome = document.getElementById('name');
const kmPercorsi = document.getElementById('km');
const etàPasseggero = document.getElementById('ageGroup');



//SELEZIONO GLI ELEMENTI TARGET
const nomePasseggero = document.getElementById('nome-passeggero')

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
  //INIBISCO L'INVIO DEL FORM
  event.preventDefault();
  console.log(event);
  nomePasseggero.innerText = nomeCognome.value;


})


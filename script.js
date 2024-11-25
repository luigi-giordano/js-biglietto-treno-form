/*VARIABILI*/
const priceTicketKm = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;



// Funzione per calcolare il prezzo
function calcoloPrezzo(km, eta) {
  const prezzoPerKm = 0.21;
  let prezzoTotale = km * prezzoPerKm;

  if (eta === "minorenne") {
    prezzoTotale *= 0.8;
} else if (eta === "over65") {
    prezzoTotale *= 0.6;
}

return prezzoTotale.toFixed(2);
}

//SELEZIONO GLI ELEMENTI DEL FORM
const nomeCognome = document.getElementById('name');
const kmPercorsi = document.getElementById('km');
const etàPasseggero = document.getElementById('ageGroup');



//SELEZIONO GLI ELEMENTI TARGET
const nomePasseggero = document.getElementById('nome-passeggero');
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codiceCp = document.getElementById('codice-cp');
const costoBiglietto = document.getElementById('costo-biglietto');



const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
  //INIBISCO L'INVIO DEL FORM
  event.preventDefault();

  // Preleviamo i valori dai campi del form
  const nome = nomeCognome.value;
  const km = parseFloat(kmPercorsi.value);
  const eta = etàPasseggero.value;       

  // Calcoliamo il prezzo del biglietto
  const prezzo = calcoloPrezzo(km, eta);

  // Mostriamo i dati sul biglietto
  nomePasseggero.innerText = nome;
  costoBiglietto.innerText = `${prezzo}€`;

  document.getElementById('card-biglietto').style.display = 'block';
 
});


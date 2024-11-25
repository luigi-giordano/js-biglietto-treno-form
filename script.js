/*VARIABILI*/
const priceTicketKm = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;

const nomeCognome = document.getElementById('name');
const kmPercorsi = document.getElementById('km');
const etàPasseggero = document.getElementById('ageGroup');

const priceTicket = 0.21 * totalKm;

let finalPrice = priceTicket * priceTicketKm;

if (agePassenger < 18){
  const priceUnderAge = priceTicket * (1 - discountUnderAge / 100);
  finalPrice = priceUnderAge
} else if (agePassenger > 65){
  const priceOverAge = priceTicket * (1 - discountOverAge / 100);
  finalPrice = priceOverAge
}
console.log('Il prezzo finale sarà', finalPrice.toFixed(2));
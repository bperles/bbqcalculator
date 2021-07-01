// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputHours = document.getElementById("hours");

let result = document.getElementById("result");

function calc()
{
  console.log("Calculating....");

  let adults = parseInt(inputAdults.value);
  let kids = parseInt(inputKids.value);
  let hours = inputHours.value;

  let qtyMeat = (adults + (kids/2)) * meatPP(hours);
  let qtyBeer = (adults)*beerPP(hours) ;
  let qtySoda = (adults + (kids/2))*sodaPP(hours) ;

  result.innerHTML = `<p>${qtyMeat/1000} kg of meat </p>`
  result.innerHTML += `<p>${Math.ceil(qtyBeer/350)} cans of beer </p>`
  result.innerHTML += `<p>${Math.ceil(qtySoda/2000)} of Soda Bottles (2 L) </p>`

}

function meatPP(hours){
if (hours>=6){
  return 650;
}
else{
  return 400;
}

}

function beerPP(){
  if (hours>=6){
    return 2000;
  }
  else{
    return 1200;
  }
  }

function sodaPP(){
  if (hours>=6){
    return 1500;
  }
  else{
    return 1000;
  }
}



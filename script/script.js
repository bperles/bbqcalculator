// Child are the same as 0.5 person

let inputAdults = document.getElementById('adults')

let inputKids = document.getElementById('kids')
let inputHours = document.getElementById('hours')

let result = document.getElementById('result')

let meatInit = (beerInit = sodaInit = meatLast = beerLast = sodaLast = 0)

document.addEventListener('DOMContentLoaded', function () {
  // toda vez que inicializar ele vai setar os valores padrões
  if (sessionStorage.getItem('runBefore') == null) {
    sessionStorage.clear()
    sessionStorage.setItem('meatInit', 400)
    sessionStorage.setItem('beerInit', 1200)
    sessionStorage.setItem('sodaInit', 1000)
    sessionStorage.setItem('meatLast', 650)
    sessionStorage.setItem('beerLast', 2000)
    sessionStorage.setItem('sodaLast', 1500)
    sessionStorage.setItem('runBefore', true)
  }

  meatInit = sessionStorage.getItem('meatInit')
  beerInit = sessionStorage.getItem('beerInit')
  sodaInit = sessionStorage.getItem('sodaInit')
  meatLast = sessionStorage.getItem('meatLast')
  beerLast = sessionStorage.getItem('beerLast')
  sodaLast = sessionStorage.getItem('sodaLast')

  document.getElementById('meatInit').value = sessionStorage.getItem('meatInit')
  document.getElementById('beerInit').value = sessionStorage.getItem('beerInit')
  document.getElementById('sodaInit').value = sessionStorage.getItem('sodaInit')
  document.getElementById('meatLast').value = sessionStorage.getItem('meatLast')
  document.getElementById('beerLast').value = sessionStorage.getItem('beerLast')
  document.getElementById('sodaLast').value = sessionStorage.getItem('sodaLast')
})

function calc() {
  console.log('Calculating....')

  let adults = parseInt(inputAdults.value)
  if (isNaN(adults)) {
    adults = 0
  }

  let kids = parseInt(inputKids.value)
  if (isNaN(kids)) {
    kids = 0
  }

  let hours = inputHours.value

  let qtyMeat = (adults + kids / 2) * meatPP(hours)
  let qtyBeer = adults * beerPP(hours)
  let qtySoda = (adults + kids / 2) * sodaPP(hours)

  result.innerHTML = `<p>${qtyMeat / 1000} kg of meat </p>`
  result.innerHTML += `<p>${Math.ceil(qtyBeer / 350)} cans of beer </p>`
  result.innerHTML += `<p>${Math.ceil(
    qtySoda / 2000
  )} of Soda Bottles (2 L) </p>`
}

function meatPP(hours) {
  if (hours >= 6) {
    return meatLast
  } else {
    return meatInit
  }
}

function beerPP() {
  if (hours >= 6) {
    return beerLast
  } else {
    return beerInit
  }
}

function sodaPP() {
  if (hours >= 6) {
    return sodaLast
  } else {
    return sodaInit
  }
}

function settings() {
  sessionStorage.setItem('meatInit', document.getElementById('meatInit').value)
  sessionStorage.setItem('beerInit', document.getElementById('beerInit').value)
  sessionStorage.setItem('sodaInit', document.getElementById('sodaInit').value)
  sessionStorage.setItem('meatLast', document.getElementById('meatLast').value)
  sessionStorage.setItem('beerLast', document.getElementById('beerLast').value)
  sessionStorage.setItem('sodaLast', document.getElementById('sodaLast').value)

  meatInit = sessionStorage.getItem('meatInit')
  beerInit = sessionStorage.getItem('beerInit')
  sodaInit = sessionStorage.getItem('sodaInit')
  meatLast = sessionStorage.getItem('meatLast')
  beerLast = sessionStorage.getItem('beerLast')
  sodaLast = sessionStorage.getItem('sodaLast')
}

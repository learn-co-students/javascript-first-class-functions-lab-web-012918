function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier
  }
}

var doubler = createMultiplier(2)

function doubler() {}

var tripler = createMultiplier(3)

function tripler() {}

function multiplier(a, b) {return a * b}

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)

var countdown = function (cb) {
  setTimeout(cb, 2000);
}

function multiplierValue(number) {

  return function (value) {
    return number * value
  }
}

const doubler = multiplierValue(2)

const tripler = multiplierValue(3)

function multiplier(val1, val2) {
  return val1 * val2
}

let doublerWithBind = multiplier.bind(null, 2)
let triplerWithBind = multiplier.bind(null, 3)

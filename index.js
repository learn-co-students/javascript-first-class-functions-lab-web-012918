function countdown(callback) {
  window.setTimeout(function(){
    callback()
  }, 2000)
}

function createMultiplier(multiplier) {
  return function(value) {
      return value * multiplier
  }
}


function multiplier(value1, value2) {
  return value1 * value2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

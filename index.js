function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(mult){
  return function(num){
    return num * mult
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(createMultiplier, value){
  return createMultiplier * value
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

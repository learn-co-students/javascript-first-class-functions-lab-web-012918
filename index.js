function countdown(callback){
  window.setTimeout(callback, 2)
}

function createMultiplier(multiplierValue){
   return function(num){
     return num * multiplierValue
   }
}

function multiplier(num1, num2){
  return num1 * num2
  }

// const doubler = createMultiplier(2)
// const tripler = createMultiplier(3)
// const doublerWithBind = multiplier.bind(null, 2)
// const triplerWithBind = multiplier.bind(null, 3)
var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

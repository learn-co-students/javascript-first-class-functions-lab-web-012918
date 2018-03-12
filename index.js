
  function countdown(callback) {
    window.setTimeout(callback, 2000)
  }

  function createMultiplier(n) {
    return function (number) {
      return n * number
    }
  }

  const doubler = createMultiplier(2);

  const tripler = createMultiplier(3);

  function multiplier(multiplierValue, value) {
    return multiplierValue * value
  }

  const doublerWithBind = multiplier.bind(2, value);

  const triplerWithBind = multiplier.bind(3, value);

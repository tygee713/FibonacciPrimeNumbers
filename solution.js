const solution = (n) => {
  let currentNumber = 1
  let numbers = []
  let primeNumbers = []

  for (let i=0; i<n; i++) {
    if (i > 1) {
      let isPrime = true
      currentNumber = numbers[i-1] + numbers[i-2]
      for (let x=0; x<primeNumbers.length; x++) {
        if (currentNumber % primeNumbers[x] === 0) {
          isPrime = false
          break
        }
      }
      isPrime && primeNumbers.push(currentNumber)
    }

    numbers.push(currentNumber)
  }

  return primeNumbers
}
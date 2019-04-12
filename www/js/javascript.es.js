'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const calcFunction = (price, tax) => {
    const result = price + price * tax
    return result
  }
  const myResult = calcFunction(100, 0.8)
  alert(myResult)
})

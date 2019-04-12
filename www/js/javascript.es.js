'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const myFunction = (a, b) => {
    if (a >= 100) {
      return a
    }
    return b
  }
  alert(myFunction(50))
})

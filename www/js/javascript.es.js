'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const randomArray1 = crypto.getRandomValues(new Uint16Array(10))
  console.log(randomArray1)
  console.log(randomArray1.join(''))
  randomArray1.join('')

  console.log(crypto.getRandomValues(new Uint32Array(10)).join(''))
})

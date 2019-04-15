'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const myPrice = 39

  if (myPrice >= 50) {
    alert('50以上')
  } else if (myPrice >= 10) {
    alert('10以上50未満')
  } else {
    alert('10未満')
  }
})

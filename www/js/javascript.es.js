'use strict'

document.addEventListener('DOMContentLoaded', () => {
  if (true) {
    alert('hi')
  }

  const randomNum = Math.random() * 10

  if (randomNum >= 5) {
    alert('5以上')
  } else {
    alert('5未満')
  }
})

'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('.textarea')
  const string_num = document.querySelector('.string_num')
  textarea.addEventListener('keyup', () => {
    const inputText = textarea.value
    string_num.innerText = inputText.length
  })
})

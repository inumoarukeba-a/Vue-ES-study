'use strict'

document.addEventListener('DOMContentLoaded', () => {
  for (let index = 0; index < 10; index++) {
    if (index % 2 === 0) {
      continue
    }
    console.log(index)
  }
  console.log('ループ終了')
})

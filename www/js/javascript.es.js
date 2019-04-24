'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const myString = 'javascriptを覚えよう'

  // 含まれる場合
  const a1 = myString.indexOf('javascript')
  console.log(a1)

  const a2 = myString.indexOf('覚えよう')
  console.log(a2)

  const a3 = myString.indexOf('a')
  console.log(a3)

  const b1 = myString.indexOf('HTML')
  console.log(b1)

  const b2 = myString.indexOf('J')
  console.log(b2)

  const c1 = myString.indexOf('javascript', 4)
  console.log(c1)
})

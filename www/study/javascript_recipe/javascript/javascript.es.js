'use strict'
class MyClass {
  constructor() {
    this.count = 0
    const button = document.querySelector('#button')
    const text = document.querySelector('#text')
    button.addEventListener('click', () => {
      this.count += 1
      text.innerHTML = this.count
    })
  }
}
new MyClass()

'use strict'

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('berry')
  }, 1000)
})

promise.then(value => {
  console.log(value)
})

'use strict'

Promise.resolve()
  .then(() => {
    new Promise(resolve => {
      setTimeout(() => {
        console.log('1', new Date().toLocaleDateString())
        resolve()
      }, 1000)
    })
  })
  .then(() => {
    new Promise(resolve => {
      setTimeout(() => {
        console.log('2', new Date().toLocaleDateString())
        resolve()
      }, 1000)
    })
  })

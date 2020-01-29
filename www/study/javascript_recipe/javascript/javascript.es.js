'use strict'

const flag = false
const promise = new Promise((resolve, reject) => {
  if (flag === true) {
    resolve('berry')
  } else {
    reject('mekabu')
  }
})
  .then(value => {
    console.log(value)
  })
  .catch(value => {
    console.log(value)
  })

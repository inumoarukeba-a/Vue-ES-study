'use strict'

const start = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('1', new Date().toLocaleTimeString())
      resolve()
    }, 1000)
  })
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('2', new Date().toLocaleTimeString())
      resolve()
    }, 1000)
  })
}
start()

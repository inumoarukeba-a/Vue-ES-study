'use strict'

const arrFunc = []
for (let i = 0; i < 5; i++) {
  const func = resolve => {
    console.log(`処理${i}を開始`, new Date().toLocaleTimeString())
    const delayMsec = 2000 * Math.random()

    setTimeout(() => {
      console.log(`処理${i}終了`, new Date().toLocaleTimeString())
      resolve()
    }, delayMsec)
  }
  arrFunc.push(func)
}

console.log(arrFunc)

const arrPromise = arrFunc.map(func => new Promise(func))

console.log(arrPromise)

Promise.all(arrPromise).then(() => {
  console.log('Finish')
})

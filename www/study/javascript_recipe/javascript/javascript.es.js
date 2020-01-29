'use strict'

const listFunctions = []

for (let i = 0; i < 5; i++) {
  const func = resolve => {
    setTimeout(() => {
      console.log(i)
      resolve()
    }, 1000)
  }
  listFunctions.push(func)
}

console.log(listFunctions)

const execute = async resolve => {
  for (let i = 0; i < listFunctions.length; i++) {
    await new Promise(listFunctions[i])
  }
}
execute()

'use strict'

class MyClass {
  consructor() {
    this.result
    this.error
    this.name
    this.age
  }
}

const getApi = responce => {
  const myClass = new MyClass()

  myClass.result = responce.result
  myClass.error = responce.error
  myClass.name = responce.name
  myClass.age = responce.age

  console.log(`
    result: ${myClass.result}
    error: ${myClass.error}
    name: ${myClass.name}
    age: ${myClass.age}
  `)
}

const responseData = {
  result: true,
  name: '中野',
  age: 29,
}

getApi(responseData)

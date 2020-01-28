'use strict'

class MyParent {
  method() {
    console.log('親クラス')
  }
}

class MyChild extends MyParent {
  method02() {
    console.log('子クラス')
  }
}

const myChild = new MyChild()
myChild.method()
myChild.method02()

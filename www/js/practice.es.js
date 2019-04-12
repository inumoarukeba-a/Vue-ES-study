'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '.app',
    data: {
      message: 'Hello Vue.hs!',
    },
  })

  console.log(app.message)
})

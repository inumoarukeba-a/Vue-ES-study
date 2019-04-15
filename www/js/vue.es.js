'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '.app',
    data: {
      message: {
        value: 'Hello verogpue.js!',
      },
      list: ['りんご', 'ばなな', 'いちご'],
      num: 1,
    },
  })
})

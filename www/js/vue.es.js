'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      isChild: true,
      isActive: true,
      textColor: 'red',
      bgColor: 'lightgray',
    },
  })
})

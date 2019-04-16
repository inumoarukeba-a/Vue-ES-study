'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      count: 0,
    },
    methods: {
      increment: function() {
        var vm = this
        setTimeout(function() {
          vm.count++
        }, 100)
        setTimeout(
          function() {
            this.count++
          }.bind(this),
          100
        )
        setTimeout(() => {
          this.count++
        }, 100)
        setTimeout(this.callback, 100)
      },
    },
  })
})

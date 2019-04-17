'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      list: [],
    },
    created() {
      axios
        .get('/js/list.json')
        .then(response => {
          this.list = response.data
        })
        .catch(e => {
          console.error(e)
        })
    },
    methods: {
      doAdd() {
        var max = this.list.reduce(function(a, b) {
          return a > b.id ? a : b.id
        }, 0)
        this.list.push({
          id: max + 1,
          name: this.name,
          hp: 500,
        })
      },
      doRemove(index) {
        this.list.splice(index, 1)
      },
      doAttack(index) {
        this.list[index].hp -= 10 // HPを減らす
      },
    },
  })
})

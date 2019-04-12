'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '.app',
    data: {
      message: 'hello vue js !',
      count: '初期メッセージ',
      list: ['りんご', 'ここあ', 'グリーンバナナ粉'],
    },
    methods: {
      handleClick: event => {
        alert(event.target)
      },
    },
  })
})

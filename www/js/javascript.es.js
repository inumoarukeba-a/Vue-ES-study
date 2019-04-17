'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let degree = 0
  const element = document.querySelector('.aiueo')
  loop()

  /**
   * 画面更新ごとに実行される関数
   */
  function loop() {
    // 回転させたい角度をラジアンで求める
    const rotation = (degree * Math.PI) / 180
    // 回転角から位置を求める
    const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50
    const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50
    // elementの位置として反映する
    element.style.transform = `translate(${targetX}px,${targetY}px)`
    // 角度を1度増やす
    degree += 1
    // 次の画面更新タイミングでloop()を実行する
    requestAnimationFrame(loop)
  }
})

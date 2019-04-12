'use strict'

document.addEventListener('DOMContentLoaded', () => {
  /**
   * 税込みの値段を返す関数
   * @param prices 価格
   * @returs {number}
   */
  const calcSum = (...prices) => {
    let result = 0
    for (const value of prices) {
      result += value
    }
    return result
  }

  alert(calcSum(10, 20))
  alert(calcSum(10, 10, 10, 10, 10, 10, 10, 10))
})

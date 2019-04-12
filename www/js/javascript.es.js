'use strict'

document.addEventListener('DOMContentLoaded', () => {
  /**
   * 税込みの値段を返す関数
   * @param price 価格
   * @param tax 税率
   */
  const calcFunction = (price, tax = 0.08) => {
    const result = price + price * tax
    return result
  }

  const result1 = calcFunction(100)
  alert(result1)

  const result2 = calcFunction(100, 0.1)
  alert(result2)
})

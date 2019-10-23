'use strict'

// ================================================= */
// _window
// ================================================= */
const _window = (() => {
  let width, height, scrollTop

  const setVariable = () => {
    width = window.innerWidth
    height = document.documentElement.clientHeight
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  }
  setVariable()

  const setEvent = OBJECT => {
    if (OBJECT.onLoad) {
      window.addEventListener('load', () => {
        OBJECT.onLoad()
      })
    }

    if (OBJECT.onResize) {
      let resizeTimer = false
      window.addEventListener('resize', () => {
        if (resizeTimer !== false) {
          clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(() => {
          setVariable()
          OBJECT.onResize()
        }, 200)
      })
    }

    if (OBJECT.onScroll) {
      let resizeTimer = false
      window.addEventListener('scroll', () => {})
    }
  }

  return {
    setVariable: setVariable,
    width: width,
    height: height,
    scrollTop: scrollTop,
    setEvent: setEvent,
  }
})()

// ================================================= */
// _inView
// ================================================= */
const _inView = (() => {
  const element = document.querySelectorAll('.inView')
  const length = element.length
  let finish
  let ary = []
  let finishFlagAry = new Array(length)

  const init = () => {
    for (let i = 0; i < length; i++) {
      let A = element[i].getBoundingClientRect()
      ary.push(A.top + _window.scrollTop)
    }
  }

  const checkComplete = () => {
    for (let i = 0; i < length; i++) {
      if (!finishFlagAry[i]) {
        return false
      }
      if (i == length - 1) {
        return true
      }
    }
  }

  const run = () => {
    if (checkComplete()) {
      //全て完了していたら
      return false
    }
    const now = window.pageYOffset + _window.height
    for (let i = 0; i < length; i++) {
      const A = ary[i] // - _window.H;
      if (now > A) {
        element[i].classList.add('-inViewActive')
        finishFlagAry[i] = true
      }
    }
  }
  return {
    init: init,
    finish: finish,
    run: run,
  }
})()

// ================================================= */
// 実行部分
// ================================================= */
_window.setEvent({
  onLoad: () => {
    _inView.init()
    _inView.run()
  },
  onResize: () => {
    if (!_inView.finish) {
      _inView.init()
      _inView.run()
    }
  },
  onScroll: () => {
    _inView.run()
  },
})

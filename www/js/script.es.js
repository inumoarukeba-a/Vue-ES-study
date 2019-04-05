'use strict'

// ================================================= */
// _window
// ================================================= */
const _window = (function() {
  let width, height, scrollTop

  const setVariable = function() {
    width = window.innerWidth
    height = document.documentElement.clientHeight
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  }
  setVariable()

  const setEvent = function(OBJECT) {
    if (OBJECT.onLoad) {
      window.addEventListener(
        'load',
        function() {
          OBJECT.onLoad()
        },
        false
      )
    }

    if (OBJECT.onResize) {
      let resizeTimer = false
      window.onresize = function() {
        if (resizeTimer !== false) {
          clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(function() {
          setVariable()
          OBJECT.onResize()
        }, 200)
      }
    }

    if (OBJECT.onScroll) {
      let resizeTimer = false
      window.onscroll = function(e) {
        OBJECT.onScroll(this)
      }
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
const _inView = (function() {
  const element = document.querySelectorAll('.inView')
  const length = element.length
  let finish
  let ary = []
  let finishFlagAry = new Array(length)

  const init = function() {
    for (let i = 0; i < length; i++) {
      let A = element[i].getBoundingClientRect()
      ary.push(A.top + _window.scrollTop)
    }
  }

  const checkComplete = function() {
    for (let i = 0; i < length; i++) {
      if (!finishFlagAry[i]) {
        return false
      }
      if (i == length - 1) {
        return true
      }
    }
  }

  const run = function() {
    if (checkComplete()) {
      //全て完了していたら
      return false
    }
    let now = window.pageYOffset + _window.height
    for (let i = 0; i < length; i++) {
      let A = ary[i] // - _window.H;
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
  onLoad: function() {
    _inView.init()
    _inView.run()
  },
  onResize: function() {
    if (!_inView.finish) {
      _inView.init()
      _inView.run()
    }
  },
  onScroll: function(THIS) {
    _inView.run()
  },
})

'use strict'

/**
 * Accordion
 *
 * @author Ataru Nakano
 */
const accordion = () => {
  const $TRIGGER = document.querySelectorAll('.accordion__trigger')
  const $CONTENTS = document.querySelectorAll('.accordion__contents')
  const HEIGHT = []

  const initialize = () => {
    for (let i = 0; i < $CONTENTS.length; i++) {
      ;(n => {
        $CONTENTS[n].style.height = 'auto'
        HEIGHT[n] = $CONTENTS[n].clientHeight
        $CONTENTS[n].style.height = '0px'
        $TRIGGER[n].addEventListener('click', () => {
          const NOW_HEIGHT = $CONTENTS[n].style.height
          $CONTENTS[n].style.height =
            NOW_HEIGHT == '' || NOW_HEIGHT == '0px' ? `${HEIGHT[n]}px` : `0px`
        })
      })(i)
    }
  }

  initialize()
}

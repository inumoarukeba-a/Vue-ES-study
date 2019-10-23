/**
 * Import URL Conversion
 */
;(() => {
  /**
   * Options
   */
  const HTTP = '//web-responsive-template.example.mentai/'
  const LOCAL_DOMAIN = 'example.test'

  /**
   * Stop Duplicate
   */
  const $URL_CONVERSION = document.querySelector('.urlConversion')
  if ($URL_CONVERSION != null) {
    URLConversion(LOCAL_DOMAIN)
    return false
  }

  /**
   * Set File
   */
  const $FILE = ['Script', 'CSS', 'WebFont']
  const FILE_LENGTH = $FILE.length
  const FRAGMENT = document.createDocumentFragment()

  // Core Script
  $FILE[0] = document.createElement('script')
  $FILE[0].src = `${HTTP}development/url_conversion/javascript/script.js`
  $FILE[0].setAttribute('defer', '')

  // CSS
  $FILE[1] = document.createElement('link')
  $FILE[1].rel = 'stylesheet'
  $FILE[1].href = `${HTTP}development/url_conversion/css/url.css`

  // Web Font
  $FILE[2] = document.createElement('link')
  $FILE[2].rel = 'stylesheet'
  $FILE[2].href = `https://fonts.googleapis.com/css?family=Roboto|Noto+Sans+JP&display=swap`

  /**
   * Append
   */
  for (let i = 0; i < FILE_LENGTH; i++) {
    FRAGMENT.appendChild($FILE[i])
  }
  document.body.appendChild(FRAGMENT)

  /**
   * Load Complete
   */
  const loadComplete = () => {
    counter++
    // All File Load
    if (counter === FILE_LENGTH) {
      URLConversion(LOCAL_DOMAIN) // script.jsに記載
    }
  }

  /**
   * Trigger
   */
  let counter = 0
  const LISTENER_OPTION = { once: true }
  for (let i = 0; i < FILE_LENGTH; i++) {
    ;(n => {
      if ($FILE[n].complete) {
        loadComplete()
        return
      }
      $FILE[n].addEventListener('load', loadComplete(), LISTENER_OPTION)
    })(i)
  }
})()

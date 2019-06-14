/**
 * Import URL Conversion
 */
;(() => {
  /**
   * Options
   */
  const HTTP = 'https://web-responsive-template.example.php72/'
  const LOCAL_DOMAIN = 'example.php72'

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
  for (let i = 0; i < $FILE.length; i++) {
    FRAGMENT.appendChild($FILE[i])
  }
  document.body.appendChild(FRAGMENT)

  /**
   * Trigger
   */
  let counter = 0
  for (let i = 0; i < $FILE.length; i++) {
    ;(n => {
      $FILE[n].addEventListener('load', () => {
        counter++
        // All File Load
        if (counter == $FILE.length) {
          URLConversion(LOCAL_DOMAIN) // script.jsに記載
        }
      })
    })(i)
  }
})()

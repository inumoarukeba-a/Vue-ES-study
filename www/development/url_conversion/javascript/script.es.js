/**
 * URL Conversion
 */
const URLConversion = localDomain => {
  /**
   * Stop Duplicate
   */
  const $URL_CONVERSION = document.querySelector('.urlConversion')
  if ($URL_CONVERSION != null) {
    $URL_CONVERSION.classList.add('-opened')
    return false
  }

  /**
   * Get URL
   */
  const NOW_URL = location.href // https://www.n-e-u.com/sample.php
  const NOW_HOST = location.host // www.n-e-u.com
  const NOW_PATH = location.pathname.replace('/', '') // sample.php
  const NOW_ID =
    NOW_HOST.indexOf('example.') !== -1
      ? NOW_HOST.replace(/www./, '').split('.')[0] // n-e-u
      : NOW_HOST // www.n-e-u.com

  /**
   * Set UI
   */
  const $HTML = document.createElement('div')
  $HTML.className = 'urlConversion'
  $HTML.innerHTML = `<div class="urlConversion__wrap">
    <div class="urlConversion__list">
      <a class="urlConversion__link">ローカル</a>
      <a class="urlConversion__link">ノイローカル</a>
      <a class="urlConversion__link">テストサーバー</a>
      <a class="urlConversion__link">本番サーバー</a>
    </div>
    <div class="urlConversion__form">
      <label class="urlConversion__label">
        <span class="urlConversion__caption">URL</span>
        <input class="urlConversion__input" type="text" placeholder="n-e-u  /  www.n-e-u.co.jp  /  n-e-u.testup.jp" value="${NOW_ID}">
      </label>
    </div>
  </div>`
  document.body.appendChild($HTML)

  /**
   * Get DOM
   */
  const $INPUT_TEXT = document.querySelector('.urlConversion__input')
  const $INPUT_LABEL = document.querySelector('.urlConversion__label')
  const $LINK = document.querySelectorAll('.urlConversion__link')
  const LINK_LENGTH = $LINK.length

  /**
   * Set Input Event
   */
  const inputEvent = () => {
    $INPUT_TEXT.addEventListener('focus', () => {
      $INPUT_LABEL.classList.add('-focus')
    })
    $INPUT_TEXT.addEventListener('blur', () => {
      $INPUT_LABEL.classList.remove('-focus')
    })
    $INPUT_TEXT.addEventListener('keyup', event => {
      const INPUT_VALUE = event.target.value
      $INPUT_LABEL.classList.remove('-cookie')
      getJson({
        fetchID: INPUT_VALUE,
        firstFlag: false,
      })
    })
  }

  /**
   * Get JSON
   */
  const getJson = ({ fetchID = null, firstFlag = false } = {}) => {
    const ENCODE_URL = encodeURI(fetchID)
    const JSON_URL = `//www.example.pizza/projects/api/detail/${ENCODE_URL}`
    fetch(JSON_URL)
      .then(response => {
        return response.ok
          ? response.json()
          : Promise.reject(new Error('Error'))
      })
      .then(text => {
        // Set Data
        const URL_SETTINGS = [
          {
            // Local
            server: true,
            url: `//${text.subdomain}.${localDomain}/${NOW_PATH}`,
            current: localDomain,
          },
          {
            // Neu Local
            server: text.server,
            url: `//${text.subdomain}.example.${text.server}/${NOW_PATH}`,
            current: text.server,
          },
          {
            // Test Server
            server: text.test_url,
            url: `${text.test_url}${NOW_PATH}`,
            current: text.test_url,
          },
          {
            // Production Server
            server: text.url,
            url: `${text.url}${NOW_PATH}`,
            current: text.url,
          },
        ]
        // Set Link
        setLink(URL_SETTINGS)
        // $HTML Remove Class
        $INPUT_LABEL.classList.remove('-error')
        // Set Cookie
        if (navigator.cookieEnabled) {
          document.cookie = 'url_id=' + fetchID
        }
      })
      .catch(error => {
        // Reset Class
        setLink('null')
        // Focus Input
        $INPUT_TEXT.focus()
        // $HTML Add Class
        $INPUT_LABEL.classList.add('-error')
        $INPUT_LABEL.setAttribute('data-text', '正しいURLを入力してください')
        if (firstFlag) {
          // Reset Value
          $INPUT_TEXT.value = ''
        }
        // Get Cookie
        if (firstFlag && navigator.cookieEnabled && document.cookie != '') {
          getCookie()
        }
      })
    if (firstFlag) {
      // Show UI
      setTimeout(() => {
        $HTML.classList.add('-opened')
      }, 1)
    }
  }

  /**
   * Get Cookie
   */
  const getCookie = () => {
    // Split Cookie
    const COOKIE_ARRAY = []
    const TEMPORARY = document.cookie.split('; ')
    const TEMPORARY_LENGTH = TEMPORARY.length
    for (let i = 0; i < TEMPORARY_LENGTH; i++) {
      ;(n => {
        const DATA = TEMPORARY[n].split('=')
        COOKIE_ARRAY[DATA[0]] = DATA[1]
      })(i)
    }
    // Post JSON
    if (COOKIE_ARRAY['url_id']) {
      $INPUT_TEXT.value = COOKIE_ARRAY['url_id']
      $INPUT_LABEL.classList.add('-cookie')
      $INPUT_LABEL.setAttribute('data-text', 'Cookieを利用しました。')
      getJson({
        fetchID: COOKIE_ARRAY['url_id'],
        firstFlag: false,
      })
    }
  }

  /**
   * Set Link
   */
  const setLink = options => {
    for (let i = 0; i < LINK_LENGTH; i++) {
      ;(n => {
        // Get JSON Error
        if (!options[n].server || options === null) {
          $LINK[n].classList.add('-disabled')
          $LINK[n].classList.remove('-current')
          $LINK[n].href = ''
          return
        }
        // Set Current
        const SERVER = options[n].current.replace(/http:|https:/, '')
        if (NOW_URL.indexOf(SERVER) != -1) {
          $LINK[n].classList.add('-current')
        } else {
          $LINK[n].classList.remove('-current')
        }
        // Set Link
        $LINK[n].classList.remove('-disabled')
        $LINK[n].href = options[n].url
      })(i)
    }
  }

  /**
   * Close UI
   */
  const closeUI = () => {
    window.addEventListener('keydown', () => {
      const KEY_CODE = event.keyCode
      // Escape
      if (KEY_CODE == 27) {
        $HTML.classList.remove('-opened')
      }
    })
  }

  /**
   * Call Function
   */
  inputEvent()
  getJson({ fetchID: NOW_ID, firstFlag: true })
  closeUI()
}

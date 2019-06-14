/**
 * URL Conversion
 */
;(function() {
  document.getElementsByTagName('title')[0].innerText
})()
const URLConversion = () => {
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
  const LOCAL_DOMAIN = 'example.php72' // Local domain
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
  </div>
  <link href="https://fonts.googleapis.com/css?family=Roboto|Noto+Sans+JP&display=swap" rel="stylesheet">
  <style>.urlConversion *,.urlConversion :after,.urlConversion :before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-repeat:no-repeat;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:transparent}.urlConversion{position:fixed;width:100%;left:0;top:0;z-index:99999;background:rgba(36,41,46,.95);padding:24px 40px;-webkit-transition:-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:transform .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;-webkit-transform:translateY(-138.2%);transform:translateY(-138.2%);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Roboto,"Noto Sans JP",sans-serif}.urlConversion.-opened{-webkit-transform:translateY(0);transform:translateY(0)}.urlConversion__wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.urlConversion__list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}.urlConversion__link{cursor:pointer;outline:0;padding:0;border-radius:3px;line-height:1;border:1px solid #fff;background:#fff;color:#24292e;padding:12px 24px;font-size:13px;font-family:Roboto,"Noto Sans JP",sans-serif;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.urlConversion__link,.urlConversion__link:active,.urlConversion__link:hover,.urlConversion__link:link,.urlConversion__link:visited{text-decoration:none;color:#24292e}.urlConversion__link:hover{background:0 0;color:#fff;-webkit-box-shadow:0 3px 5px rgba(158,158,158,.1);box-shadow:0 3px 5px rgba(158,158,158,.1);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.urlConversion__link:not(.-disabled){-webkit-transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,transform .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s}.urlConversion__link.-disabled,.urlConversion__link:not([href]){border-color:rgba(255,255,255,0);background:rgba(255,255,255,.382);color:rgba(255,255,255,.618);pointer-events:none;cursor:default}.urlConversion__link.-current{border-color:transparent;color:#fff;background-color:transparent;position:relative;pointer-events:none;cursor:default}.urlConversion__link.-current:before{content:'';position:absolute;left:50%;bottom:0;-webkit-transform:translateY(33px) translateX(-50%);transform:translateY(33px) translateX(-50%);width:0;height:0;border-style:solid;border-width:8px 8px 0 8px;border-color:rgba(36,41,46,.9) transparent transparent transparent}.urlConversion__link+.urlConversion__link{margin-left:8px}.urlConversion__form{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1}.urlConversion__label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;border:1px solid rgba(255,255,255,.125);background:rgba(255,255,255,.125);border-radius:3px;padding:12px 16px;width:100%;-webkit-transition:border .3s cubic-bezier(.47,0,.745,.715) 0s;transition:border .3s cubic-bezier(.47,0,.745,.715) 0s;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.urlConversion__label:after{content:attr(data-text);display:block;font-family:Roboto,"Noto Sans JP",sans-serif;font-size:12px;line-height:1;opacity:0;-webkit-transition:opacity .3s cubic-bezier(.47,0,.745,.715) 0s;transition:opacity .3s cubic-bezier(.47,0,.745,.715) 0s;color:#fff}.urlConversion__label.-focus{border-color:#fff;border-color:rgba(255,255,255,.382)}.urlConversion__label.-cookie:after{opacity:1}.urlConversion__label.-error{border-radius:3px 0 3px 3px;border-color:#e53333}.urlConversion__label.-error:after{opacity:1;color:#e53333}.urlConversion__caption{margin-right:12px;padding-right:12px;border-right:1px solid #cfcfcf;font-family:Roboto,"Noto Sans JP",sans-serif;font-size:12px;-webkit-transition:color .3s cubic-bezier(.47,0,.745,.715) 0s;transition:color .3s cubic-bezier(.47,0,.745,.715) 0s;color:#fff}.urlConversion__input[type=text]{padding:0;margin:0;border:initial;-webkit-transition:initial;transition:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;background-image:none;border:none;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Roboto,"Noto Sans JP",sans-serif;font-weight:400;font-size:14px;color:#fff;outline:0!important;border:initial!important;background-color:initial!important}</style>`
  document.querySelector('body').appendChild($HTML)
  setTimeout(() => {
    $HTML.classList.add('-opened')
  }, 100)

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
            url: `//${text.subdomain}.${LOCAL_DOMAIN}/${NOW_PATH}`,
            current: LOCAL_DOMAIN,
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
URLConversion()

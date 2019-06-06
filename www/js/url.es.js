/**
 * Stop Duplicate
 */
const stopDuplicate = (() => {
  const $URL_CONVERSION = document.querySelector('.urlConversion')
  if ($URL_CONVERSION != null) {
    $URL_CONVERSION.classList.add('-opened')
    return false
  }
})()

/**
 * Get URL
 */
const NOW_HOST = location.host // www.example.com
const NOW_PATH = location.pathname.replace('/', '') // sample.php
const NOW_ID = NOW_HOST.replace(/www./, '').split('.')[0] // example

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
      <input class="urlConversion__input" type="text" placeholder="n-e-u（ドメインは不要です）" value="${NOW_ID}">
    </label>
  </div>
</div>
<link href="https://fonts.googleapis.com/css?family=Roboto|Noto+Sans+JP&display=swap" rel="stylesheet">
<style>@charset "UTF-8";.urlConversion *,.urlConversion :after,.urlConversion :before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-repeat:no-repeat;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:transparent}.urlConversion{position:fixed;width:100%;left:0;top:0;z-index:99999;background:rgba(255,255,255,.95);padding:40px;-webkit-transition:-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:transform .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-box-shadow:0 0 40px rgba(26,26,26,.1618);box-shadow:0 0 40px rgba(26,26,26,.1618);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Roboto,"Noto Sans JP",sans-serif}.urlConversion.-opened{-webkit-transform:translateY(0);transform:translateY(0)}.urlConversion__wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.urlConversion__list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}.urlConversion__link{cursor:pointer;outline:0;padding:0;border-radius:3px;line-height:1;border:1px solid #ff5252;background:#ff5252;color:#fff;padding:12px 24px;font-size:13px;font-family:Roboto,"Noto Sans JP",sans-serif;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.urlConversion__link,.urlConversion__link:active,.urlConversion__link:hover,.urlConversion__link:link,.urlConversion__link:visited{text-decoration:none;color:#fff}.urlConversion__link:hover{background:0 0;color:#ff5252;-webkit-box-shadow:0 3px 5px rgba(142,0,0,.1);box-shadow:0 3px 5px rgba(142,0,0,.1);background:#fff;-webkit-transform:translateY(-1px);transform:translateY(-1px)}.urlConversion__link:not(.-disabled){-webkit-transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,transform .3s cubic-bezier(.47,0,.745,.715) 0s;transition:background .3s cubic-bezier(.47,0,.745,.715) 0s,color .3s cubic-bezier(.47,0,.745,.715) 0s,box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,transform .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-box-shadow .3s cubic-bezier(.47,0,.745,.715) 0s,-webkit-transform .3s cubic-bezier(.47,0,.745,.715) 0s}.urlConversion__link.-disabled,.urlConversion__link:not([href]){border:1px solid #eee;background:#eee;color:rgba(26,26,26,.382);pointer-events:none;cursor:default}.urlConversion__link+.urlConversion__link{margin-left:12px}.urlConversion__form{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1}.urlConversion__label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;border:1px solid #cfcfcf;border-radius:3px;padding-left:16px;padding-right:24px;width:100%;-webkit-transition:border .3s cubic-bezier(.47,0,.745,.715) 0s;transition:border .3s cubic-bezier(.47,0,.745,.715) 0s;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.urlConversion__label:before{content:'データが見つかりませんでした。正しいURLを入力してください。';position:absolute;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;right:-1px;bottom:100%;background:#ff5252;color:#fff;font-family:Roboto,"Noto Sans JP",sans-serif;font-size:12px;line-height:1;height:24px;padding:0 16px;border-radius:12px 12px 0 0;opacity:0;-webkit-transition:opacity .3s cubic-bezier(.47,0,.745,.715) 0s;transition:opacity .3s cubic-bezier(.47,0,.745,.715) 0s}.urlConversion__label.-error{border-radius:3px 0 3px 3px}.urlConversion__label.-error:before{opacity:1}.urlConversion__label.-focus{border-color:#ff5252}.urlConversion__caption{margin-right:16px;padding-right:16px;border-right:1px solid #cfcfcf;font-family:Roboto,"Noto Sans JP",sans-serif;font-size:12px;-webkit-transition:color .3s cubic-bezier(.47,0,.745,.715) 0s;transition:color .3s cubic-bezier(.47,0,.745,.715) 0s;color:#1a1a1a}.urlConversion__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;background-image:none;border:none;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Roboto,"Noto Sans JP",sans-serif;font-weight:400;font-size:14px}.urlConversion__input:focus{outline:0}</style>`
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
 * Input Event
 */
const inputEvent = () => {
  $INPUT_TEXT.addEventListener('focus', event => {
    $INPUT_LABEL.classList.add('-focus')
  })
  $INPUT_TEXT.addEventListener('blur', event => {
    $INPUT_LABEL.classList.remove('-focus')
  })
  $INPUT_TEXT.addEventListener('keyup', event => {
    const INPUT_VALUE = event.target.value
    getJson({ fetchID: INPUT_VALUE, firstFlag: false })
  })
}

/**
 * Get JSON
 */
const getJson = ({ fetchID = null, firstFlag = false } = {}) => {
  const JSON_URL = `//www.example.pizza/projects/api/detail/${fetchID}`
  fetch(JSON_URL)
    .then(response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('データが見つかりませんでした。'))
    })
    .then(text => {
      // Set Data
      const SETTINGS = {
        0: {
          server: true,
          url: `//${fetchID}.example.test/${NOW_PATH}`,
        },
        1: {
          server: text.server,
          url: `//${fetchID}.example.${text.server}/${NOW_PATH}`,
        },
        2: {
          server: text.test_url,
          url: `${text.test_url}${NOW_PATH}`,
        },
        3: {
          server: text.url,
          url: `${text.url}${NOW_PATH}`,
        },
      }
      setLink(SETTINGS)
      // $HTML Remove Class
      $INPUT_LABEL.classList.remove('-error')
      // Set Cookie
      if (navigator.cookieEnabled) {
        document.cookie = 'url_id=' + encodeURIComponent(fetchID)
      }
    })
    .catch(error => {
      // Reset Class
      setLink('null')
      // Focus
      $INPUT_TEXT.focus()
      // $HTML Add Class
      $INPUT_LABEL.classList.add('-error')
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
      COOKIE_ARRAY[DATA[0]] = decodeURIComponent(DATA[1])
    })(i)
  }
  // Post JSON
  if (COOKIE_ARRAY['url_id']) {
    $INPUT_TEXT.value = COOKIE_ARRAY['url_id']
    getJson({
      fetchID: COOKIE_ARRAY['url_id'],
      firstFlag: false,
    })
  }
}

/**
 * Set Data
 */
const setLink = options => {
  for (let i = 0; i < LINK_LENGTH; i++) {
    ;(n => {
      if (!options[n].server || options === null) {
        $LINK[n].classList.add('-disabled')
        $LINK[n].href = ''
        return
      }
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

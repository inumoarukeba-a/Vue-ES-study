<!DOCTYPE html>
<html lang="ja" class="html">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php // OG Tag ?>
    <title></title>
    <meta property="og:type" content="website">
    <meta property="og:title" content="">
    <meta property="og:url" content="">
    <meta property="og:description" content="">
    <meta property="og:site_name" content="">
    <?php // Favicon ?>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="manifest" href="/favicons/site.webmanifest">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ffffff">
    <link rel="shortcut icon" href="/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <?php // Include File ?>
    <link href="common/css/common.css" rel="stylesheet">
  </head>
  <body ontouchstart="">

    <div class="wrap">

      <?php /* test
      −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−− */ ?>
      <section class="test">
        <header class="test__header">
          ありがとう
        </header>
        <p class="test__text">
          どういたしまして
        </p>
      </section>

      <section class="test">
        <ul class="test__list">
          <li class="test__item">
            大正
          </li>
          <li class="test__item">
            昭和
          </li>
          <li class="test__item">
            平成
          </li>
          <li class="test__item">
            令和
          </li>
        </ul>
      </section>

      <section class="test">
        <section class="test__section">
          高さ150px固定<br>
          上下マージンが可変しています。<br>
          （気づきにくいかもですが😂）
        </section>
        <section class="test__section">
          高さ150px固定<br>
          上下マージンが可変しています。
        </section>
        <section class="test__section">
          高さ150px固定<br>
          上下マージンが可変しています。
        </section>
      </section>

      <section class="test">
        <header class="test__header">
          使い方
        </header>
        <h2 class="test__title">
          初期設定
        </h2>
        <code class="test__code">
          ▼ _variables.scss<br><br>
          // Canvas Size<br>
          $pc-basis: 1366px;<br>
          $sp-basis: 375px;<br><br>
          // PC Responsive Width<br>
          $max-basis: 1680px;<br>
          $min-basis: 1024px;
        </code>
        <p class="test__text">
          ここの数値変えてください。<br>
          $pc-basisが、PCデザインデータのカンバスサイズ<br>
          $sp-basisが、SPデザインデータのカンバスサイズ<br>
          $max-basisが、PCの最大コンテンツ幅です。<br>
          $min-basisが、SPの最小コンテンツ幅です。
          $min-basis〜$max-basisの間で可変設定を自動で設定します。<br>
          早い話が、$min-basisを768pxに設定するとフルレスポンシブ完成です！（ただし、12px以下の文字が発生する可能性高いです。）
        </p>
        <h2 class="test__title">
          CSSでの指定方法
        </h2>
        <code class="test__code">
          margin-top: responsive(80);<br>
          font-size: responsive(16);
        </code>
        <p class="test__text">
          上記のようにデザインデータの数値を入力するだけ🥳<br>
          Special Thanks : 宮崎さん
        </p>
      </section>

    </div>

    <script src="js/library/pace/pace.min.js"></script>
    <script src="js/library/lazysizes/lazysizes.min.js"></script>
    <script src="js/script.js"></script>

  </body>
</html>

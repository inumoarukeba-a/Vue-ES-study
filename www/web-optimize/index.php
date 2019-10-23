<!DOCTYPE html>
<html lang="ja" class="html">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php // OG Tag ?>
    <title>サイト高速化タスク</title>
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
    <link href="/common/css/common.css" rel="stylesheet">
  </head>
  <body ontouchstart="">

    <div class="webOptimize">
      <section class="introduction">
        <h1 class="introduction__title">サイト高速化</h1>
        <p class="@__lead">ノイ標準のサイト高速化として、3つの軸でタスクをわけています〜</p>
        <ul class="@__list">
          <li class="@__item">絶対やること</li>
          <li class="@__item">出来たらやること</li>
          <li class="@__item">マニアック対応</li>
        </ul>
        <p class="@__lead">あと、僕独自の判断で、S〜Bで貢献度もランク付けしています。</p>
        <p class="@__lead">サイト高速化は、下の4項目しか出来ることほとんどありません。</p>
        <ul class="@__list">
          <li class="@__item">画像</li>
          <li class="@__item">ウェブフォント</li>
          <li class="@__item">JavaScript</li>
          <li class="@__item">サーバー設定</li>
        </ul>
      </section>

      <article class="tasks">
        <h2 class="tasks__priority">絶対やること</h2>
        <section class="tasks__section">
          <h3 class="tasks__title">
            <span class="tasks__rank">S</span>
            <span class="tasks__name">画像圧縮</span>
            <span class="tasks__assign"></span>
          </h3>
          <div class="tasks__detail">
            <p class="@__lead">
              デザインツールでの書き出しを 80〜85%
              その後、圧縮ツールにて、
              JPEG は Guetzli 85% / Mozjpeg
              PNG は Pngquant を実行します。
            </p>
            <div class="tasks__attention">
              <h4 class="tasks__caption">留意点</h4>
              <ul class="@__list">
                <li class="@__item">圧縮ツールの二度漬けは禁止</li>
                <li class="@__item">なので、行うタイミングはアップの前？</li>
                <li class="@__item">純也さんのgulpだと一度圧縮したファイルをキャッシュしてくれる。</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="tasks__section">
          <h3 class="tasks__title">
            <span class="tasks__rank">S</span>
            <span class="tasks__name">画像圧縮</span>
            <span class="tasks__assign"></span>
          </h3>
          <div class="tasks__detail">
            <p class="tasks__lead">
              デザインツールでの書き出しを 80〜85%
              その後、圧縮ツールにて、
              JPEG は Guetzli 85% / Mozjpeg
              PNG は Pngquant を実行します。
            </p>
            <div class="attention">
              <h4 class="attention__title">留意点</h4>
              ul.attention
              ・圧縮ツールの二度漬けは禁止 ×
              ・なので、行うタイミングはアップの前？
              ・純也さんの gulp だと一度圧縮したファイルをキャッシュしてくれる。
            </div>
          </div>
        </section>
      </article>
    </div>

    <script src="/common/javascript/library/pace/pace.min.js" defer></script>
    <script src="/common/javascript/library/lazysizes/lazysizes.min.js" defer></script>
    <script src="/common/javascript/script.js" defer></script>

  </body>
</html>

# プロジェクト概要

## これは何か

[Gatsby Simplefolio](https://github.com/cobidev/gatsby-simplefolio) テンプレートをベースにした、t.shirakura (kiyohken2000) の個人ポートフォリオサイト。1ページ構成（Hero / About / Projects / Contact / Footer）で、自作アプリ（channelist、Priveat、Ember、爆速、FeedOwn など約16件）を英日バイリンガルで紹介する。

## 技術スタック

| 分類 | 内容 |
|---|---|
| フレームワーク | Gatsby 5.x（React 18）— 2026-07 に Gatsby 2 からアップグレード |
| スタイル | Bootstrap 4 + React-Bootstrap 1.x + カスタム SCSS（`gatsby-plugin-sass`） |
| アニメーション | react-reveal、react-tilt、react-scroll |
| 画像最適化 | gatsby-plugin-image + sharp（`AboutImg` / `ProjectImg` コンポーネントで GraphQL クエリ） |
| 計測 | Google Analytics（UA-181015020-3）、Hotjar（id: 2203794） |
| PWA | gatsby-plugin-manifest（gatsby-plugin-offline は撤去済み、後述） |
| ホスティング | Firebase Hosting（`firebase.json`、公開ディレクトリは `public/`） |

## ディレクトリ構成

```
gatsby-config.js        プラグイン設定（manifest, GA, Hotjar など）
firebase.json           Firebase Hosting 設定（キャッシュヘッダ）
static/sw.js            ★ 自爆型 Service Worker（絶対に削除しない、後述）
src/
  pages/index.js        エントリページ。Helmet でメタ設定し App を描画
  pages/404.js
  components/
    App.jsx             全セクションを束ね、data.js の内容を Context に流し込む
    Hero/ About/ Projects/ Contact/ Footer/   各セクション
    Image/              gatsby-plugin-image ラッパー（AboutImg, ProjectImg）
    GithubButtons/ Title/
  context/context.js    PortfolioProvider（Context API）
  mock/data.js          ★ サイトの全コンテンツ定義（下記参照）
  images/               プロジェクトのスクリーンショット等
  style/                SCSS（abstracts / base / components / layout / sections）
docs/                   ドキュメント（本ファイル）
_temp/                  作業メモ（Gatsby 2→5 アップグレードのノウハウ集。git 管理外）
examples/               テンプレート由来のサンプル画像
```

## コンテンツの編集方法

サイトに表示される内容はすべて `src/mock/data.js` に集約されている。コンポーネントを触らずにここを編集するだけでよい。

- `headData` — `<title>`、言語、meta description
- `heroData` — トップのタイトル・名前・サブタイトル
- `aboutData` — 自己紹介文（英・日）と画像
- `projectsData` — プロジェクト一覧。各項目は `img`（`src/images/` のファイル名）、`title`、`info`（英語説明）、`info2`（日本語説明）、`url`、`repo` を持つ。`repo` が空ならボタン非表示
- `contactData` / `footerData` — 連絡先と SNS リンク（Twitter, LinkedIn, GitHub, RSS, YouTube）

新しいプロジェクトを追加する手順: スクリーンショットを `src/images/` に置く → `projectsData` の配列先頭にオブジェクトを追加する（先頭が最上部に表示される）。

## 開発・デプロイ

```sh
yarn install          # yarn.lock があるので yarn を使う
yarn develop          # 開発サーバー (localhost:8000)
yarn build            # 本番ビルド → public/
yarn serve            # ビルド結果のローカル確認 (localhost:9000)
yarn clean            # .cache / public の削除
firebase deploy       # Firebase Hosting へデプロイ（firebase-tools は依存に含まれる）
```

Lint / フォーマットは ESLint (airbnb) + Prettier。husky + lint-staged でコミット時に自動実行される。テストは未整備（`yarn test` はプレースホルダ）。

## 留意点

- **`static/sw.js` は自爆型 Service Worker。絶対に削除しないこと。** かつて gatsby-plugin-offline を使っていたため、訪問者のブラウザに旧 SW が残っている。このファイルが旧 SW を無効化し続けている（詳細は `_temp/gatsby-2-to-5-upgrade-knowhow.md` §9）。
- **コンテンツは SSR されない設計。** `App.jsx` が useEffect でデータを Context にセットするため、静的 HTML には Hero 等のテキストが含まれず、クライアント側 React が描画する（テンプレート由来の挙動）。
- `src/mock/data.js` という名前だが、mock ではなく本番コンテンツ。
- Sass の `@import` / `darken()` 非推奨警告がビルド時に出るが動作には影響なし（Dart Sass 3.0 で削除予定なので、いずれ `@use` / `color.adjust` へ移行が必要）。
- react-reveal / react-tilt は React 16 時代のパッケージで peer dependency 警告が出るが、React 18 でも動作する。

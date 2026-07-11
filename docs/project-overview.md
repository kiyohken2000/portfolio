# プロジェクト概要

## これは何か

[Gatsby Simplefolio](https://github.com/cobidev/gatsby-simplefolio) テンプレートをベースにした、t.shirakura (kiyohken2000) の個人ポートフォリオサイト。1ページ構成（Hero / About / Projects / Contact / Footer）で、自作アプリ（channelist、Priveat、Ember、爆速、FeedOwn など約16件）を英日バイリンガルで紹介する。

## 技術スタック

| 分類 | 内容 |
|---|---|
| フレームワーク | Gatsby 2.x（React 16.13） |
| スタイル | Bootstrap 4 + React-Bootstrap + カスタム SCSS（`gatsby-plugin-sass`） |
| アニメーション | react-reveal、react-tilt、react-scroll |
| 画像最適化 | gatsby-image + sharp（`AboutImg` / `ProjectImg` コンポーネントで GraphQL クエリ） |
| 計測 | Google Analytics（UA-181015020-3）、Hotjar（id: 2203794） |
| PWA | gatsby-plugin-manifest + gatsby-plugin-offline |
| ホスティング | Firebase Hosting（`firebase.json`、公開ディレクトリは `public/`） |

## ディレクトリ構成

```
gatsby-config.js        プラグイン設定（manifest, GA, Hotjar など）
firebase.json           Firebase Hosting 設定（キャッシュヘッダ）
src/
  pages/index.js        エントリページ。Helmet でメタ設定し App を描画
  pages/404.js
  components/
    App.jsx             全セクションを束ね、data.js の内容を Context に流し込む
    Hero/ About/ Projects/ Contact/ Footer/   各セクション
    Image/              gatsby-image ラッパー（AboutImg, ProjectImg）
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
yarn serve            # ビルド結果のローカル確認
yarn clean            # .cache / public の削除
firebase deploy       # Firebase Hosting へデプロイ（firebase-tools は依存に含まれる）
```

Lint / フォーマットは ESLint (airbnb) + Prettier。husky + lint-staged でコミット時に自動実行される。テストは未整備（`yarn test` はプレースホルダ）。

## 留意点

- **Gatsby 2 / React 16 のままで古い。** 姉妹プロジェクト retwpay-info (capsaicin.site) は 2026-07 に Gatsby 5 へアップグレード済みで、そのノウハウが `_temp/gatsby-2-to-5-upgrade-knowhow.md` にまとまっている。本リポジトリを上げる際はそれを参照（2→5 へ一気に上げる方針、gatsby-image → gatsby-plugin-image 置換、gatsby-plugin-offline の SW 地雷など）。
- `src/mock/data.js` という名前だが、mock ではなく本番コンテンツ。
- PWA（gatsby-plugin-offline）が有効なため、Service Worker のキャッシュ挙動に注意。`firebase.json` で `sw.js` と `page-data/**` は `must-revalidate` 指定済み。

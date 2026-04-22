# 齊藤大将 / Hiromasa Saito — Portfolio Site

日本文学をテーマにした和風デザインのポートフォリオサイト。
伝統的な日本の色彩と現代的な Web デザインを融合させ、洗練された UI/UX を実現。
**日本語・英語の言語切り替え**に対応。

A Japanese-aesthetic portfolio site themed on Japanese literature.
Blends traditional Japanese colors with modern web design, with **EN / JA language switching**.

## 🎨 デザインコンセプト

- **日本文学の美学**: 伝統的な和の色彩（朱色、藍色、金色）を使用
- **巻物スタイル**: 横スクロールセクションで日本の伝統的な文書形式を表現
- **グラスモーフィズム**: モダンなガラス質感の UI エレメント
- **レスポンシブデザイン**: モバイルからデスクトップまで完全対応

## 🚀 技術スタック

- **React 18.3.1** - UI フレームワーク
- **Vite 6.x** - 高速ビルドツール
- **CSS3** - カスタムプロパティ、Grid、Flexbox、Animations
- **React Context API** - 言語切り替え（外部ライブラリなし）
- **GitHub Pages** - ホスティング

## 📂 プロジェクト構造

```
mysite/
├── src/
│   ├── contexts/
│   │   └── LanguageContext.jsx  # 言語切り替え Context（EN/JA）
│   ├── components/
│   │   ├── Header.jsx          # 固定ヘッダー + 言語トグルボタン
│   │   ├── Hero.jsx            # ヒーローセクション（メインビジュアル）
│   │   ├── About.jsx           # 自己紹介セクション
│   │   ├── Career.jsx          # 経歴タイムライン
│   │   ├── Works.jsx           # 作品・プロジェクト紹介
│   │   ├── Achievements.jsx    # 受賞歴・メディア取材・登壇等
│   │   ├── Skills.jsx          # 技術スキル・言語・素養
│   │   ├── Hobbies.jsx         # 趣味・好きなもの
│   │   └── Contact.jsx         # 連絡先・SNSリンク
│   ├── assets/
│   │   └── images/             # 画像ファイル
│   ├── App.jsx                 # メインアプリケーション（LanguageProvider でラップ）
│   ├── App.css                 # アプリ全体のスタイル
│   └── index.css               # グローバルスタイル・CSS変数
├── public/                     # 静的ファイル
├── index.html                  # エントリーポイント
├── vite.config.js              # Vite設定
└── package.json                # プロジェクト設定
```

## 🌐 言語切り替え（EN / JA）

`src/contexts/LanguageContext.jsx` で言語状態を管理。デフォルトは **英語（EN）**。

```jsx
// 使い方（各コンポーネント共通）
const { lang } = useLang()
const t = (en, ja) => lang === 'en' ? en : ja

// テキスト切り替え例
<h2>{t('About Me', '自己紹介')}</h2>

// データ配列の切り替え例
const data = { title: { en: 'Career', ja: '経歴' }, ... }
<h3>{data.title[lang]}</h3>
```

ヘッダー右端の `JA` / `EN` ボタンでトグル。モバイルではロゴ右横に配置。

## 🎯 主な機能

### 1. ナビゲーション

- 固定ヘッダーによるスムーズなセクション遷移
- モバイル: ロゴ（左）+ 言語トグル（右）を1行目、ナビリンクを2行目に配置
- スクロール進捗バー

### 2. アニメーション

- **IntersectionObserver API** によるスクロールトリガーアニメーション
- フェードイン、スライドイン、ポップインエフェクト
- 遅延アニメーション（staggered animations）

### 3. セクション構成

#### 壱：自己紹介（About Me）

- 統計情報の表示（身長・内向き指数・誕生日）
- プロフィール概要

#### 弐：経歴（Career）

- 垂直タイムライン形式
- 学歴・職歴の詳細（日英対応）

#### 参：実装（Works）

- プロジェクトカード表示（Data Analysis / VR Education / VR Museum）
- 画像付き作品紹介、タグ日英対応

#### 肆：受賞歴・取材・登壇等（Awards & Media）

- 年度別グループ表示（2018〜2026）
- カテゴリラベル日英対応（Talk / Award / Exhibition / Media / Research）
- "View Details / 詳細を見る" リンク

#### 伍：技能（Skills）

- Technical Skills / Languages / Soft Skills の3カテゴリー
- タグクラウド形式

#### 陸：趣味・好きなもの（Hobbies & Favorites）

- アイコングリッドで趣味を表示（日英対応）
- カテゴリー別の好きなものリスト（Music / Manga & Anime / Movies / Games / Authors）

#### 柒：連絡先（Contact）

- アイコンベースの SNS リンク
- Email、Instagram、X、Facebook、LinkedIn、Medium、Note、GitHub

## 🎨 カラーパレット

```css
/* 和の伝統色 */
--bg-color: #f8f4e6; /* 生成色（きなりいろ）*/
--sumizome: #2e2e2e; /* 墨染色 */
--shu-red:  #d64545; /* 朱色 */
--indigo:   #4a5899; /* 藍色 */
--gold:     #d4af37; /* 金色 */
--kinari:   #f8f4e6; /* 生成色 */
--gofun:    #fffef9; /* 胡粉色 */
```

## 🛠️ 開発

### セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview
```

### デプロイ

```bash
# GitHub Pages へデプロイ
pnpm deploy
```

## 📱 レスポンシブ対応

| ブレークポイント | 対象 | レイアウト |
|---|---|---|
| 1024px 以上 | デスクトップ | フルレイアウト |
| 768px〜1024px | タブレット | 調整レイアウト |
| 768px 以下 | モバイル | ロゴ+トグル1行目 / ナビ2行目 |
| 480px 以下 | 小型モバイル | 最小レイアウト |

## 📝 ライセンス

© 2026 齊藤大将 (Hiromasa Saito). All rights reserved.

---

**刊行：二〇二六 / 2026**

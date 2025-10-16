# 齊藤大将 ポートフォリオサイト

日本文学をテーマにした和風デザインのポートフォリオサイト。
伝統的な日本の色彩と現代的な Web デザインを融合させ、洗練された UI/UX を実現してみた。

## 🎨 デザインコンセプト

- **日本文学の美学**: 伝統的な和の色彩（朱色、藍色、金色）を使用
- **巻物スタイル**: 横スクロールセクションで日本の伝統的な文書形式を表現
- **グラスモーフィズム**: モダンなガラス質感の UI エレメント
- **レスポンシブデザイン**: モバイルからデスクトップまで完全対応

## 🚀 技術スタック

- **React 18.3.1** - UI フレームワーク
- **Vite 6.0.3** - 高速ビルドツール
- **CSS3** - カスタムプロパティ、Grid、Flexbox、Animations
- **GitHub Pages** - ホスティング

## 📂 プロジェクト構造

```
mysite/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # 固定ヘッダーナビゲーション
│   │   ├── Hero.jsx            # ヒーローセクション（メインビジュアル）
│   │   ├── About.jsx           # 自己紹介セクション
│   │   ├── Career.jsx          # 経歴タイムライン
│   │   ├── Works.jsx           # 作品・プロジェクト紹介
│   │   ├── Achievements.jsx    # 受賞歴・メディア取材（横スクロール）
│   │   ├── Skills.jsx          # 技術スキル・言語・素養
│   │   ├── Hobbies.jsx         # 趣味・好きなもの
│   │   └── Contact.jsx         # 連絡先・SNSリンク
│   ├── assets/
│   │   └── images/             # 画像ファイル
│   ├── App.jsx                 # メインアプリケーション
│   ├── App.css                 # アプリ全体のスタイル
│   └── index.css               # グローバルスタイル・CSS変数
├── public/                     # 静的ファイル
├── index.html                  # エントリーポイント
├── vite.config.js             # Vite設定
└── package.json               # プロジェクト設定

```

## 🎯 主な機能

### 1. ナビゲーション

- 固定ヘッダーによるスムーズなセクション遷移
- モバイル対応の折り返しナビゲーション
- スクロール進捗バー

### 2. アニメーション

- **IntersectionObserver API** によるスクロールトリガーアニメーション
- フェードイン、スライドイン、ポップインエフェクト
- 遅延アニメーション（staggered animations）

### 3. セクション構成

#### 壱：自己紹介（About）

- 統計情報の表示
- プロフィール概要
- ダークグラデーション背景

#### 弐：経歴（Career）

- 垂直タイムライン形式
- 学歴・職歴の詳細表示
- 金色のアクセント

#### 参：実装（Works）

- プロジェクトカード表示
- 画像付き作品紹介
- ホバーエフェクト

#### 肆：受賞歴・取材・登壇等（Achievements）

- **横スクロール巻物スタイル**
- 年度別グループ表示
- モバイル最適化済み

#### 伍：技能（Skills）

- 技術スキル、言語、ソフトスキルの 3 カテゴリー
- タグクラウド形式
- カテゴリー別アイコン

#### 陸：趣味・好きなもの（Hobbies & Favorites）

- アイコングリッドで趣味を表示
- カテゴリー別の好きなものリスト
- 寺田寅彦風の引用文

#### 柒：連絡先（Contact）

- アイコンベースの SNS リンク
- Email、Instagram、X、Facebook、LinkedIn、Medium、Note、GitHub
- フッター情報

## 🎨 カラーパレット

```css
/* 和の伝統色 */
--bg-color: #f8f4e6; /* 生成色（きなりいろ）*/
--sumizome: #2e2e2e; /* 墨染色 */
--shu-red: #d64545; /* 朱色 */
--indigo: #4a5899; /* 藍色 */
--gold: #d4af37; /* 金色 */
--gold-accent: #c99700; /* 金色アクセント */
--kinari: #f8f4e6; /* 生成色 */
--gofun: #fffef9; /* 胡粉色 */
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
# GitHub Pagesへデプロイ
pnpm deploy
```

## 📱 レスポンシブ対応

- **デスクトップ**: 1024px 以上 - フルレイアウト
- **タブレット**: 768px〜1024px - 調整レイアウト
- **モバイル**: 768px 以下 - モバイル最適化レイアウト
- **小型モバイル**: 480px 以下 - 最小レイアウト

各セクションでメディアクエリを使用し、デバイスごとに最適な表示を実現しています。

## 🌟 技術的特徴

### パフォーマンス最適化

- コンポーネントベースのアーキテクチャ
- CSS カスタムプロパティによる一元管理
- 遅延ロードとアニメーション最適化

### アクセシビリティ

- セマンティック HTML
- ARIA ラベル対応
- キーボードナビゲーション対応

### アニメーション実装

```javascript
// IntersectionObserver によるスクロールトリガー
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  // 監視処理...
}, []);
```

### 横スクロール実装（Achievements）

```css
.achievements-timeline {
  display: flex;
  gap: 3rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
}

.year-group {
  scroll-snap-align: start;
  flex-shrink: 0;
}
```

## 📝 ライセンス

© 2025 齊藤大将. All rights reserved.

---

**刊行：2025**

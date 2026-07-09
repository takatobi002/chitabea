# chitabea.com

阿部太一の個人サイト。Astro + Cloudflare Pages。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイル生成
```

## NEWSの更新方法

`src/content/news/` にMarkdownファイルを追加するだけ：

```markdown
---
date: 2026-07-09
tag: 研究        # 研究 / 受賞 / 登壇 / メディア / その他
title: ○○しました
---
```

push すれば Cloudflare Pages が自動でビルド・公開します。

## Cloudflare Pages デプロイ手順（初回のみ）

1. このプロジェクトをGitHubリポジトリにpush
2. Cloudflare ダッシュボード → Workers & Pages → Create → Pages → Connect to Git
3. リポジトリを選択し、以下を設定：
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy 後、Custom domains から **chitabea.com** を接続
   （ドメインがCloudflare管理ならDNS設定は自動）

## TODO（プレースホルダー）

- [ ] キャッチフレーズ（日英）— `src/pages/index.astro` の `top-catch`
- [ ] YouTubeリンク4本 — INTERESTS セクション
- [ ] クイズ大会出場記録 — INTERESTS セクションの表
- [ ] メールアドレス・SNSリンク — CONTACT セクション
- [ ] Researchmap / ResearchGate / Google Scholar のURL — PROFILE

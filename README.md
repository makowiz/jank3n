# Next.js 初心者ガイド

## プロジェクト概要

この最小構成のNext.jsアプリケーションは、Next.jsを始めたばかりの開発者が基本的な構造を理解するためのテンプレートです。App Routerを使用して、モダンなNext.jsの機能を体験できます。

## 始め方

### 前提条件

- Node.js 18.17.0以上
- npm、yarn、またはpnpm

### インストール

1. リポジトリをクローンする：
```bash
git clone <リポジトリURL>
cd jank3n
```

2. 依存関係をインストールする：
```bash
pnpm install
```

3. 開発サーバーを起動する：
```bash
pnpm dev
```

4. ブラウザで[http://localhost:3000](http://localhost:3000)にアクセスして、アプリケーションを確認

## プロジェクト構造の説明

```
src/
├── app/                    # App Router
│   ├── api/                # APIルート (サーバーサイド)
│   │   └── hello/          
│   │       └── route.ts    # シンプルなAPI例
│   ├── favicon.ico         # ファビコン
│   ├── globals.css         # グローバルCSS
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # Home (root) page
│   └── example/            # example path
│       └── page.tsx        # example page
│
├── components/             # 共通コンポーネント
│   ├── ui/                 # 基本UI要素
│   │   └── Button.tsx      # ボタンコンポーネント例
│   └── layout/             # レイアウト関連
│       ├── Footer.tsx      # フッターコンポーネント
│       └── Header.tsx      # ヘッダーコンポーネント
│
└── lib/                    # ユーティリティ
    └── utils.ts            # 汎用ユーティリティ関数
```

## 主要な機能と概念

### App Router

Next.js 13以降では、`app/`ディレクトリを使用したルーティングシステムが導入されました。これはファイルベースのルーティングで、ディレクトリ構造がそのままURLパスになります。

- `app/page.tsx` → `/` (ルートURL)
- `app/about/page.tsx` → `/about`
- `app/users/[id]/page.tsx` → `/users/1`, `/users/2`など (動的ルート)

### レイアウト

`layout.tsx`ファイルは、そのディレクトリとその子ディレクトリのすべてのページに共通のUIを定義します。ルートレイアウト(`app/layout.tsx`)はすべてのページに適用されます。

### サーバーコンポーネント

App Routerのページはデフォルトでサーバーコンポーネントとして動作します。これにより、データの取得や重い処理をサーバー側で行い、クライアントに必要な最小限のJavaScriptを送信できます。

### クライアントコンポーネント

インタラクティブな機能が必要な場合は、ファイルの先頭に`'use client'`ディレクティブを追加することで、クライアントコンポーネントを作成できます：

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

### APIルート

`app/api`ディレクトリ内に`route.ts`ファイルを作成することで、サーバーサイドのAPIエンドポイントを定義できます。例えば：

```tsx
// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  // ユーザーデータを取得する処理
  return NextResponse.json({ users: [...] })
}

export async function POST(request: Request) {
  const data = await request.json()
  // 新しいユーザーを作成する処理
  return NextResponse.json({ success: true }, { status: 201 })
}
```

## 新しいページを追加する方法

1. `app/`ディレクトリ内に新しいディレクトリを作成します（例：`app/about/`）
2. その中に`page.tsx`ファイルを作成します：

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  )
}
```

これで、`/about`パスにアクセスすると新しいページが表示されます。

## 参考リソース

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [App Router入門](https://nextjs.org/docs/app)
- [React公式ドキュメント](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS公式ドキュメント](https://tailwindcss.com/docs)

## プロジェクトの拡張方法

このプロジェクトは最小構成ですが、以下のように拡張できます：

1. **新機能の追加**: 新しいページやAPIエンドポイントを作成
2. **状態管理**: 必要に応じてReduxやZustandなどの状態管理ライブラリを追加
3. **データベース連携**: PrismaやMongoose、Firebase SDKなどを使用してデータベースと接続
4. **認証**: NextAuth.jsを使用して認証機能を実装
5. **機能ベースの構成**: 大規模になったら、`features/`ディレクトリを追加して機能ごとにコードを整理

このテンプレートをベースに、実際のプロジェクトに必要な機能を徐々に追加していくことをお勧めします。

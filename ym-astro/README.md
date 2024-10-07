
https://emphasized-bean-69d.notion.site/daX_26-_HOME-1166e0241eb380bb9437f79ff27e427a?pvs=4
# you can learn everything you need stars from beginner to expert
入門から初級まで、このサイトで学べます！
クリックすると、サイトが更新される。
Beginnerモードにしたら、
1. Beginner
2. Advanced
3. Expert

# WISH LIST
共立出版: 情報系のための離散数学
森北出版: グラフ理論入門-基本とアルゴリズム-
近代科学社: グラフ理論入門
講談社: イラストで学ぶ離散数学
数研出版: 大学教養統計学
ナツメ社: これならわかる！ベイズ統計学
東京電機大学出版局: 形式言語理論入門
コンピューター言語 進化論
オートマトの言語理論 森北出版
講談社サイエンティフィック 自然言語とコンピューター言語

## Website framework(`Layout`)
1. Header
	a. Go back to `home/`
	b. Multilingual-available button
	c. Link to `a/`
	d. Link to `b/`
	e. Link to `c/`
2. Main
	a. Top(そのページの題名を表す)
	b. Save this page as...
		i. PDF
		ii. MD
		iii. HTML
	blogの説明
	blogのデザインの説明
	各ジャンルの説明
3. Footer
	a. Detail link to `a/`
	b. Detail link to `b/`
	c. Detail link to `c/`

## Website Contents
`c`: link to /c(contact, provide a clear way for potential clients to reach you)

## Website Design(Theme)
- Opt
    
    `+layout.svelte` `Layout.astro`のみで以下のメタ情報を記入する。
    
    他の場所ではインポート不要。
    
    ```tsx
    import 'path/to/global.css';
    ```
    
    `global.css`
    
    ```css
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    @import 'image.css'
    ```
    
    なるべくcomponentに細かく分ける
    
    How to organize CSS
    
    CSSは
    
    インポートは単純化する
    
    `+page.svelte`はComponentだけにする
    
    global.cssをインポートするだけでいいようにしよう。
    
- Toggle-options
    
    俺のHPへのリンクを貼ってもいいですか？
    
- Selection-options
    
    テーマカラーの数、カラーコード
    
    常にいろんなWebフレームワークを調べよう。そして常に最高のものを手元に用意しておこう。
    
    - `image.css`
        - はみ出ないようにする`width: 100%;`
        - サイトの雰囲気を壊さないように明るさや色味をデフォルトで買えるようにする。
    - `font.css`
        - font-family（ダサくないフォントはおすすめはしよう）
        - 太さ
        - 色
        - 選択した
    - `selection.css`
        
        ```css
        ::selection {
          background-color: #ffcc00; /* Set background color to yellow */
          color: #000000;            /* Set text color to black */
        }
        
        /* Vendor prefix for Firefox */
        ::-moz-selection {
          background-color: #ffcc00;
          color: #000000;
        }
        ```
        
- Default
    - `image.css`
        
        ```css
        img {
            max-width: 100%; /* This will make the image take the full width of its parent container */
            height: auto; /* This will maintain the aspect ratio of the image */
        }
        ```
        
    - `link.css`
        - 最低限decorationはなくす。
        - 踏んだリンクの色変わるのもなくす。
        
        ```css
        a {
          text-decoration: none; /* Remove the underline */
          color: inherit; /* Match the link color to the parent element's color */
        }
        
        a:visited {
          color: inherit; /* Do not change the color of visited links */
        }
        ```
        
    - `list.css`
        - listマーク消す
        
        ```css
        ul, ol {
          list-style-type: none; /* Remove the list markers */
          padding-left: 0; /* Remove the default indentation (optional) */
          margin: 0; /* Remove default margin (optional) */
        }
        ```

# Astro Starter Kit: Basics


```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

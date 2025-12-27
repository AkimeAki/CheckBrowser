# About

このパッケージは、使用しているOS、ブラウザのバージョン、種類などを取得するユーティリティです。
作者が個人的に使っている処理を切り出したものです。
好みベースの設計なので、必要に応じて自由に調整してください。

This package is a utility for detecting the user's operating system, browser type, and browser version.
It is extracted from logic that the author uses personally.
Since the design is preference-based, feel free to adjust or customize it as needed.

# インストール

```
npm install @akimeaki/check-browser
```

# 使い方

このライブラリは User-Agent Client Hints を使用せず、User-Agent 文字列に基づいて判定を行います。

```js
import checkBrowser from "@akimeaki/check-browser";

const result = checkBrowser();
```

resultの結果
```
{
	browser: "chrome",
	renderingType: "chromium",
	os: "windows",
	version: 143
}
```

`browser`: ブラウザ名
`renderingType`: CSS のレンダリング挙動が同一かどうかを基準にした分類です。
`os`: 使用しているOS名
`version`: ブラウザのメジャーバージョン

# License

Released under the [MIT license](https://opensource.org/license/mit)

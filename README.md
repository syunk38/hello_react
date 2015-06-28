##6/27

###gulp導入
* .jsxファイルをWatch
* package.jsonの整備。```npm install```でやんごとない感じになる。
* (Reactやらなきゃ)

###Express向けにいろいろ書き直し
昨日のpush忘れ分の反映。
* jadeで書き直し。これやってると二度と普通のhtml書きたくなくなる。多分slimとかも同じなんやろうなと思いつつ。
+ Reactのレンダリングのタイミング変更。```window.onload```使ってるけどもうちょっとやりようありそうな予感。探る。
* expressがおもしろい。イケてるのかは知らんけど、ぺちぱーなフロントエンドな俺的には結構なカルチャーギャップ。

##6/26
push忘れてたorz

##6/25
~~[いま最も注目のライブラリ「React.js」でシングルページアプリケーションを作ってみよう！ 【前編】](http://codezine.jp/article/detail/8491?p=2)  
をやってみている。~~
やめた。

ReactTutorialに基づいてるっぽいこれをやってる
[【個人メモ】React Tutorialをちょこっとやってみた](http://qiita.com/futoase/items/d536527e0bfe83aea0c5)

node.jsでhttpサーバー立ててみたものの、うまくjavascriptを呼び出すことができなかった。  
レスポンスが全てindex.htmlで返ってきているっぽい。さすがに10行程度のserver.jsでは難しいのでexpressを入れてみる。  
参考：[[Node.js] Webサーバ＋アプリ構築が速すぎる件 〜 JSおくのほそ道 #004](http://qiita.com/hosomichi/items/1991567e56dea41d1021)  
公式：[express](https://www.npmjs.com/package/express)

入れてみたもののテンプレートが```index.jade```とかあんまり知らんやつが。  
単純にReact.js試したいだけなのでhtmlで書きたいのだけど、勉強と思ってやってみる。  
ていうか普通にNode.jsが楽しいのであった。

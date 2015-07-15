##7/16
###静的ファイルからjson読み込み
* やっとできたあああああ
* key:valueのkeyをダブルクオートでくくってなかったというしょうもない原因。
* react-tutorialでは```res.json(JSON.parse(data))```とparseしたjsonを再びjsonにエンコードして返してるけど、dataの中にjsonが入っているのにそのまま渡さない理由がよくわからない(´・ω・｀)。
* もしかして：postの方も余裕(死亡フラグ)
* とりあえずこれでReactの方が進む。

##7/13
###パッケージ追加
* nodemon入れた(寝よう。)

間空きやしたサーセン
* jsonからデータを取得
* React側でjsonをajaxで取得してdataとして扱う
* jsonファイルから読めるようにしたいね
* expressでjson吐く方法がこれであってるんか謎。
    *ていうかapp.postってのあるんかなぁ。

##6/30
###Gulp
* rimraf→del
```
del@1.2.0
  └─┬ rimraf@2.4.0
    └── glob@4.5.3
```
↑のような構造のようなのでdelのほうが良さげ
###React
* 続き[Fetching from the server](http://facebook.github.io/react/docs/tutorial.html#fetching-from-the-server)

##6/29
* 続き→[Hook up the data model](http://facebook.github.io/react/docs/tutorial.html#hook-up-the-data-model)
* gulpの整理
* npm3.0.0化。
* Commentのdataをハッシュから取得。からの仮想DOM生成して返す
* 錦織ウィンブルドン初戦突破乙

##6/28

### component色々足した。
* CommentListでComment呼んだり
* this.props.childrenとか使ってみたり
* htmlをエスケープしてみたり。
* (まだ有用性がつかめない)
* (Facebookを信じろ)
* (Angulerって面白いのかな+（0ﾟ・∀・） + ﾜｸﾃｶ +)

###gulp dist追加
* reactをクリーンコンパイルできるように
* (Reactやろう。)

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

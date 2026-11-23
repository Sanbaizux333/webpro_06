# webpro_06のページ遷移図

## 授業内作成物
### じゃんけん関係
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /public/janken.html
/public/janken.html --> /janken:手を選択(1)
/janken --> /janken:手を選択(2)
```

#### (1)のパラメータ

パラメータ名 | 属性 | 内容 | 値
-|-|-|-
hand | text | ユーザの手 | グー/チョキ/パー
win | hidden | 勝利数 | 0
total | hidden | 対戦数 | 0

#### (2)のパラメータ

パラメータ名 | 属性 | 内容 | 値
-|-|-|-
hand | text | ユーザの手 | グー/チョキ/パー
win | hidden | 勝利数 | これまでの勝利数
total | hidden | 対戦数 | これまでの対戦数

### keiyo関係
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /keiyo
[*] --> /public/keiyo_add.html
/keiyo --> /db2.ejs:データベースを表示
/public/keiyo_add.html --> /keiyo_add:データを入力(1)
/keiyo_add --> /db2.ejs:データを登録し，一覧表示
```
#### (1)のパラメータ
パラメータ名 | 属性 | 内容
-|-|-
id | number | データの登録番号
code | text | 駅コード
name | text | 駅の名前

### keiyo2関係
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /keiyo2
[*] --> /public/keiyo2_add.html
/keiyo2 --> /keiyo2.ejs:データベースを表示
/public/keiyo2_add.html --> /keiyo2_add:データを入力(1)
/keiyo2_add --> /keiyo2.ejs:データを登録し，一覧表示
/keiyo2.ejs --> /keiyo2_detail.ejs:詳細を表示
```
#### (1)のパラメータ
パラメータ名 | 属性 | 内容
-|-|-
id | number | データの登録番号
code | text | 駅コード
name | text | 駅の名前
change | text | 駅の乗り換え線
passengers | text | 駅の利用者数
distance | number | 駅の東京駅からの距離

### hiro関係
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /hiro
[*] --> /public/hiro_add.html
/hiro --> /db3.ejs:データベースを表示
/public/hiro_add.html --> /hiro_add:データを入力(1)
/hiro_add --> /db3.ejs:データを登録し，一覧表示
```
#### (1)のパラメータ
パラメータ名 | 属性 | 内容 | 値
-|-|-|- 
id | number | データの登録番号 | -
genre | text | カードのジャンル | Pアイドル/サポカ
type | text | カードの属性 | やる気/好印象/集中/好調/全力/強気/温存/Vo/Da/Vi
name | text | カードの名称 | -
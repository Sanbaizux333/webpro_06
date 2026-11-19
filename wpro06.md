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
[*] --> /keiyo_add
/keiyo --> /db2.ejs:データベースを表示
/keiyo_add --> /public/keiyo_add.html:データを追加
/public/keiyo_add.html --> /db2.ejs:データベースを表示
```
### keiyo2関係
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /keiyo2
[*] --> /keiyo2_add
/keiyo2 --> /db4.ejs:データベースを表示
/keiyo2_add --> /public/keiyo2_add.html:データを追加
/public/keiyo2_add.html --> /db4.ejs:データベースを表示
```
### hiro関係
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /hiro
[*] --> /hiro_add
/hiro --> /db3.ejs:データベースを表示
/hiro_add --> /public/hiro_add.html:データを追加
/public/hiro_add.html --> /db3.ejs:データベースを表示
```
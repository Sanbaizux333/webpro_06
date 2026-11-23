# レポート用システムのページ遷移図
## 素材ファイル管理DB
### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /materials
[*] --> /public/material_add.html

/materials --> /materials.ejs:一覧表示
/materials.ejs --> /pickup:特定のファイルのみ表示する
/pickup --> /move.ejs:動画ファイル
/pickup --> /pict.ejs:画像ファイル
/pickup --> /sound.ejs:音声ファイル
/pickup --> /model.ejs:３Dオブジェクト
/pickup --> /other.ejs:その他

/materials.ejs --> /material_detail.ejs:詳細表示
/move.ejs --> /material_detail.ejs
/pict.ejs --> /material_detail.ejs
/sound.ejs --> /material_detail.ejs
/model.ejs --> /material_detail.ejs
/other.ejs --> /material_detail.ejs

/public/material_add.html --> /material_add:データを入力(1)
/material_add --> /material_detail.ejs:データを登録し，詳細表示
```
### (1)のパラメータ
パラメータ名 | 属性 | 内容 | 値
-|-|-|-
id | number | データの登録番号 | -
type | radio | ファイルの種類 | 動画/画像/音声/3D/その他
name | text | ファイルの名称 | -
extension | text | ファイルの拡張子 | -
source | radio | ファイルのDL元 | 自作/コモンズ/booth/公式GoogleDrive/bowlroll/uploader/その他
place | radio | 保存場所 | デスクトップ/macbook/USB/GoogleDrive
memo | text | 補記 | -


## 同人活動在庫管理DB
### ページ遷移図
```mermaid
stateDiagram-v2

```

## ゲーム周回記録管理DB
### ページ遷移図
```mermaid
stateDiagram-v2

```

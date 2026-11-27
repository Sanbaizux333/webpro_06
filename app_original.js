const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
//リクエストボディを使用するための追加
app.use(express.urlencoded({extended: true}));

app.get("/janken2", (req, res) => {
  //送信されたデータの確認
  let hand = req.query.radio;
  let win = Number(req.query.win);
  let total = Number(req.query.total);
  console.log({hand, win, total});

  //cpuの手
  const num = Math.floor(Math.random()* 3 + 1);
  let cpu = '';
  let judgement = '';

  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

  // ここに勝敗の判定を入れる
  if(hand==cpu){
    judgement = 'あいこ';
    total += 1;
  }
  else if(hand=='グー'&&cpu=='チョキ' || hand=='チョキ'&&cpu=='パー' || hand=='パー'&&cpu=='グー'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else{
    judgement = '負け';
    total += 1;
  }

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
    //結果の表示
    res.render('janken2', display);
});

//データ定義
let station = [
  {id:1, code:"JE01", name:"東京駅"},
  {id:2, code:"JE07", name:"舞浜駅"},
  {id:3, code:"JE12", name:"新習志野駅"},
  {id:4, code:"JE13", name:"幕張豊砂駅"},
  {id:5, code:"JE14", name:"海浜幕張駅"},
  {id:6, code:"JE05", name:"新浦安駅"},
];
//データ一覧の表示
app.get("/keiyo", (req, res) => {
  res.render('db2', { data:station });
});
//データ追加
app.get("/keiyo_add", (req, res) => {
  //入力データの確認
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = {id: id, code: code, name: name};

  //データを配列stationに追加
  station.push(newdata);

  //一覧表示への遷移
  res.render('db2', {data: station});
});

//詳細表示可能なDB
let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:40381, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];
//Create入力開始
app.get("/keiyo/create", (req, res) => {
  //入力フォームへ
  res.redirect('/public/keiyo2_new.html');
});
//Read
app.get("/keiyo2/:number", (req, res) => {
  const number =req.params.number;
  const detail = station2[number];
  res.render('keiyo2_detail', {id:number, data:detail});
});
//Delete
app.get("/keiyo/delete/:number", (req, res) => {
  //削除
  station2.splice(req.params.number, 1);
  res.redirect('/keiyo2');
});
//Create追加
app.post("/keiyo2", (req, res) => {
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;

  station.push({id:id, code:code, name:name, change:change, passengers:passengers, distance:distance});
  console.log(station2);
  //一覧表示
  res.render('/keiyo2', {data:station2});
});
//Edit
app.get("/keiyo/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = station2[number];
  //編集フォームへ
  res.render('keiyo2_edit', {id:number, data:detail});
});
//Update
app.post("/keiyo2/update/:number", (req, res) => {
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;

  console.log(station2);
  //一覧表示へ
  res.redirect('/keiyo2');
})

//篠澤データベースの定義
let hirochan = [
  {id:1, genre:"Pアイドル", type: "やる気", name:"光景"},
  {id:2, genre:"サポカ", type:"Vo", name:"vギャルピーーースッv"},
];
//データ一覧の表示
app.get("/hiro", (req, res) => {
  res.render('db3', {data: hirochan});
});
//データ追加
app.get("/hiro_add", (req, res) => {
  let id = req.query.id;
  let genre = req.query.genre;
  let type = req.query.type;
  let name = req.query.name;
  let newdata = {id: id, genre: genre, type: type, name: name};
  hirochan.push(newdata);

  res.render('db3', {data: hirochan});
})

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

  // ここに勝敗の判定を入れる
  if(hand==cpu){
    judgement = 'あいこ';
    total += 1;
  }
  else if(hand=='グー' && cpu=='チョキ'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else if(hand=='チョキ' && cpu=='パー'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else if(hand=='パー' && cpu=='グー'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else{
    judgement = '負け';
    total += 1;
  }

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
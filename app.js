const express = require('express')

const app = express()
const port = 800
const cors = require("cors");  //引入cors模块

const path = require("path")
app.use(cors());  //使用cors中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use("/www", express.static(path.resolve(__dirname, "./public")))

app.all('/', (req, res) => {
  // res.send('Hello World!')
  var result = nodejieba.extract(req.body.text, topN)
  console.log(result)
  res.send(result);
})

app.listen(port, () => {
  console.log(`分词 app listening at http://localhost:${port}/www/main.html`)
})
var nodejieba = require("nodejieba");
var topN = 20;
nodejieba.load({
  dict: nodejieba.DEFAULT_DICT,
  hmmDict: nodejieba.DEFAULT_HMM_DICT,
  // userDict: './test/testdata/userdict.utf8',
  idfDict: nodejieba.DEFAULT_IDF_DICT,
  stopWordDict: nodejieba.DEFAULT_STOP_WORD_DICT,
});

// require("./page")
// var result= nodejieba.extract(`我爱你彼岸花`, topN)

// console.log(result)
// fetch("http://127.0.0.1:800",{})-
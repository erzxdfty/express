var express = require('express');
var router = express.Router();
const request = require('request');

const API_KEY = '336aea9933142267d55a1cdebf09cd9e';

router.get('/', (req, res) => {
  const city = 'Tokyo';
  const units = 'metric';
  const lang = 'ja';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${API_KEY}`;

  if (!API_KEY || API_KEY === '私のAPIキー') {
    console.error('APIキーが設定されていません');
    return res.status(500).json({ error: 'APIキーが設定されていません' });
  }

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json(data);
    } else {
      console.log('エラー:', error);
      console.log('ステータスコード:', response && response.statusCode);
      console.log('レスポンスボディ:', body);
      res.status(response ? response.statusCode : 500).json({
        error: error || '天気データの取得に失敗しました'
      });
    }
  });
});

module.exports = router;
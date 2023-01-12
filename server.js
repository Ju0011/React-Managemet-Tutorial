//express server 구동 시키기
//명령어 :  node server.js => Listening on pot rt 5000 //서버 동작중
//=> http://localhost:5000/ 접속하기
//=> http://localhost:5000/api/hello 환영메세지 띄우기


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) =>{
    res.send({message: 'Hello Express!'});
});

app.listen(port, ()=> console.log(`Listening on pot rt ${port}`));
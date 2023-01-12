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


//Jsonlint 들어가서 올바른 형식인지 확인 (validate Json 버튼)
app.get('/api/customers', (req, res) =>{
    res.send([{
        'id' : 1,
        'image' : 'http://placeimg.com/64/64/1',
        'name' : '박주영',
        'birthday' : '001114',
        'gender' : '여자',
        'job' : '대학생'
      },
      {
        'id' : 2,
        'image' : 'http://placeimg.com/64/64/2',
        'name' : '김주영',
        'birthday' : '001214',
        'gender' : '여자',
        'job' : '대학생'
      },
      {
        'id' : 3,
        'image' : 'http://placeimg.com/64/64/3',
        'name' : '이주영',
        'birthday' : '991114',
        'gender' : '여자',
        'job' : '대학생'
      }]);
});

app.listen(port, ()=> console.log(`Listening on pot rt ${port}`));
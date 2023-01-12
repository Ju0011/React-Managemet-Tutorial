import './App.css';
import React,{ Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
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
},

]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id} //map 사용할때 key 설정하기
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
/*eslint-disable*/
// warning 띄우지 않음

import './App.css';
import React,{ Component } from 'react';
import Customer from './components/Customer';
import  Paper  from '@material-ui/core/Paper';
import  Table  from '@material-ui/core/Table';
import  TableHead  from '@material-ui/core/TableHead';
import  TableBody  from '@material-ui/core/TableBody';
import  TableRow  from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

//공식 사이트 가서 예제 활용하기
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});


class App extends Component {
  state = {
    customers: ""
  }

  componentDidMount(){  //모든 컴포넌트가 마운트 되었을때 실행되는 것
    this.callApi()
    .then(res => this.setState({customers: res})) //body 변수가 callApi 함수에 의해 res로 바뀌어서 customers라는 state의 변수에 담김
    .catch(err => console.log(err));  //오류 출력
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json(); //위 링크의 데이터를 json 형태로 body변수에 담는다는 것
    return body;
  }

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년원일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { //데이터를 받아오는데 시간이 걸리기 때문에 if문 사용해서 데이터가 없으면 공백으로 표현
              this.state.customers ? this.state.customers.map(c => {
                return (<Customer
                  key={c.id} //map 사용할때 key 설정하기
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
                )
              }) : ""}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}


export default withStyles(styles)(App);
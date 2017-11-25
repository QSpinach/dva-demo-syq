/*
* @Author: syq
* @Date:   2017-11-23 17:07:40
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 15:08:05
*/
import React from 'react';
import { Row,Col } from "antd";
import { Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal } from 'antd';
import { Link } from 'dva/router';
import styles from './Login.css'
export default class Login extends React.Component{
  constructor(){
    super();
    this.state= {
      NickUserName: ''
    }
  }
  componentDidMount(){
    if (this.props.logindata) {
      // console.log(1111111111111111)
      this.props.setLocalStorage(this.props.logindata.UserId,this.props.logindata.NickUserName)
    }

  }
  render(){
    return (
      <div>
        <Button type="primary" htmlType="button" className={styles.inblock}>{ this.props.logindata.NickUserName || localStorage.userNickName }</Button>
          &nbsp;&nbsp;
          <Link target="_blank" to={`/usercenter`}  className={styles.inblock}>
            <Button type="dashed" htmlType="button">个人中心</Button>
          </Link>
          &nbsp;&nbsp;
          <Button type="ghost" htmlType="button" onClick={this.props.logout} className={styles.inblock}>退出</Button>
      </div>
    );
  }
}


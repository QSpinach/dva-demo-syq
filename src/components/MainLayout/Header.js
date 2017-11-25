/*
* @Author: syq
* @Date:   2017-11-21 15:48:35
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 15:07:33
*/
import React from 'react';
import { connect } from 'dva';
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
import styles from './Header.css'
import Login from './Login'
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      current : '/',
      oldcurrent: '/',
      modalVisible: false,
      action: 'login',
      hasLogined:false,
      userNickName:"",
      userId: 0,
      data:''
    }
  }
  componentWillMount(){
    if (localStorage.userid!='' && typeof localStorage.userid !== "undefined") {
      this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
    }
  }
  //表单弹出框
  setModalVisible(value){
    if (!value) {
      this.setState({
        current: this.state.oldcurrent
      });
    }
    this.setState({
      modalVisible: value
    });
  }
  //选择导航
  handleClick(e){
    if (e.key == "register") {
      this.setState({
        current: "register"
      });
      this.setModalVisible(true);
    }
    else if (e.key == "logout") {
      this.setState({
        current: this.state.oldcurrent
      });
    }
    else{
      this.setState({
        current: e.key,
        oldcurrent: e.key
      });
    }
  }
  callback(key) {
    if (key == 1) {
      this.setState({action: 'login'});
    } else if (key == 2) {
      this.setState({action: 'register'});
    }
  };

  logout(){
    localStorage.userid= '';
    localStorage.userNickName = '';
    // console.log(this.state.oldcurrent)
    this.setState({current: this.state.oldcurrent});
    this.props.dispatch({
        type: 'loginRegist/outlogin',
        payload: {},
      });
  };
  //登录
  login(username,password){
    this.props.dispatch({
        type: 'loginRegist/login',
        payload: {username,password},
      });
  }
  //注册
  regist(r_userName,r_password,r_confirmPassword){

  }
  handleSubmit(e){
    //页面提交数据
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          //values就是表单对象
            console.log('Received values of form: ', values);
            if (this.state.action=="login") {
              this.login(values.userName,values.password);
            }
            if (this.state.action=="register") {
              // this.regist(values.r_userName,values.r_password,values.r_confirmPassword,myFetchOptions);
              message.success("注册成功！");
            }

            this.setModalVisible(false);
        }else{
            //处理错误
            message.error("账号或密码错误！");
          this.setModalVisible(false);
        }
      });
  }
  componentDidMount(){
    // console.log(this.props.logindata)
  }
  setLocalStorage(userid,userNickName){
    localStorage.userid= userid;
    localStorage.userNickName = userNickName;
  }
  render(){
    const {getFieldDecorator} = this.props.form;
    const userShow = this.props.logindata || localStorage.userid
     ?  <Menu.Item key="logout" className={styles.register}>
          <Login logout={this.logout.bind(this)} logindata={this.props.logindata} setLocalStorage={this.setLocalStorage.bind(this)}></Login>
        </Menu.Item>
     :  <Menu.Item key="register" class="register">
          <Icon type="appstore"/>登录/注册
        </Menu.Item>

    return (
      <div>
        <Menu
          onClick={this.handleClick.bind(this)}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="/">
            <Link to="/"><Icon type="home" />Home</Link>
          </Menu.Item>

         <Menu onClick={this.handleClick.bind(this)} mode="horizontal" theme="dark">
           {userShow}
         </Menu>
      </Menu>
      <Modal title="用户中心" wrapClassName="vertical-center-modal" maskClosable="true" footer={null} visible={this.state.modalVisible} onCancel={()=>{this.setModalVisible(false)}} onOK={()=>{this.setModalVisible(false)}} okText="关闭">
        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
          <TabPane tab="登录" key="1">
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="账户">
                {getFieldDecorator('userName')(<Input placeholder="请输入您的账号" />)}
              </FormItem>
              <FormItem label="密码">
                {getFieldDecorator('password')(<Input type="password" placeholder="请输入您的密码"/>)}
              </FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="2">
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="账户">
                {getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号" />)}
              </FormItem>
              <FormItem label="密码">
                 {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码"/>)}
              </FormItem>
              <FormItem label="确认密码">
                {getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请再次输入您的密码" />)}
              </FormItem>
              <Button type="primary" htmlType="submit">注册</Button>
            </Form>
          </TabPane>

        </Tabs>
      </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    logindata: state.loginRegist.loginRegist
  };
}
Header = Form.create({})(Header);
export default connect(mapStateToProps)(Header)

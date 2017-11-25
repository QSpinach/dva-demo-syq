/*
* @Author: syq
* @Date:   2017-11-25 14:29:41
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 14:33:53
*/
import React from 'react'
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import UserCenterComponent from './../components/UserCenter/UserCenter'
 function UserCenter(props){
    const userid = localStorage.userid;
    return (
      <MainLayout location={location}>
        <UserCenterComponent userid={userid}/>
      </MainLayout>
    )
}
export default connect()(UserCenter);

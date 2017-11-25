/*
* @Author: syq
* @Date:   2017-11-22 20:39:21
* @Last Modified by:   syq
* @Last Modified time: 2017-11-22 22:09:39
*/
import React from 'react'
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import ComponentDetails from '../components/Details/Details';

 function Details(props){
    const id = props.params.id;
    return (
      <MainLayout location={location}>
        <ComponentDetails id={id}/>
      </MainLayout>
    )
}
export default connect()(Details);

/*
* @Author: syq
* @Date:   2017-11-24 22:02:36
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 15:39:53
*/
import React from 'react'
import {Button} from 'antd'
export default class CollectionContent extends React.Component{
  componentDidMount(){
    console.log(this.props.data)
  }
  addUserCollection(){
    this.props.addUserCollection();
  }
  render(){
    return(
      <Button type="primary" onClick={this.props.addUserCollection.bind(this)} disabled={localStorage.userid?false:true}>
        <span>
          {this.props.data ? '已收藏' : '收藏该文章'}
        </span>
      </Button>
    );
  }
}

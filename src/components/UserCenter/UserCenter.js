/*
* @Author: syq
* @Date:   2017-11-25 14:33:38
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 14:57:59
*/
import React from 'react'
import { connect } from 'dva';
import ShowCollection from './ShowCollection'
class UserCenter extends React.Component{
  componentWillMount(){
    this.getCollection(this.props.userid);
  }
  getCollection(userid){
    this.props.dispatch({
      type: 'collection/getCollection',
      payload: {userid},
    })
  }
  render(){
    return (
      <ShowCollection collectData={this.props.collectData}></ShowCollection>
    )
  }
}
function mapStateToProps(state){
  return {
    collectData: state.collection.collectionData
  }
}
export default connect(mapStateToProps)(UserCenter)

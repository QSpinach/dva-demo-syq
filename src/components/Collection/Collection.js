/*
* @Author: syq
* @Date:   2017-11-24 21:18:34
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 15:39:22
*/
import React from 'react'
import { connect } from 'dva';
import CollectionContent from './CollectionContent'
class Collection extends React.Component{
  constructor(){
    super();
  }
  addUserCollection(){
    const userid = this.props.userid;
    const uniquekey = this.props.uniquekey
    // console.log(userid)
    this.props.dispatch({
      type: 'collection/addCollection',
        payload: {userid,uniquekey},
    })
  }
  render(){
    return(
      <div>
          <CollectionContent data={this.props.collectionData} addUserCollection={this.addUserCollection.bind(this)}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log(state)
  return {
    collectionData: state.collection.collectionData
  };
}
export default connect(mapStateToProps)(Collection);

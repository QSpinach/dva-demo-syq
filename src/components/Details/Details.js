/*
* @Author: syq
* @Date:   2017-11-22 21:31:33
* @Last Modified by:   syq
* @Last Modified time: 2017-11-24 21:51:55
*/
import React from 'react'
import { connect } from 'dva';
import {Row,Col,BackTop,Spin} from "antd";
import ComponentDetails from './ContentDetails'
import ImageBlock from './../News/ImageBlock'
import Collection from './../Collection/Collection'
import styles from './Details.css'
const types = {
  yule:{
    type: 'yule',
    count: 20
  }
}
class Details extends React.Component{
  constructor(){
    super();
  }
    componentWillMount(){
      // console.log(this.props.id)
      this.getDetails(this.props.id)
    }
    getDetails(id){
      this.props.dispatch({
        type: 'details/getDetails',
        payload: id,
      });
    }
    createMarkup(){
      document.title = this.props.detailsData.title + "—— React";
      return {__html: this.props.detailsData.pagecontent};
    };
    render(){
      return (
        <div>
          {
            this.props.detailsData
            ?
            <Row>
              <Col span={2}></Col>
              <Col span={14} className={styles.container}>
                <ComponentDetails createMarkup={this.createMarkup.bind(this)}></ComponentDetails>
                <Collection userid={localStorage.userid} uniquekey={this.props.id}></Collection>
              </Col>
              <Col span={6}>
                <ImageBlock types={types.yule} cardTitle="娱乐新闻"></ImageBlock>
              </Col>
              <Col span={2}></Col>
            </Row>
            : <Spin/>
          }

          <BackTop></BackTop>
        </div>
      )
    }
}
function mapStateToProps(state) {
  return {
    loading: state.loading.models.users,
    detailsData: state.details.detailsData
  };
}
export default connect(mapStateToProps)(Details);

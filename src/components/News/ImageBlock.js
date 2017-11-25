/*
* @Author: syq
* @Date:   2017-11-22 15:19:58
* @Last Modified by:   syq
* @Last Modified time: 2017-11-23 15:06:56
*/
import React from "react";
import { connect } from 'dva';
import { Spin } from "antd";
import NewsImageBlock from './NewsImageBlock'
import styles from './ImageBlock.css'
class ImageBlock extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className={styles.box}>
      {
        this.props.newslist.length
        ? <NewsImageBlock data={this.props.newslist} cardTitle={this.props.cardTitle} width="100%" imageWidth="126px"></NewsImageBlock>
        : <Spin/>
      }
      </div>
    )
  }

  componentDidMount(){
    this.getNews(this.props.types)
    // console.log(this.props.newslist)
  }
  getNews(settings){
    // console.log(settings)
    this.props.dispatch({
      type: 'news/getNews',
      payload: settings,
    });
  }
}
function mapStateToProps(state) {
  // console.log(state)
  return {
    loading: state.loading.models.users,
    newslist: state.news.newslist
  };
}
export default connect(mapStateToProps)(ImageBlock);

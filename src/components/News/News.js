/*
* @Author: syq
* @Date:   2017-11-21 23:39:23
* @Last Modified by:   syq
* @Last Modified time: 2017-11-22 20:06:24
*/
import React from 'react';
import { connect } from 'dva';
import {Row,Col,Tabs,Carousel,Spin } from "antd";
import NewsBlock from './NewsBlock.js'
import ImageBlock from './ImageBlock.js'
import Product from './Product.js'

import styles from './News.css'
const TabPane = Tabs.TabPane;

class News extends React.Component{
  constructor(){
    super()
    this.state={
      data: []
    }
  }
  componentDidMount(){
    this.getNews(this.props.top)
  }
  callback(key){
    if (key==1) {
      this.getNews(this.props.top)
    } else if(key==2){
      this.getNews(this.props.guoji)
    }
  }
  getNews(settings){
    // console.log(settings)
    this.props.dispatch({
      type: 'news/getNews',
      payload: settings,
    });
  }
  render(){
    return(
      <div className={styles.box}>
        <Tabs className={styles.tabs_news} onChange={this.callback.bind(this)}>
          <TabPane tab="新闻" key="1">
            {
              this.props.newslist.length
              ? <NewsBlock data={this.props.newslist} width="100%" bordered="false"></NewsBlock>
              : <Spin />
            }
          </TabPane>
          <TabPane tab="国际" key="2">
            <NewsBlock data={this.props.newslist} width="100%" bordered="false"></NewsBlock>
          </TabPane>
        </Tabs>
        <Tabs className={styles.tabs_product}>
          <TabPane tab="ReactNews 产品" key="1">
            <Product/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    loading: state.loading.models.users,
    newslist: state.news.newslist
  };
}
export default connect(mapStateToProps)(News);

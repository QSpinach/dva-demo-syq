/*
* @Author: syq
* @Date:   2017-11-21 20:43:48
* @Last Modified by:   syq
* @Last Modified time: 2017-11-22 15:55:13
*/
import React from "react";
import {Card} from "antd";
import {Router,Route,Link, browserHistory} from "dva/router";
import styles from './NewsBlock.css';
export default class NewsBlock extends React.Component{
  componentDidMount(){

  }

  render(){
    const datalist = this.props.data
    ? this.props.data.map((newsItem, index)=>(
        <li key={index}>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            {newsItem.title}
          </Link>
        </li>
      ))
    : "没有加载任何新闻！";

    return(
      <div className={styles.topNewsList}>
        <Card>
          <ul>
            {datalist}
          </ul>
        </Card>
      </div>
    );
  }
}

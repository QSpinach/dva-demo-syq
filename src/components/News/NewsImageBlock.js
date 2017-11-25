/*
* @Author: shenyanqiu
* @Date:   2017-11-22 15:02:34
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 14:38:38
*/
import React from "react";
import {Card} from "antd";
import {Router,Route,Link, browserHistory} from "react-router";
import styles from './NewsImageBlock.css'
export default class NewsImageBlock extends React.Component{
	constructor(){
		super();
		this.state = {
			news: []
		};
	}
	componentWillMount(){
      this.setState({
        news: this.props.data
      })
      // console.log(this.props.data)
	}
	render(){
		const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styleH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
		const {news} = this.state;

		const newsImageList = news.length
		? news.map((newsItem, index)=>(
				<div key={index} className={styles.imageblock}>
					<Link to={`details/${newsItem.uniquekey}`} target="_blank">
						<div className="custom-image">
							<img src={newsItem.thumbnail_pic_s} style={styleImage} alt=""/>
						</div>
						<div className={styles.customCard}>
							<h3 style={styleH3}>{newsItem.title}</h3>
							<p>{newsItem.author_name}</p>
						</div>
					</Link>
				</div>
			))
		: "没有加载任何新闻！";

		return(
			<div className={styles.topNewsList}>
				<Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}}>
					<ul>
						{newsImageList}
					</ul>
				</Card>
			</div>
		);
	}
}

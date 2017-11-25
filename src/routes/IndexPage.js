import React from 'react';
import { connect } from 'dva';
import {Row,Col,Tabs,Carousel,Spin } from "antd";
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import News from '../components/News/News';
import ImageBlock from '../components/News/ImageBlock';

const TabPane = Tabs.TabPane;
function IndexPage({ location }) {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    }
  const types={
      top:{
        type: 'top',
        count: 16
      },
      guoji:{
        type: 'guoji',
        count: 16
      },
      guoji2:{
        type: 'guoji',
        count: 2
      },
      yule:{
        type: 'yule',
        count: 16
      }
  }
  return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <Row>
            <Col span={2}></Col>
            <Col span={20} className={styles.container}>
              <div className={styles.leftContainer}>
                <div className="carousel">
                  <Carousel {...settings}>
                      <div><img src="http://qspinach.cn/reactnews/src/images/carousel_1.jpg" alt=""/></div>
                      <div><img src="http://qspinach.cn/reactnews/src/images/carousel_2.jpg" alt=""/></div>
                      <div><img src="http://qspinach.cn/reactnews/src/images/carousel_3.jpg" alt=""/></div>
                      <div><img src="http://qspinach.cn/reactnews/src/images/carousel_4.jpg" alt=""/></div>
                    </Carousel>
                </div>
              </div>
              <News {...types}></News>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <ImageBlock types={types.yule} cardTitle="娱乐新闻"></ImageBlock>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </MainLayout>
  );
}

export default connect()(IndexPage);

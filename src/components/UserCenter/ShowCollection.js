/*
* @Author: syq
* @Date:   2017-11-25 14:47:59
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 15:02:56
*/
import React from 'react'
import { Row,Col,Card, Spin,Tabs} from "antd";

const TabPane = Tabs.TabPane;
export default class ShowCollection extends React.Component{
  componentDidMount(){
    console.log(this.props.collectData)
  }
  render(){
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏" key="1">
                {
                  this.props.collectData
                  ? this.props.collectData.map((uc,index)=>(
                      <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
                        <p>{uc.Title}</p>
                      </Card>
                  ))
                  : <Spin/>
                }
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}

/*
* @Author: syq
* @Date:   2017-11-23 14:34:27
* @Last Modified by:   syq
* @Last Modified time: 2017-11-23 14:47:22
*/
import React from 'react'

export default class ContentDetails extends React.Component{
  componentDidMount(){
    // console.log(this.props.createMarkup)
  }
  render(){
    return (
          <div className="articleContainer" dangerouslySetInnerHTML={this.props.createMarkup()}></div>
    )
  }
}

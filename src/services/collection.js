/*
* @Author: syq
* @Date:   2017-11-24 21:39:29
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 14:23:27
*/
import request from '../utils/request';

export function addCollection({userid,uniquekey}) {
  // console.log(uniquekey);
  return request(`http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${userid}&uniquekey=${uniquekey}`,{method: 'GET'});
}

export function getCollection({userid}) {
  // console.log(uniquekey);
  return request(`http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${userid}`,{method: 'GET'});
}

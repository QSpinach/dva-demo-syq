/*
* @Author: syq
* @Date:   2017-11-22 21:45:19
* @Last Modified by:   syq
* @Last Modified time: 2017-11-24 22:34:56
*/
import request from '../utils/request';

export function getDetails(uniquekey) {
  // console.log(uniquekey);
  return request(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`,{method: 'GET'});
}

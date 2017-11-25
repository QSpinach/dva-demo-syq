/*
* @Author: syq
* @Date:   2017-11-21 20:18:07
* @Last Modified by:   syq
* @Last Modified time: 2017-11-22 21:47:16
*/
import request from '../utils/request';

export function getNews({ type, count}) {
  // console.log(type);
  return request(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`,{method: 'GET'});
}

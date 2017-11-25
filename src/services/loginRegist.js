/*
* @Author: syq
* @Date:   2017-11-23 16:08:16
* @Last Modified by:   syq
* @Last Modified time: 2017-11-23 16:16:43
*/
import request from '../utils/request';

export function login({username,password}) {
  return request(`http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}&r_userName=&r_password=&r_confirmPassword=`,{method: 'GET'});
}

export function regist({r_userName,r_password,r_confirmPassword}) {
  return request(`http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=&password=&r_userName=${r_userName}&r_password=${r_password}&r_confirmPassword=${r_confirmPassword}`,{method: 'GET'});
}


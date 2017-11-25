/*
* @Author: syq
* @Date:   2017-11-23 16:08:33
* @Last Modified by:   syq
* @Last Modified time: 2017-11-24 22:50:48
*/
import * as loginRegistService from '../services/loginRegist';
export default {

  namespace: 'loginRegist',

  state: {
    loginRegist: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({ payload:{username,password} }, { call, put }) {  // eslint-disable-line
      const {data} = yield call(loginRegistService.login, {username, password} );
      yield put({ type: 'save' ,payload: { data }});
    },
    *outlogin({payload}, { put, select }) {
      yield put({ type: 'saves',payload: { data:false }});
    },
  },

  reducers: {
    save(state, { payload: {data: loginRegist}}) {
      console.log(loginRegist)
      return { ...state, loginRegist};
    },
    saves(state, { payload: {data: loginRegist}}) {
      return { ...state,loginRegist};
    },
  },

};

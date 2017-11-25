/*
* @Author: syq
* @Date:   2017-11-22 21:47:51
* @Last Modified by:   syq
* @Last Modified time: 2017-11-22 22:20:39
*/
import * as detailsService from '../services/details';
export default {

  namespace: 'details',

  state: {
    detailsData: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getDetails({ payload:id }, { call, put }) {  // eslint-disable-line
      const {data} = yield call(detailsService.getDetails, id);
      yield put({ type: 'save' , payload: { data } });
    },
  },

  reducers: {
    save(state, { payload: { data: detailsData}}) {
      console.log(detailsData)
      return { ...state, detailsData };
    },
  },

};

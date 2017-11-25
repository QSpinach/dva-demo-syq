/*
* @Author: syq
* @Date:   2017-11-24 21:39:08
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 14:24:43
*/
import * as collectionService from '../services/collection';
export default {

  namespace: 'collection',

  state: {
    collectionData: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *addCollection({ payload: {userid,uniquekey} }, { call, put }) {  // eslint-disable-line
      const {data} = yield call(collectionService.addCollection, {userid,uniquekey});
      yield put({ type: 'save', payload: { data } });
    },
    *getCollection({ payload: {userid} }, { call, put }) {  // eslint-disable-line
      const {data} = yield call(collectionService.getCollection, {userid});
      yield put({ type: 'save', payload: { data } });
    },
  },

  reducers: {
    save(state,  { payload: { data: collectionData}}) {
      console.log(collectionData)
      return { ...state, collectionData };
    },
  },

};

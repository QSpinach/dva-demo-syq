/*
* @Author: syq
* @Date:   2017-11-21 20:19:54
* @Last Modified by:   syq
* @Last Modified time: 2017-11-25 14:37:54
*/
import * as newsService from '../services/news';

export default {

  namespace: 'news',

  state: {
      type: '',
      newslist: []
  },
  reducers: {
    save(state, { payload: { data: newslist,type,count}}) {
      // console.log(newslist)
      return { ...state, newslist,type,count};
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },

  effects: {
    *getNews({ payload: { type, count} }, { call, put}) {  // eslint-disable-line
      const { data } = yield call(newsService.getNews, {type, count} );
      // const types = yield select(state => state.news.type);
      yield put({
        type: 'save',
        payload: { data ,type}
      });
    },
  },



};

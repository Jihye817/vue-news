import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then(response => {
  //       console.log(response);
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_ASK({commit}) {
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_JOBS({commit}) {
    try{
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },
  async FETCH_USER({commit}, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({commit}, id) {
    const response = await fetchCommentItem(id);
    commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST({commit}, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
}
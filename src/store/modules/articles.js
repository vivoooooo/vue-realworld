import { getArticlesApi } from '../../api/conduit';

const initialState = {
  articles: [],
};

const getters = {
  getArticles: state => state.articles,
};

const actions = {
  async getArticlesRequest({ commit }) {
    const { data: { articles } } = await getArticlesApi();
    commit('getArticlesSuccess', articles);
  },
};

const mutations = {
  getArticlesSuccess(state, articles) {
    state.articles = articles;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};


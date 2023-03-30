import { searchStarWars } from '~/api/swapi';

const state = () => ({
  list: [],
  totalCount: 0,
});

const mutations = {
  setCharacters(state, payload) {
    state.list = payload;
  },

  editCharacter(state, { payload, i }) {
    state.list.splice(i, 1, payload);
  },

  deleteCharacter(state, i) {
    state.list.splice(i, 1);
  },

  addCharacter(state, payload) {
    state.list.push(payload);
  },

  setTotalCount(state, payload) {
    state.totalCount = payload;
  },
};

const actions = {
  async setCharactersByPage({ commit }, page = 1) {
    const res = await searchStarWars('people', page);
    commit('setCharacters', res.results);
    commit('setTotalCount', res.count);
  },
};

export default {
  state,
  mutations,
  actions,
};

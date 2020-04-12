/* eslint-disable no-shadow */
import request from '@/utils/request';

import status, {
  IDLE, PENDING, RESOLVE, REJECT,
} from '@/constants/status';

const state = {
  statusText: IDLE,
  data: '',
  error: false,
};

const getters = {
  status: (state) => status(state.statusText),
};

const mutations = {
  request(state) {
    state.statusText = PENDING;
  },

  receive(state, payload) {
    state.statusText = RESOLVE;
    state.data = payload;
  },

  reject(state, payload) {
    state.statusText = REJECT;
    state.error = payload;
  },
};

const actions = {
  async fetchDog({ commit }) {
    commit('request');
    try {
      const json = await request('https://dog.ceo/api/breeds/image/random');
      const { data: { message } = {} } = json || {};
      commit('receive', message);
    } catch (error) {
      commit('reject', error);
    }
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

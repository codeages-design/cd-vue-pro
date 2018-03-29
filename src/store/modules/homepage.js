import * as types from '../mutation-types';
import Api from '@/api';

const state = {
  todayData: [],
  orderData: [],
  payOrderData: [],
};

const mutations = {
  [types.GET_HOME_TODAY_DATA](state, payload) {
    state.todayData = payload;
  },
  [types.GET_HOME_ORDER_STATISTIC](state, payload) {
    state.orderData = payload
  },
  [types.GET_HOME_PAY_ORDER_STATISTIC](state, payload) {
    state.payOrderData = payload
  },
};

const actions = {
  getTodayData({ commit }) {
    return Api.getTodayData().then((res) => {
      commit(types.GET_HOME_TODAY_DATA, res);
      return res;
    });
  },
  getOrderStatistic({ commit }) {
    return Api.getOrderStatistic().then((res) => {
      commit(types.GET_HOME_ORDER_STATISTIC, res);
      return res;
    });
  },
  getPayOrderStatistic({ commit }) {
    return Api.getPayOrderStatistic().then((res) => {
      commit(types.GET_HOME_PAY_ORDER_STATISTIC, res);
      return res;
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

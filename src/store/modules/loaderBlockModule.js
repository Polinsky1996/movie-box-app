import { loadingStatuses } from "../../scripts/loadingStatus"

const state = {
  loadingStatus: loadingStatuses.Ready,
  errorMessage: ''
}

const mutations = {
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },

  SET_TEXT_ERROR(state, text) {
    state.errorMessage = text;
  }
}

const actions = {
  setError({commit}, text) {
    commit('SET_LOADING_STATUS', loadingStatuses.Error);
    commit('SET_TEXT_ERROR', text);
  }
}

export default {
  state,
  mutations,
  actions
}
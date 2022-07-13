import Vuex from 'vuex'
import loaderModule from './modules/loaderBlockModule'
import { getGenresList } from '../scripts/api'

export default new Vuex.Store({
  state: {
    genres: []
  },

  getters: {
    currentGenres: state => listID => {
      const currentList = [];

      listID.forEach( id => {
        state.genres.forEach( genre => {
          if (genre.id === id && !currentList.includes(genre.name)) {
            currentList.push(genre.name)
          }
        })
      })

      return currentList
    }
  },

  mutations: {
    SET_GENRES(state, list) {
      state.genres = list;
    }
  },

  actions: {
    async getGenres({commit}) {
      const movieList = await getGenresList('movie');
      const tvList = await getGenresList('tv');
      commit('SET_GENRES', [ ...movieList.genres, ...tvList.genres ])
    }
  },

  modules: {
    loaderModule
  }
})
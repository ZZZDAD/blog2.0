import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import logger from 'vuex/dist/logger'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      token: null,
      page: 1,
      page_count: null,
      show_sidebar: false,
      table_jump: null,
      sort: [],
      article: {},
      all_article: [],
      published_article: [],
      comment: []
    },
    getters,
    mutations,
    actions,
    // plugins: [logger()]
  })
}
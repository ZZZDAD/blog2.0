import Vue from 'vue'

export default {
  SET_TOKEN(state, data) {
    state.token = data
  },
  SET_PAGE(state, data) {
    state.page = data
  },
  SET_PAGE_COUNT(state, data) {
    state.page_count = data
  },
  SET_SHOW_SIDEBAR(state, data) {
    state.show_sidebar = data
  },
  SET_TABLE_JUMP(state, data) {
    state.table_jump = data
  },
  SET_SORT(state, data) {
    state.sort = data
  },
  SET_ARTICLE(state, data) {
    state.article = data
  },
  SET_ALL_ARTICLE(state, data) {
    state.all_article = data
  },
  SET_PUBLISHED_ARTICLE(state, data) {
    state.published_article = data
  },
  SET_COMMENT(state, data) {
    state.comment = data
  }
}
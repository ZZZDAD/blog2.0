import fetch from '@/util/fetch';

// 后台管理登录
export function admin_login(param) {
  return fetch.post('/login', param) // username password
}

// 添加分类标签
export function add_sort(param, token) {
  return fetch.post('/sort/add', param, token) // value
}

// 获取分类标签
export function get_sort() {
  return fetch.get('/sort/get')
}

// 移除分类标签
export function remove_sort(param, token) {
  return fetch.post('/sort/remove', param, token) // id
}

// 保存文章
export function save_article(param, token) {
  return fetch.post('/article/save', param, token) // title sort content intro
}

// 更新文章
export function update_article(param, token) {
  return fetch.post('/article/update', param, token) // _id title sort content intro
}

// 发布文章
export function publish_article(param, token) {
  return fetch.post('/article/publish', param, token) // _id
}

// 取消文章发布
export function cancel_publish_article(param, token) {
  return fetch.post('/article/cancel_publish', param, token) // _id
}

// 删除文章
export function remove_article(param, token) {
  return fetch.post('/article/remove', param, token) // _id
}

// 查看所有文章
export function all_article(page) {
  return fetch.get('/article/all/' + page)
}

// 查看单篇文章
export function get_article(id) {
  return fetch.get('/article/article/' + id) // id
}

// 查看已发布文章
export function published_article(param) {
  return fetch.post('/article/published', param) // [sort]
}

// 发送留言
export function post_comment(param) {
  return fetch.post('/comment/post', param) // article_id name mail message
}

// 获取所有留言
export function get_all_comment() {
  return fetch.get('/comment/get_all')
}

// 获取文章留言
export function get_article_comment(article_id) {
  return fetch.get('/comment/get_article/' + article_id) // article_id
}

// 移除留言
export function remove_comment(param, token) {
  return fetch.post('/comment/remove', param, token) // _id
}
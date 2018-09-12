import {
	admin_login,
	get_sort,
	get_article,
	all_article,
	published_article,
	get_all_comment,
	get_article_comment
} from '@/api'

export default {
	// 后台管理系统登录（获取token）
	Login({
		commit
	}, param) {
		return new Promise((resolve, reject) => {
			admin_login({
				username: param.username,
				password: param.password
			}).then(repsonse => {
				const data = repsonse.data
				if (data.code == 200) {
					let token = data.token
					commit('SET_TOKEN', token)
					resolve()
				} else {
					console.error('Login Error')
					reject(data.code)
				}
			})
		})
	},
	// 获取页数
	GetPage({
		commit
	}, page) {
		commit('SET_PAGE', page)
	},
	// 获取分类标签
	GetSort({
		commit
	}) {
		return new Promise((resolve, reject) => {
			get_sort().then(response => {
				const data = response.data
				if (data.code == 200) {
					let sort = data.data
					commit('SET_SORT', sort)
					resolve(sort)
				} else {
					console.error(data.message)
					reject(data.message)
				}
			})
		})
	},
	// 获取单篇文章
	GetArticle({
		commit
	}, id) {
		if (id) {
			return new Promise((resolve, reject) => {
				get_article(id).then(response => {
					const data = response.data
					if (data.code == 200) {
						let article = data.data
						commit('SET_ARTICLE', article)
						resolve()
					} else {
						reject(data.message)
					}
				})
			})
		} else {
			commit('SET_ARTICLE', {})
		}
	},
	// 获取全部文章
	GetAllArticle({
		commit
	}) {
		return new Promise((resolve, reject) => {
			all_article(this.getters.page).then(response => {
				const data = response.data
				if (data.code == 200) {
					let page_count = data.page_count
					let all_article = data.data
					commit('SET_PAGE_COUNT', page_count)
					commit('SET_ALL_ARTICLE', all_article)
					resolve(all_article)
				} else {
					console.error(data.message)
					reject(data.message)
				}
			})
		})
	},
	// 获取已发布文章
	GetPublishedArticle({
		commit
	}, sortArr) {
		return new Promise((resolve, reject) => {
			var param = {}
			if (sortArr) {
				param = {
					sort: sortArr.join('-') // 按分类标签搜索已发布文章
				}
			}
			published_article(param)
				.then(response => {
					const data = response.data
					if (data.code == 200) {
						let published_article = data.data
						commit('SET_PUBLISHED_ARTICLE', published_article)
						resolve(published_article)
					} else {
						console.error(data.message)
						reject(data.message)
					}
				})
		})
	},
	// 获取所有留言
	GetAllComment({
		commit
	}) {
		return new Promise((resolve, reject) => {
			get_all_comment().then(response => {
				const data = response.data
				if (data.code == 200) {
					let comment = data.data
					commit('SET_COMMENT', comment)
					resolve(comment)
				} else {
					reject(data.message)
				}
			})
		})
	},
	// 获取文章留言
	GetArticleComment({
		commit
	}, article_id) {
		return new Promise((resolve, reject) => {
			get_article_comment(article_id).then(response => {
				const data = response.data
				if (data.code == 200) {
					let comment = data.data
					commit('SET_COMMENT', comment)
					resolve(comment)
				} else {
					reject(data.message)
				}
			})
		})
	},
	SetShowSidebar({
		commit
	}) {
		var show = this.getters.show_sidebar
		commit('SET_SHOW_SIDEBAR', !show)
	},
	TableJump({
		commit
	}, jumpWhere) {
		commit('SET_TABLE_JUMP', jumpWhere)
	}
}
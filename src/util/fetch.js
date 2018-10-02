import axios from 'axios'
import qs from 'qs'


// CORS Cross-Origin Macro
const ALLOW_ORIGIN = 'Access-Control-Allow-Origin'
const ALLOW_HEADERS = 'Access-Control-Allow-Headers'
const ALLOW_METHODS = 'Access-Control-Allow-Methods'

// cors 跨域设置
axios.defaults.headers[ALLOW_ORIGIN] = 'http://127.0.0.1:8080'
axios.defaults.headers[ALLOW_HEADERS] = '*'
axios.defaults.headers[ALLOW_METHODS] = 'GET, POST'

// axios 配置
axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = 'https://dad2048.com/server'
axios.defaults.baseURL = 'http://127.0.0.1:3000/server'

const CONTENT_TYPE = 'Content-Type'
axios.defaults.headers.post[CONTENT_TYPE] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.defaults.withCreadentials = true

// 创建 axios
const service = axios.create()

// request拦截器(带token)
service.interceptors.request.use(config => {
	if (config.token) {
		config.headers['Authorization'] = `Bearer ${config.token}`
	}
	return config
}, error => {
	console.error(error)
	Promise.reject(error)
})

// POST 传参序列化 (拦截器)
service.interceptors.request.use(config => {
	if (config.method === 'post') {
		config.data = qs.stringify(config.data)
	}
	return config
}, error => {
	console.log("传参发生错误");
	return Promise.reject(error)
})

export default {
	post(url, params, token) {
		// let headers
		// if (window && window.__INITIAL_STATE__) {
		const headers = {
			// token: window.__INITIAL_STATE__.token
			token
		}
		// }
		return service.post(url, params, headers)
			.then(res => {
				return res
			})
	},
	get(url) {
		return service.get(url)
			.then(res => {
				return res
			})
	}
}
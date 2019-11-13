import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */
// const baseUrl = 'https://mall.virginhoney.com/wx'
const baseUrl = 'https://honey.zhihuiyunqi.com/wx'
const fxbaseUrl = 'https://honey.zhihuiyunqi.com/retail'
// const baseUrl = 'http://192.168.30.230:8082/wx'
// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const httpget = (dataurl) => {
	http.interceptor.request = (config) => {
		config.header = {
			"content-type": "application/json",
			"X-Litemall-Token": uni.getStorageSync('token')
		}
	}
    return http.request({
		baseUrl: baseUrl,
        url: dataurl,
		method: 'get',
		dataType: 'json'
    })
}
export const httpgetfx = (dataurl) => {
	http.interceptor.request = (config) => {
		config.header = {
			"content-type": "application/json",
			"X-Litemall-Token": uni.getStorageSync('token')
		}
	}
    return http.request({
		baseUrl: fxbaseUrl,
        url: dataurl,
		method: 'get',
		dataType: 'json'
    })
}

// export const httpAcesstoken = (dataurl) => {
// 	http.interceptor.request = (config) => {
// 		config.header = {
// 			"content-type": "application/json",
// 			"X-Litemall-Token": uni.getStorageSync('token')
// 		}
// 	}
//     return http.request({
// 		baseUrl: dataurl,
//         url: '',
// 		method: 'get',
// 		dataType: 'json'
//     })
// }

export const httppost = (dataurl,data) => {
	http.interceptor.request = (config) => {
		config.header = {
			"content-type": "application/json",
			"X-Litemall-Token": uni.getStorageSync('token')
		}
	}
    return http.request({
		baseUrl: baseUrl,
        url: dataurl,
		method: 'post',
		dataType: 'json',
		data
    })
}

export const httppostfx = (dataurl,data) => {
	http.interceptor.request = (config) => {
		config.header = {
			"content-type": "application/x-www-form-urlencoded",
			"X-Litemall-Token": uni.getStorageSync('token')
		}
	}
    return http.request({
		baseUrl: fxbaseUrl,
        url: dataurl,
		method: 'post',
		dataType: 'json',
		data
    })
}

// 收集统计信息
// export const httpstatistics = (dataurl, data) => {
// 	http.interceptor.request = (config) => {
// 		config.header = {
// 			"content-type": "application/x-www-form-urlencoded"
// 		}
// 	}
//     return http.request({
// 		baseUrl: 'https://www.zhihuiyunqi.com/',
//         url: dataurl,
// 		dataType: 'json',
// 		method: 'post', 
// 		data
//     })
// }

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	httpget,
	httppost,
	httppostfx,
	httpgetfx
	// httpAcesstoken,
	// httpstatistics,
}
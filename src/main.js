import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
let jse = new this.$jsEncrypt()
jse.setPublicKey(pubKey); // 加入rsa public key---该密钥由后端提供
let password = jse.encrypt(this.$md5(password)) // 将password加密
let password = jse.encrypt(this.$base64(password)); // 将password加密
 */

import JsEncrypt from 'jsencrypt/bin/jsencrypt'
import md5 from 'js-md5'
const base64 = require('js-base64').Base64

Vue.prototype.$jsEncrypt = JsEncrypt
Vue.prototype.$md5 = md5
Vue.prototype.$base64 = base64

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

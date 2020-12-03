import Vue from 'vue'
import App from './App.vue'
import initBridge from './hybrid'

Vue.config.productionTip = false

initBridge()

new Vue({
  render: h => h(App),
}).$mount('#app')

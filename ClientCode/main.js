import Vue from 'vue'
import App from './App'
import uView from "uview-ui" //uView

// 自定义组件
import test from './components/test.vue'
import xCardDsc from './components/x-card-dsc.vue'
import xCardTba from './components/x-card-tba.vue'
import xLeveltag from './components/x-leveltag.vue'
import xAvatar from './components/x-avatar.vue'

Vue.config.productionTip = false
Vue.use(uView) //uView

// 自定义组件
Vue.component('test',test)
Vue.component('x-card-dsc',xCardDsc)
Vue.component('x-card-tba',xCardTba)
Vue.component('x-leveltag', xLeveltag)
Vue.component('x-avatar', xAvatar)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from '../app'
import router from '../router'

Vue.config.devtools = true
Vue.use(BootstrapVue)

/* eslint-disable no-new */
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-application-container',
    router,
    render: h => h(App)
  })
})

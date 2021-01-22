// Toastr import here
// axios implementation
import axios from 'axios'
import toastr from "toastr"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// Vuex
import { createStore } from 'vuex'
import App from './App.vue'
// Tailwind css and personal css are include here
import './assets/index.css'
//router
import { routes } from './router'
import storage from './store/storage'

window.axios = axios;

// route implements
const router = createRouter({
     history: createWebHistory(),
     routes,
});

// Vuex implements
const store = createStore(storage);
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

window.toastr = toastr;
window.toastr.options = {
     "closeButton": true,
     "debug": true,
     "newestOnTop": true,
     "progressBar": true,
     "positionClass": "toast-top-right",
     "preventDuplicates": false,
     "showDuration": "1000",
     "hideDuration": "5000",
     "timeOut": "5000",
     "extendedTimeOut": "2000",
     "showEasing": "swing",
     "hideEasing": "linear",
     "showMethod": "fadeIn",
     "hideMethod": "fadeOut"
}

import { createApp } from 'vue'
import App from './App.vue'

//router
import { routes } from './router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
     history: createWebHistory(),
     routes,
});
createApp(App).use(router).mount('#app');
// Tailwind css and personal css are include here
import './assets/index.css';
// Toastr import here
import toastr from "toastr";
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

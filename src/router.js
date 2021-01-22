import Calculator from "./apps/Calculator.vue";
import Calendar from "./apps/Calendar.vue";
import Chat from "./apps/Chat.vue";
import Home from "./apps/Home.vue";
import Markdown from "./apps/Markdown.vue";
import NameList from "./apps/NameList.vue";
import Sliders from "./apps/Sliders.vue";
import UserCrud from "./apps/UserCrud.vue";
import Modals from "./components/ReuseableModals.vue";
import { userInfo } from './store/userInfo';

export const routes = [
     {
          path: '/',
          component: Home
     },
     {
          path: '/name-list',
          component: NameList
     },
     {
          path: '/calendar',
          component: Calendar
     },
     {
          path: '/markdown',
          component: Markdown
     },
     {
          path: '/sliders',
          component: Sliders
     },
     {
          path: '/calculator',
          component: Calculator
     },
     {
          path: '/reuseable-modals',
          component: Modals
     },
     {
          path: '/realtime-chatting',
          component: Chat,
          beforeEnter: (_, __, next) => userInfo.state.isLoggedIn == true ? next() : next('/') (window.toastr.warning('You Should Logged In First'))
     },
     {
          path: '/user-crud',
          component: UserCrud
     },
]
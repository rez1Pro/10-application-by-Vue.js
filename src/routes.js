import Calculator from "./apps/Calculator.vue";
import Calendar from "./apps/Calendar.vue";
import Chat from "./apps/Chat.vue";
import Home from "./apps/Home.vue";
import Markdown from "./apps/Markdown.vue";
import NameList from "./apps/NameList.vue";
import Sliders from "./apps/Sliders.vue";
import UserCrud from "./apps/UserCrud.vue";
import Modals from "./components/ReuseableModals.vue";


export const routes = [
     {
          path: '/',
          name: 'home',
          component: Home,
          meta : {requireAuth : false}
     },
     {
          path: '/name-list',
          name: 'listing',
          component: NameList,
          meta : {requireAuth : false}
     },
     {
          path: '/calendar',
          name: 'calendar',
          component: Calendar, 
          meta : {requireAuth : false}
     },
     {
          path: '/markdown',
          name: 'markdown',
          component: Markdown, 
          meta : {requireAuth : false}
     },
     {
          path: '/sliders',
          name: 'slider',
          component: Sliders,
          meta : {requireAuth : false}
     },
     {
          path: '/calculator',
          name: 'calculator',
          component: Calculator, 
          meta : {requireAuth : true}
     },
     {
          path: '/reuseable-modals',
          name: 'modals',
          component: Modals,
          meta : {requireAuth : false}
     },
     {
          path: '/realtime-chatting',
          name: 'realtime-chatting',
          component: Chat,
          meta : {requireAuth : true}
     },
     {
          path: '/user-crud',
          name: 'user-crud',
          component: UserCrud,
          meta : {requireAuth : false}
     },
]
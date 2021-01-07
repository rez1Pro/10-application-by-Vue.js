import Calendar from "./apps/Calendar.vue";
import NameList from "./apps/NameList.vue";
import Home from "./apps/Home.vue";
import Markdown from "./apps/Markdown.vue";
import Sliders from "./apps/Sliders.vue";

export const routes = [
     { path: '/', component: Home },
     { path: '/name-list', component: NameList },
     { path: '/calendar', component: Calendar },
     { path: '/markdown', component: Markdown },
     { path: '/sliders', component: Sliders },
]
import Calendar from "./apps/Calendar.vue";
import NameList from "./apps/NameList.vue";
import Home from "./apps/Home.vue";
import Markdown from "./apps/Markdown.vue";
import Sliders from "./apps/Sliders.vue";
import Calculator from "./apps/Calculator.vue";
import Modals from "./components/ReuseableModals.vue";

export const routes = [
     { path: '/', component: Home },
     { path: '/name-list', component: NameList },
     { path: '/calendar', component: Calendar },
     { path: '/markdown', component: Markdown },
     { path: '/sliders', component: Sliders },
     { path: '/calculator', component: Calculator },
     { path: '/reuseable-modals', component: Modals },
]
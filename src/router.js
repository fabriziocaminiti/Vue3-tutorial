import { createWebHistory, createRouter } from "vue-router";
import Villoti from './pages/Villoti';
import Calendar from './pages/Calendar';
import Chiara from './pages/Chiara';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReusableModal from './pages/ReusableModal';
import Modal from './components/Modal';
import Chat from './pages/Chat';
import store from './store/index';
const routes = [
    { path: '/Villoti', component: Villoti },
    { path: '/Calendar', component: Calendar },
    { path: '/', component: Chiara },
    { path: '/Markdown', component: Markdown },
    { path: '/Slider', component: Slider },
    { path: '/Calculator', component: Calculator },
    { path: '/ReusableModal', component: ReusableModal },
    { path: '/Modal', component: Modal },
    {
        path: '/Chat', component: Chat, beforeEnter: (_, __, next) => {
            if (!store.state.isloggedIn) {
                next("/");
            } else {
                next();
            }
        }
    }
]

const router = createRouter({ history: createWebHistory(), routes });


export default router;
import { createWebHistory, createRouter } from "vue-router";
import Villoti from './pages/Villoti';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReusableModal from './pages/ReusableModal';
import Modal from './components/Modal';
import Chat from './pages/Chat';
import store from './store/index';
import UserCrud from './pages/UserCrud';
import Tensorflow from './pages/Tensorflow';
const routes = [
    { path: '/Villoti', component: Villoti },
    { path: '/Calendar', component: Calendar },
    { path: '/', component: Home },
    { path: '/Markdown', component: Markdown },
    { path: '/Slider', component: Slider },
    { path: '/Tensorflow', component: Tensorflow },
    { path: '/Calculator', component: Calculator, meta: { middleware: "auth" } },
    { path: '/ReusableModal', component: ReusableModal },
    { path: '/Modal', component: Modal },
    { path: '/UserCrud', component: UserCrud },
    {
        path: '/Chat', component: Chat,
        meta: { middlware: 'auth' },
    },

]

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, _, next) => {
    if (to.meta.middlware) {

        const middlware = require(`./middleware/${to.meta.middlware}`);
        if (middlware) {
            middlware.default(next, store);
        }
        else {
            next();
        }
    } else {
        next();
    }

})

export default router;
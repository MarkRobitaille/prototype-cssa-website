import Homepage from './components/Homepage.vue'
import About from './components/About.vue'
import Events from './components/Events.vue'
import Execs from './components/Execs.vue'
import Contact from './components/Contact.vue'

const routes = [
    {
        path: '/',
        component: Homepage,
        name: "Homepage",
        meta: {
            title: 'UManitoba CSSA'
        }
    },
    {
        path: '/about',
        component: About,
        name: "About",
        meta: {
            title: 'About - UManitoba CSSA'
        }
    },
    {
        path: '/events',
        component: Events,
        name: "Events",
        meta: {
            title: 'Events - UManitoba CSSA'
        }
    },
    {
        path: '/execs',
        component: Execs,
        name: "Execs",
        meta: {
            title: 'Execs - UManitoba CSSA'
        }
    },
    {
        path: '/contact',
        component: Contact,
        name: "Contact",
        meta: {
            title: 'Contact Us - UManitoba CSSA'
        }
    }
]

export default routes;
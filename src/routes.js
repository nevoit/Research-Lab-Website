import homepage from './components/Homepage.vue';
import people from './components/People.vue';
import publications from './components/Publications.vue';
import contact from './components/Contact.vue';
import news from './components/News.vue';
import projects from './components/Projects.vue';
import singleProject from './components/singleProject.vue';
import singlePerson from './components/singlePerson.vue';

export default [
    { path: '/', name:'root', component: homepage},
    { path: '/people', name:'people',component: people},
    { path: '/people/:id', name:'person',component: singlePerson, props: true},
    { path: '/publications', name:'publications',component: publications},
    { path: '/contact', name:'contact',component: contact},
    { path: '/projects', name:'projects',component: projects},
    { path: '/projects/:id', name:'project',component: singleProject, props: true},
    { path: '/news', name:'news',component: news}
    // { path: '*', redirect: '/' }
]
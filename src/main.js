import Vue from 'vue'
import App from './App.vue'
//import VueResource from 'vue-router'
import VueRouter from 'vue-router'
import Routes from './routes'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueMeta from 'vue-meta'

//Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(vueSmoothScroll);
Vue.use(VueMeta);

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

//Filters
Vue.filter('snippet', function(value){
  return value.slice(0,100) + "...";
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

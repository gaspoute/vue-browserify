import Vue from 'vue';
import Header from './components/app.vue'

const app = new Vue({
  components: {
    'app-header': Header
  }
});
app.$mount('#app');

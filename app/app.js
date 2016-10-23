import Vue from 'vue';
import Bob from './components/bob.vue';
import Alice from './components/alice.vue';
import Oscar from './components/oscar.vue';
import TabContent from './components/tab-content.vue';

const app = new Vue({
  data: {
    tabs: {
      bob: {
        title: 'Bob',
        selected: true
      },
      alice: {
        title: 'Alice',
        selected: false
      },
      oscar: {
        title: 'Oscar',
        selected: false
      }
    }
  },
  methods: {
    selectTab(selectedTab) {
      for (const tab in this.tabs) {
        this.tabs[tab].selected = this.tabs[tab] === selectedTab;
      }
    }
  },
  components: {
    Bob,
    Alice,
    Oscar,
    TabContent
  }
});
app.$mount('#app');

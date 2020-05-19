import Vue from 'vue';
import apollo from '@/apollo';
import App from '@/App.vue';
import './registerServiceWorker';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';

import MatterService from '@/services/MatterService';
import FolderService from '@/services/FolderService';

Vue.use(MatterService);
Vue.use(FolderService);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  apolloProvider: apollo,
  render: (h) => h(App),
}).$mount('#app');

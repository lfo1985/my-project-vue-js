import { createApp } from 'vue';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from './router';
import icons from './icons';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App)
    .component("fa", icons)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app');

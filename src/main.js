import { createApp } from 'vue';
import App from './App.vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

library.add(faDiagramProject);
library.add(faPenToSquare);
library.add(faTrash);
library.add(faPlus);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');

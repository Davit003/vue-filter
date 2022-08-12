import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from '@/components/UI/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

uiComponents.forEach(element => {
    app.component(element.name, element);
});

app.use(store).use(router).mount('#app');

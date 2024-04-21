import { createApp } from 'vue'
import './style.css';
import 'mosha-vue-toastify/dist/style.css'
import App from './App.vue'
import '../node_modules/flowbite-vue/dist/index.css'
import store from './store';
import router from './router';

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')


// createApp(App).mount('#app')

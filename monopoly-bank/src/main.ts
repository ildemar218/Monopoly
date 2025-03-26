import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/index'; // Asegúrate de que este archivo exista

import './style.css';

const app = createApp(App);
app.use(router); // Agrega Vue Router a la app
app.mount('#app');

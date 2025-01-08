import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import { Button, Carousel } from "ant-design-vue";

const app = createApp(App);
app.use(Button).use(Carousel);

app.mount('#app')

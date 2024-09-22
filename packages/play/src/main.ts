import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SomeVueComponent from 'some-vue-element'
import 'some-vue-element/dist/style.css'

createApp(App).use(SomeVueComponent).mount('#app')

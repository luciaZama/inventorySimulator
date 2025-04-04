import { createApp } from 'vue'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// components
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(vuetify).mount('#app');

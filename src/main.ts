import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

const app = createApp(App);

const pinia = createPinia();
pinia.use(createPersistedState());
app.use(pinia);

const vuetify = createVuetify({ components, directives });
app.use(vuetify);

app.mount("#app");

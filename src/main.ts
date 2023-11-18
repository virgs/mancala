import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

import { BoardCreator } from "./engine/board-creator";
import { Mankala } from './engine/mankala';
import { Player, PlayerIdentifier } from "./engine/player";

const boardConfig = new BoardCreator().create(6, 4);
const boardLength = boardConfig.length;
new Mankala(new Player(PlayerIdentifier.BOTTOM, boardLength), new Player(PlayerIdentifier.TOP, boardLength), boardConfig)

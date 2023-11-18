import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");



import { BoardCreator } from "./engine/board-creator";
import { Mancala } from './engine/mancala';
import { PlayerIdentifier } from "./engine/player";
import { AiLevel, AiPlayer } from "./engine/ai-player";

const boardConfig = new BoardCreator().create(6, 4);
const boardLength = boardConfig.length;
const mancala = new Mancala(new AiPlayer(PlayerIdentifier.BOTTOM, boardLength, AiLevel.BEGINNER),
    new AiPlayer(PlayerIdentifier.TOP, boardLength, AiLevel.BEGINNER), boardConfig)
mancala.update()

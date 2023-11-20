<template>
  <div class="container-lg text-center" id="boardContainer">
    <img src="@/assets/wooden-square-plank.png" class="img-fluid w-100" alt="wooden-square-plank" />
    <div class="container-fluid px-5" style="
        position: absolute;
        top: 0%;
        left: 0;
        height: -webkit-fill-available;
      ">
      <div class="row g-2 h-100">
        <div class="col">
          <Hole :stones="board[6]" :index="6" :playingPlayerIdentifier="playingPlayer.identifier" :store="true"
            :ownerBrain="topPlayer.brainLevel" @nextActionSelected="nextActionSelected" :owner="PlayerIdentifier.TOP">
          </Hole>
        </div>
        <div class="col-8">
          <div class="row g-0 justify-content-center" style="height: 50%">
            <div v-for="(pocket, index) in topInternalPockets" class="col mx-auto">
              <Hole :stones="pocket" :index="topInternalPockets.length - 1 - index" :store="false"
                :ownerBrain="topPlayer.brainLevel" @nextActionSelected="nextActionSelected"
                :playingPlayerIdentifier="playingPlayer.identifier" :owner="PlayerIdentifier.TOP"></Hole>
            </div>
          </div>
          <div class="row g-0 justify-content-center" style="height: 50%">
            <div v-for="(pocket, index) in bottomInternalPockets" class="col mx-auto">
              <Hole :stones="pocket" :index="index + bottomInternalPockets.length + 1"
                :ownerBrain="bottomPlayer.brainLevel" :playingPlayerIdentifier="playingPlayer.identifier" :store="false"
                @nextActionSelected="nextActionSelected" :owner="PlayerIdentifier.BOTTOM"></Hole>
            </div>
          </div>
        </div>
        <div class="col">
          <Hole :stones="board[13]" :index="13" :playingPlayerIdentifier="playingPlayer.identifier" :store="true"
            :ownerBrain="bottomPlayer.brainLevel" @nextActionSelected="nextActionSelected"
            :owner="PlayerIdentifier.BOTTOM"></Hole>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { BoardCreator } from "@/engine/BoardCreator";
import {
BoardEngine,
type Action
} from "@/engine/BoardEngine";
import { BoardPrinter } from "@/engine/BoardPrinter";
import { Brain, BrainLevel } from "@/engine/Brain";
import { PlayerIdentifier } from "@/engine/PlayerIdentifier";
import Hole from "./Hole.vue";

let engine: BoardEngine;

export default {
  name: "Mancala",
  props: ["topPlayerBrainLevel", "bottomPlayerBrainLevel"],
  components: {
    Hole,
  },
  setup() {
    return {
      PlayerIdentifier,
    };
  },
  data() {
    const board = new BoardCreator().create(6, 4);
    const topPlayer = new Brain(this.topPlayerBrainLevel, PlayerIdentifier.TOP);
    const bottomPlayer = new Brain(
      this.bottomPlayerBrainLevel,
      PlayerIdentifier.BOTTOM,
    );
    engine = new BoardEngine(board.length, { debug: true, recordMoves: true });
    return {
      animationSpeedInMs: 500,
      animationRunning: false,
      board: board,
      boardPrinter: new BoardPrinter({ showId: false }),
      playingPlayer: topPlayer,
      topPlayer: topPlayer as Brain,
      bottomPlayer: bottomPlayer as Brain,
    };
  },
  mounted() {
    if (this.playingPlayer.brainLevel !== BrainLevel.HUMAN) {
      this.aiThinkAboutNextMove()
    }
  },
  computed: {
    topInternalPockets(): number[] {
      return this.board
        .filter((_pockets, index) => index < this.board.length / 2 - 1)
        .reverse();
    },
    bottomInternalPockets(): number[] {
      return this.board
        .filter(
          (_pockets, index) =>
            index >= this.board.length / 2 && index < this.board.length - 1,
        );
    },
  },
  methods: {
    aiThinkAboutNextMove() {
      const nextMoveIndex = this.playingPlayer.selectNextMove(this.board);
        console.log('AI has selected move', nextMoveIndex)
        this.nextActionSelected(this.playingPlayer.identifier, nextMoveIndex);
    },
    sleep(sleepTime: number) {
      return new Promise<void>(resolve => setTimeout(() => resolve(), sleepTime))
    },
    nextActionSelected(playerIdentifier: PlayerIdentifier, pocketId: number) {
      if (!this.animationRunning) {
        this.updateBoard({ player: playerIdentifier, pocketId: pocketId });
      }
    },
    async updateBoard(nextAction: Action) {
      this.animationRunning = true;
      const result = engine.move(nextAction, this.board);
      const animation = [...result.movesRecord!]
      for (let move of animation) {
        this.board[move.index] = move.newStonesAmouns
        await this.sleep(this.animationSpeedInMs)
      }
      console.log(result.gameOver, result.winningPlayer)
      this.playingPlayer = this.getBrainFromIdentifier(result.nextTurnPlayer!);
      this.animationRunning = false;
      if (this.playingPlayer.brainLevel !== BrainLevel.HUMAN) {
        this.aiThinkAboutNextMove()
      }
    },
    getBrainFromIdentifier(identifier: PlayerIdentifier): Brain {
      if (this.topPlayer.identifier === identifier) {
        return this.topPlayer
      } else {
        return this.bottomPlayer
      }
    },
  },
};
</script>

<style scoped>
.container-lg {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
</style>

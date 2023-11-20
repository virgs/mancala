<template>
  <div class="container-lg text-center">
    <img src="@/assets/wooden-square-plank.png" class="img-fluid w-100" alt="wooden-square-plank">
    <div class="container-fluid px-5" style="position: absolute; top: 0%; left: 0; height: -webkit-fill-available;">
      <div class="row g-2 h-100">
        <div class="col">
          <Hole :stones="board[6]" :index="6" :playingPlayerIdentifier="playingPlayer.identifier"
            :owner="PlayerIdentifier.TOP"></Hole>
        </div>
        <div class="col-8">
          <div class="row g-0 justify-content-center" style="height: 50%;">
            <div v-for="(pocket, index) in topInternalPockets" class="col mx-auto">
              <Hole :stones="pocket" :index="topInternalPockets.length - 1 - index"
                :playingPlayerIdentifier="playingPlayer.identifier" :owner=PlayerIdentifier.TOP></Hole>
            </div>
          </div>
          <div class="row g-0 justify-content-center" style="height: 50%;">
            <div v-for="(pocket, index) in bottomInternalPockets" class="col mx-auto">
              <Hole :stones="pocket" :index="index + 7" :playingPlayerIdentifier="playingPlayer.identifier"
                :owner="PlayerIdentifier.BOTTOM"></Hole>
            </div>
          </div>
        </div>
        <div class="col">
          <Hole :stones="board[13]" :index="13" :playingPlayerIdentifier="playingPlayer.identifier"
            :owner="PlayerIdentifier.BOTTOM"></Hole>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { BoardCreator } from "@/engine/BoardCreator";
import { BoardEngine, type Action, type ActionResult } from "@/engine/BoardEngine";
import { BoardPrinter } from "@/engine/BoardPrinter";
import { Brain } from "@/engine/Brain";
import { PlayerIdentifier } from '@/engine/PlayerIdentifier';
import Hole from "./Hole.vue";

export default {
  name: "Mancala",
  props: ['topPlayerBrainLevel', 'bottomPlayerBrainLevel'],
  components: {
    Hole
  },
  setup() {
    return {
      PlayerIdentifier
    }
  },
  data() {
    const board = new BoardCreator().create(6, 4);
    const topPlayer = new Brain(this.topPlayerBrainLevel, PlayerIdentifier.TOP)
    const bottomPlayer = new Brain(this.bottomPlayerBrainLevel, PlayerIdentifier.BOTTOM)
    return {
      board: board,
      boardPrinter: new BoardPrinter({ showId: false }),
      playingPlayer: topPlayer,
      topPlayer: topPlayer as Brain,
      bottomPlayer: bottomPlayer as Brain,
      engine: new BoardEngine(board.length, { debug: true })
    }
  },
  computed: {
    topInternalPockets(): number[] {
      return this.board
        .filter((_pockets, index) => index < (this.board.length / 2) - 1)
        .reverse()
    },
    bottomInternalPockets(): number[] {
      return this.board
        .filter((_pockets, index) => index >= this.board.length / 2 &&
          index < this.board.length - 1)
        .reverse()
    }
  },
  methods: {
    updateBoard(nextAction: Action): ActionResult {
      const result = this.engine.move(nextAction, this.board);
      this.playingPlayer = this.getBrainFromIdentifier(result.nextTurnPlayer!)
      this.board = [...result.boardConfig];
      console.log(result)
      this.boardPrinter.print(this.board)
      return result;
    },
    getBrainFromIdentifier(identifier: PlayerIdentifier): Brain {
      const brain: Brain = this.topPlayer.identifier === identifier ? this.topPlayer : this.bottomPlayer;
      return brain;
    }
  }
}
</script>

<style scoped>
.container-lg {
  /* Why is it necessary? */
  transform: rotate3d(0, 0, 0, 25deg);
}
</style>
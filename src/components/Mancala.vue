<template>
  <div class="container-lg text-center" id="boardContainer">
    <img src="@/assets/wooden-square-plank.png" class="img-fluid w-100" alt="wooden-square-plank" />
    <span :class="accumulatorClass" :style="accumulatorStyle">
      <span v-if="accumulator >= 0">{{ accumulator }}</span>
    </span>
    <div class="container-fluid px-5" style="position: absolute; top: 0; left: 0; height: 100%">
      <div class="row g-2 h-100">
        <div class="col">
          <Hole :stones="board[6]" :index="6" :playingPlayerIdentifier="playingPlayer?.identifier" :store="true"
            :ownerBrain="topPlayer.brainLevel" @nextActionSelected="nextActionSelected" :owner="PlayerIdentifier.TOP">
          </Hole>
        </div>
        <div class="col-8">
          <div class="row g-0 justify-content-center" style="height: 50%">
            <div v-for="(pocket, index) in topInternalPockets" class="col mx-auto">
              <Hole :stones="pocket" :index="topInternalPockets.length - 1 - index" :store="false"
                :ownerBrain="topPlayer.brainLevel" @nextActionSelected="nextActionSelected"
                :playingPlayerIdentifier="playingPlayer?.identifier" :owner="PlayerIdentifier.TOP"></Hole>
            </div>
          </div>
          <div class="row g-0 justify-content-center" style="height: 50%">
            <div v-for="(pocket, index) in bottomInternalPockets" class="col mx-auto">
              <Hole :stones="pocket" :index="index + bottomInternalPockets.length + 1"
                :ownerBrain="bottomPlayer.brainLevel" :playingPlayerIdentifier="playingPlayer?.identifier" :store="false"
                @nextActionSelected="nextActionSelected" :owner="PlayerIdentifier.BOTTOM"></Hole>
            </div>
          </div>
        </div>
        <div class="col">
          <Hole :stones="board[13]" :index="13" :playingPlayerIdentifier="playingPlayer?.identifier" :store="true"
            :ownerBrain="bottomPlayer.brainLevel" @nextActionSelected="nextActionSelected"
            :owner="PlayerIdentifier.BOTTOM"></Hole>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createBoard } from '@/engine/BoardConfig'
import { BoardEngine, type Action } from '@/engine/BoardEngine'
import { Brain, BrainLevel } from '@/engine/Brain'
import { PlayerIdentifier } from '@/engine/PlayerIdentifier'
import Hole from './Hole.vue'

let engine: BoardEngine

export default {
  name: 'Mancala',
  props: ['gameSettings'],
  components: {
    Hole,
  },
  setup() {
    return {
      PlayerIdentifier,
    }
  },
  data() {
    const board = createBoard(this.gameSettings.internalPockets, this.gameSettings.initialStones)
    const topPlayer = new Brain(
      this.gameSettings.topPlayerBrainLevel,
      PlayerIdentifier.TOP,
      board.length
    )
    const bottomPlayer = new Brain(
      this.gameSettings.bottomPlayerBrainLevel,
      PlayerIdentifier.BOTTOM,
      board.length
    )
    engine = new BoardEngine(board, {
      debug: true,
      recordMoves: true,
    })

    return {
      accumulator: 0,
      accumulatorColor: '',
      aiIsThinking: false,
      animationRunning: false,
      board: board,
      playingPlayer: topPlayer as Brain | undefined,
      topPlayer: topPlayer as Brain,
      bottomPlayer: bottomPlayer as Brain,
    }
  },
  mounted() {
    if (this.playingPlayer?.brainLevel !== BrainLevel.HUMAN) {
      this.aiThinkAboutNextMove()
    }
  },
  computed: {
    accumulatorClass() {
      return {
        accumulator: true,
        hole: true,
        'accumulator-hole-showing': this.accumulator >= 0,
      }
    },
    accumulatorStyle() {
      return {
        color: this.accumulatorColor,
        'border-color': this.accumulatorColor,
      }
    },
    topInternalPockets(): number[] {
      return this.board
        .filter((_pockets, index) => index < this.board.length / 2 - 1)
        .reverse()
    },
    bottomInternalPockets(): number[] {
      return this.board.filter(
        (_pockets, index) => index >= this.board.length / 2 && index < this.board.length - 1
      )
    },
  },
  methods: {
    async aiThinkAboutNextMove() {
      this.aiIsThinking = true
      const nextMoveIndex = await this.playingPlayer!.selectNextMove(this.board)
      this.aiIsThinking = false
      console.log('AI has selected move', nextMoveIndex)
      this.nextActionSelected(this.playingPlayer!.identifier, nextMoveIndex)
    },
    sleep(sleepTime: number) {
      return new Promise<void>((resolve) => setTimeout(() => resolve(), sleepTime))
    },
    nextActionSelected(playerIdentifier: PlayerIdentifier, pocketId: number) {
      if (!this.animationRunning) {
        this.updateBoard({
          player: playerIdentifier,
          pocketId: pocketId,
        })
      }
    },
    async updateBoard(nextAction: Action) {
      switch (nextAction.player) {
        case PlayerIdentifier.TOP:
          this.accumulatorColor = 'var(--top-player-color)'
          break
        case PlayerIdentifier.BOTTOM:
          this.accumulatorColor = 'var(--bottom-player-color)'
          break
      }
      this.playingPlayer = undefined
      this.accumulator = this.board[nextAction.pocketId]
      this.animationRunning = true
      const result = engine.makeMove(nextAction, this.board)
      const animation = [...result.movesRecord!]
      for (let move of animation) {
        this.board[move.index] = move.newStonesAmouns
        await this.sleep(this.gameSettings.animationSpeedInMs)
        --this.accumulator
      }
      this.animationRunning = false
      if (result.gameOver) {
        console.log('Player ' + result.winningPlayer + ' won')
      } else {
        this.playingPlayer = this.getBrainFromIdentifier(result.nextTurnPlayer!)
        if (this.playingPlayer?.brainLevel !== BrainLevel.HUMAN) {
          this.aiThinkAboutNextMove()
        }
      }
    },
    getBrainFromIdentifier(identifier: PlayerIdentifier): Brain {
      if (this.topPlayer.identifier === identifier) {
        return this.topPlayer as Brain
      } else {
        return this.bottomPlayer as Brain
      }
    },
  },
}
</script>

<style scoped>
.container-lg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.accumulator {
  border: none;
  padding-top: 5px;

  font-family: var(--game-font-family);
  color: var(--hihglighted-number-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  font-size: 2.5rem;
  transition: ease all 500ms;
  width: 0;
  height: 20%;
}

.accumulator-hole-showing {
  width: 10%;
}
</style>
@/engine/BoardStateAnalyser

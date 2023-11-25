<template>
    <div class="modal" tabindex="-1" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header pb-1" style="border-width: 5px; border-color: var(--vt-c-black)">
                    <h1 class="fs-1 modal-title text" style="text-align: center">Game Stats</h1>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <tbody>
                            <tr v-for="row in rows" class="text fs-2" style="text-align: center">
                                <td :style="rowStyle(PlayerSide.TOP)">{{ row.topPlayer }}</td>
                                <th scope="row">{{ row.title }}</th>
                                <td :style="rowStyle(PlayerSide.BOTTOM)">{{ row.bottomPlayer }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type { EndGameResult } from '@/engine/MancalaEngine'
import { PlayerMovesAnalyser } from '@/engine/PlayerMovesAnalyser'
import { PlayerSide } from '@/engine/player/PlayerSide'

type Stats = {
    moves: number
    capture: number
    capturedSeeds: number
}

const initStats = () => {
    const stats: Stats = {
        moves: 0,
        capture: 0,
        capturedSeeds: 0,
    }
    return {
        [PlayerSide.TOP]: { ...stats },
        [PlayerSide.BOTTOM]: { ...stats },
    }
}

type TableRow = {
    title: string
    topPlayer: string
    bottomPlayer: string
}

export default {
    name: 'GameOver',
    props: ['result'],
    emits: ['modalIsGone'],
    setup() {
        return {
            PlayerSide,
        }
    },
    data() {
        return {
            rows: [] as TableRow[],
        }
    },
    mounted() {
        const myModalEl = document.getElementById('myModal')
        myModalEl?.addEventListener('hidden.bs.modal', (event) => {
            console.log('timeout')
            this.$emit('modalIsGone')
            this.rows = []
        })
    },
    watch: {
        result() {
            this.rows = this.createRows()
            //@ts-expect-error
            const modal = new bootstrap.Modal('#myModal', {})
            modal.show()
        },
    },
    computed: {
        rowStyle() {
            return (side: PlayerSide) => ({
                color: side === PlayerSide.TOP ? 'var(--top-player-color)' : 'var(--bottom-player-color)',
                'text-shadow': '1px 1px black',
            })
        },
    },
    methods: {
        createRows(): TableRow[] {
            const stats = initStats()
            const endGameResult = this.result as EndGameResult
            const analyser = new PlayerMovesAnalyser(PlayerSide.TOP)
            const rows: TableRow[] = []
            endGameResult.movesHistory.forEach((move) => {
                ++stats[move.playerSide].moves
                if (move.capturedSeeds) {
                    ++stats[move.playerSide].capture
                    stats[move.playerSide].capturedSeeds += move.capturedSeeds
                }
            })

            const format = (text: number, pad: number = 2): string => {
                return text.toString().padStart(pad)
            }

            rows.push({
                title: 'Score',
                topPlayer: format(analyser.checkPlayerScore(endGameResult.board)),
                bottomPlayer: format(analyser.checkOppositePlayerScore(endGameResult.board)),
            })
            rows.push({
                title: 'Moves',
                topPlayer: format(stats[PlayerSide.TOP].moves),
                bottomPlayer: format(stats[PlayerSide.BOTTOM].moves),
            })
            rows.push({
                title: 'Captures (seeds)',
                topPlayer:
                    format(stats[PlayerSide.TOP].capture) + ` (${format(stats[PlayerSide.TOP].capturedSeeds, 1)})`,
                bottomPlayer:
                    format(stats[PlayerSide.BOTTOM].capture) +
                    ` (${format(stats[PlayerSide.BOTTOM].capturedSeeds, 1)})`,
            })
            return rows
        },
    },
}
</script>
<style scoped>
.modal {
    background-color: var(--vt-c-white-mute);
    opacity: 0.7;
}

.modal-content {
    background-color: transparent;
    border: none;
    color: var(--hihglighted-number-color);
}

.modal-title {
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px red;
    border-color: var(--vt-c-black);
}

th,
td {
    font-weight: bold;
    background-color: transparent;
    color: var(--hihglighted-number-color);
    text-shadow: 1px 1px red;
    border-color: var(--vt-c-black);
    border-bottom-width: 3px;
}
</style>

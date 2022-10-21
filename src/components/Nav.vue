<template>
    <div class="nav">
        <h1 class="gameName" v-on:click="refresh()">2048</h1>
        <div class="container">
            <div class="score-container">
                <div class="title">SCORE</div>
                <div class="score">{{ score }}</div>
            </div>
            <div class="best-container">
                <div class="title">BEST</div>
                <div class="score">{{ bestScore }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Game from '../store/Game'
import Grids from '../store/Grids'
import EventBus, { EventType } from '../event'
export default {
    name: "Nav",
    data: function () {
        return {
            score: 0,
            bestScore: 0
        }
    },
    created() {
        this.score = JSON.parse(localStorage.getItem('score')) || 0
        this.bestScore = JSON.parse(localStorage.getItem('bestScore')) || 0
        let GridsStorge = JSON.parse(JSON.stringify(localStorage.getItem('GridsStorge')))
        if (GridsStorge) {Grids.GridsInit(); Game.GameReload(GridsStorge); }
        else Game.GameInit()
    },
    mounted() {

        EventBus.$on(EventType.scoreChange, (data) => {
            this.score += data
        })
        EventBus.$on(EventType.createNewGame, () => {
            if (this.score >= this.bestScore) {
                this.bestScore = this.score
                this.score = 0
            }
        })
        window.addEventListener('beforeunload', e => this.beforeunloadFn(e))
    },
    methods: {
        refresh() {
            location.reload()
        },
        beforeunloadFn(e) {
            localStorage.removeItem('score')
            localStorage.removeItem('bestScore')
            localStorage.removeItem('GridsStorge')
            localStorage.setItem('score', this.score)
            localStorage.setItem('bestScore', this.bestScore)
            let GridsStorgeArr = JSON.stringify(Grids.Grids)
            localStorage.setItem('GridsStorge', GridsStorgeArr)
        }
    },
    beforeDestroy() {
        window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
    },
}
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
    display: flex;
    position: relative;
}

.gameName {
    color: #776e65;
    font-weight: 700;
    cursor: pointer;
    margin-left: 10px;
}

.container {
    display: flex;
    position: absolute;
    right: 0px;
}

.best-container,
.score-container {
    .title {
        width: 100%;
        height: 13px;
        text-transform: uppercase;
        font-size: 13px;
        line-height: 13px;
        color: #eee4da;
    }

    .score {
        margin-top: 5px;
    }

    background: #bbada0;
    padding: 5px 10px;
    font-size: 20px;
    height: 50px;
    font-weight: 600;
    border-radius: 3px;
    color: #fff;
    margin-top: 8px;
    margin-right: 8px;
    text-align: center;
}
</style>
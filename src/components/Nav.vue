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
import EventBus, { EventType } from '../event'
export default {
    name: "Nav",
    data: function () {
        return {
            score: 0,
            bestScore: 0
        }
    },
    mounted(){
        EventBus.$on(EventType.scoreChange,(data) => {
            this.score += data
        })
    },
    methods: {
        refresh() {
            location.reload()
        }
    }
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
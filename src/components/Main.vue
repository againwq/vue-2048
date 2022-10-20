<template>
  <div class="main">
    <div class="grid-container">
      <div class="grid-row">
        <Grid v-for="column in columns" :key="column" :position="[1,column]"></Grid>
      </div>
      <div class="grid-row">
        <Grid v-for="column in columns" :key="column" :position="[2,column]"></Grid>
      </div>
      <div class="grid-row">
        <Grid v-for="column in columns" :key="column" :position="[3,column]"></Grid>
      </div>
      <div class="grid-row">
        <Grid v-for="column in columns" :key="column" :position="[4,column]"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from './Grid.vue';
import EventBus, { EventType } from '../event'
import Game from '../store/Game'
import Tile from '../store/Tile'
export default {
  name: 'Main',
  components: { Grid },
  data: function () {
    return {
      columns: 4,
    }
  },
  
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key == 'ArrowUp') {
        this.keyUp()
      } else if (e.key == 'ArrowDown') {
        this.keyDown()
      } else if (e.key == 'ArrowLeft') {
        this.keyLeft()
      } else if (e.key == 'ArrowRight') {
        this.keyRight()
      }
    })
  },
  methods: {
    keyUp() {
      let {changeScore,mergeTile} = Game.keyUp()
      let addTilePosition = Tile.addTile({ direction: 'y', line: 1 })
      EventBus.$emit(EventType.scoreChange, changeScore)
      EventBus.$emit(EventType.addTile,addTilePosition)
      EventBus.$emit(EventType.mergeTile,mergeTile)
      
    },
    keyDown() {
      let {changeScore,mergeTile} = Game.keyDown()
      let addTilePosition = Tile.addTile({ direction: 'y', line: 4 })
      EventBus.$emit(EventType.scoreChange, changeScore)
      EventBus.$emit(EventType.addTile,addTilePosition)
      EventBus.$emit(EventType.mergeTile,mergeTile)
    },
    keyLeft() {
      let {changeScore,mergeTile} = Game.keyLeft()
      let addTilePosition = Tile.addTile({ direction: 'x', line: 1 })
      EventBus.$emit(EventType.scoreChange, changeScore)
      EventBus.$emit(EventType.addTile,addTilePosition)
      EventBus.$emit(EventType.mergeTile,mergeTile)
    },
    keyRight() {
      let {changeScore,mergeTile} = Game.keyRight()
      let addTilePosition = Tile.addTile({ direction: 'x', line: 4 })
      EventBus.$emit(EventType.scoreChange, changeScore)
      EventBus.$emit(EventType.addTile,addTilePosition)
      EventBus.$emit(EventType.mergeTile,mergeTile)
    },
  }
}
</script>

<style>
.main {
  margin-top: 10px;
  width: 440px;
  height: 440px;
  background: #bbada0;
  border-radius: 6px;
  padding: 10px 0px 0px 10px;
}
.grid-row {
  display: flex;
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
}

.grid-container {
  margin: 10px, 10px;
}
</style>
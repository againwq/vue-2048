<template>
  <div class="Grid">
    <div class="tile-container" v-if="isShow" :style="Tilestyle" v-bind:class="{initAnimation:isInit,mergeAnimation: isMerge}">
      {{ value }}
    </div>
  </div>
</template>

<script>
import EventBus, { EventType } from '../event'
import Grids from '../store/Grids'
import Tile from '../store/Tile'
export default {
  name: "Grid",
  components: { Tile },

  props: {
    position: []
  },
  data: function () {
    return {
      Grids: Grids.Grids,
      value: 0,
      isShow: false,
      isInit: false,
      isMerge: false,
      Tilestyle: {
        backgroundColor: '#eee4da',
        fontSize: '34px',
        color: '#776e65'
      },
    };
  },
  beforeMount() {
    this.isShow = Tile.getTile(this.position).isShow;
    this.value = Tile.getTile(this.position).value;
  },
  mounted(){
    EventBus.$on(EventType.addTile, (data)=>{
      if(this.position[0] == data[0] && this.position[1] == data[1]){
          this.isShow = true
          this.isInit = true
          setTimeout(() => this.isInit = false, 1000)
      }
    })
    EventBus.$on(EventType.mergeTile,(data) => {
      console.log(data)
      data.forEach(tile => {
        if(this.position[0] == tile.position[0] && this.position[1] == tile.position[1]){
          this.isShow = true
          this.isMerge = true
          setTimeout(() => this.isMerge = false, 1000)
        }
      });
    })
  },
  watch: {
    Grids: function (oldState, newState) {
        this.isShow = Tile.getTile(this.position).isShow;
        this.value = Tile.getTile(this.position).value;
        let style = Tile.getTilestyle(this.value)
        this.Tilestyle.color = style.color
        this.Tilestyle.backgroundColor = style.backgroundColor
        this.Tilestyle.fontSize = style.fontSize
    },
  },

}
</script>

<style>
.Grid {
  border-radius: 3px;
  background: rgba(238, 228, 218, 0.35);
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.tile-container {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  line-height: 100px;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.initAnimation{
  animation: appear 0.5s;
}

@keyframes merge {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
.mergeAnimation{
  animation: merge 0.7s;
}
</style>
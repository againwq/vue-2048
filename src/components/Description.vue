<template>
  <div class="desc-container">
    <div class="desc-txt">
      <div><strong>Play 2048 Game Online</strong></div>
      <div>Join the numbers and get to the <strong>2048 tiles!</strong></div>
    </div>
    <div class="restart-button" v-on:click="restart"><span>New Game</span></div>
  </div>
</template>

<script>
import EventBus, { EventType } from '../event'
import Game from '../store/Game'
export default {
   name: "Description",
   methods:{
    restart(){
      EventBus.$emit(EventType.createNewGame)
      Game.GameInit()
    }
   }
}
</script>

<style>
.desc-container{
    width: 100%;
    display: flex;
    position: relative;
    height: 50px;
}
.desc-txt{
  margin-left: 5px;
  color: #776e65;
  font-size: 15px;
}
.restart-button{
  position: absolute;
  right: 10px;
  background: #8f7a66;
  border-radius: 3px;
  padding: 0 10px;
  text-decoration: none;
  color: #f9f6f2;
  height: 40px;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
  border: 0px;
}

</style>
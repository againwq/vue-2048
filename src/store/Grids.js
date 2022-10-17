export default{
    Grids: new Array(16),
    GridsInit(){
        let index = 0
        for(let i = 1; i <= 4; i++){
            for(let j = 1; j <= 4; j++){
              this.Grids.splice(index, 1, new Object({ isShow: false, value:0, position:[i,j] }))
              index++
            }
        }
    },
}
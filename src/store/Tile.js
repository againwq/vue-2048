
import Grid from './Grids'
export default {
    Tilestyle:[
        { backgroundColor: '#eee4da', fontSize: '34px', color: '#776e65' },
        { backgroundColor: '#ede0c8', fontSize: '34px', color: '#776e65' },
        { backgroundColor: '#f2b179', fontSize: '34px', color: '#f9f6f2' },
        { backgroundColor: '#f59563', fontSize: '34px', color: '#f9f6f2' },
        { backgroundColor: '#f67c5f', fontSize: '34px', color: '#f9f6f2' },
        { backgroundColor: '#f65e3b', fontSize: '34px', color: '#f9f6f2' },
        { backgroundColor: '#edcf72', fontSize: '30px', color: '#f9f6f2' },
        { backgroundColor: '#edcc61', fontSize: '30px', color: '#f9f6f2' },
        { backgroundColor: '#edc850', fontSize: '30px', color: '#f9f6f2' },
        { backgroundColor: '#edc53f', fontSize: '22px', color: '#f9f6f2' },
        { backgroundColor: '#edc22e', fontSize: '22px', color: '#f9f6f2' },
    ],
    TileInit(position, value = 2) {
        Grid.Grids.forEach((tile) => {
            if (tile.position[0] == position[0] && tile.position[1] == position[1]) {
                Grid.Grids.splice(4 * (position[0] - 1) + position[1] - 1, 1, { isShow: true, value, position })
            }
        })
    },
    TileMerge(tile1, tile2) {
        this.TileInit(tile1.position, tile1.value + tile2.value)
        this.destroyTile(tile2.position)
        return Grid.Grids[4 * (tile1.position[0] - 1) + tile1.position[1] - 1]
    },
    getTile(position) {
        return Grid.Grids.find((element) => {
            return position[0] == element.position[0] && position[1] == element.position[1]
        })
    },
    destroyTile(position) {
        Grid.Grids.forEach((tile) => {
            if (tile.position[0] == position[0] && tile.position[1] == position[1]) {
                Grid.Grids.splice(4 * (position[0] - 1) + position[1] - 1, 1, { isShow: false, value: 0, position })
            }
        })
    },
    addTile(except) {
        const temp = Grid.Grids.filter((element) => {
            return element.isShow ? false : true
        }).filter((element) => {
            if (except.direction == 'y' && element.position[0] == except.line)
                return false
            else if (except.direction == 'x' && element.position[1] == except.line)
                return false
            return true
        })

        if (temp.length) {
            let p = [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)]
            for (let i = 0; i < 1;) {
                let tile = temp.find((element) => {
                    return element.position[0] == p[0] && element.position[1] == p[1]
                })
                if (tile) { this.TileInit(p); break }
                else p = [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)]
            }
            return p
        }
        return [0,0]
        
    },
    getTilestyle(value) {
        if (value) {
            let time = 0
            while (value >= 2) {
                value = value / 2
                time++
            }
            return this.Tilestyle[time - 1]
        }
        return this.Tilestyle[0]
    }

}
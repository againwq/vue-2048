import Tile from './Tile'
import Grid from './Grids'
export default {
    GameInit() {
        Grid.GridsInit()
        let Temp = new Array(2);
        let p = new Array(2);
        for (let time = 0; time < 2;) {
            p = [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)]
            if (p[0] != Temp[1] && p[1] != Temp[1]) {
                Temp = p
                Tile.TileInit(p)
                time++
            }
        }
    },
    keyUp() {
        let changeScore = 0
        let mergeTile = []
        for (let x = 2; x <= 4; x++) {
            for (let y = 1; y <= 4; y++) {
                let presentTile = Tile.getTile([x, y])
                if (presentTile.isShow)
                    for (let i = x; i > 1; i--) {
                        let lastTile = Tile.getTile([i - 1, presentTile.position[1]])
                        if (!lastTile.isShow) {
                            presentTile = Tile.TileMerge(lastTile, presentTile)
                        } else if (lastTile.value == presentTile.value) {
                            presentTile = Tile.TileMerge(lastTile, presentTile)
                            changeScore += lastTile.value
                            mergeTile.push(lastTile)
                            break
                        }
                        else break
                    }

            }
        }
        return {changeScore,mergeTile}
    },
    keyDown() {
        let changeScore = 0
        let mergeTile = []
        for (let x = 3; x >= 1; x--) {
            for (let y = 1; y <= 4; y++) {
                let presentTile = Tile.getTile([x, y])
                if (presentTile.isShow)
                    for (let i = x; i < 4; i++) {
                        let nextTile = Tile.getTile([i + 1, presentTile.position[1]])
                        if (!nextTile.isShow) {
                            presentTile = Tile.TileMerge(nextTile, presentTile)
                        } else if (nextTile.value == presentTile.value) {
                            presentTile = Tile.TileMerge(nextTile, presentTile)
                            changeScore += nextTile.value
                            mergeTile.push(nextTile)
                            break
                        }
                        else break
                    }
            }
        }

        return {changeScore,mergeTile}

    },
    keyLeft() {
        let changeScore = 0
        let mergeTile = []
        for (let y = 2; y <= 4; y++) {
            for (let x = 1; x <= 4; x++) {
                let presentTile = Tile.getTile([x, y])
                if (presentTile.isShow)
                    for (let i = y; i > 1; i--) {
                        let leftTile = Tile.getTile([presentTile.position[0], i - 1])
                        if (!leftTile.isShow) {
                            presentTile = Tile.TileMerge(leftTile, presentTile)
                        } else if (leftTile.value == presentTile.value) {
                            presentTile = Tile.TileMerge(leftTile, presentTile)
                            changeScore += leftTile.value
                            mergeTile.push(leftTile)
                            break
                        }
                        else break
                    }

            }
        }
        return {changeScore,mergeTile}

    },
    keyRight() {
        let changeScore = 0
        let mergeTile = []
        for (let y = 3; y >= 1; y--) {
            for (let x = 1; x <= 4; x++) {
                let presentTile = Tile.getTile([x, y])
                if (presentTile.isShow)
                    for (let i = y; i < 4; i++) {
                        let rightTile = Tile.getTile([presentTile.position[0], i + 1])
                        if (!rightTile.isShow) {
                            presentTile = Tile.TileMerge(rightTile, presentTile)
                        } else if (rightTile.value == presentTile.value) {
                            presentTile = Tile.TileMerge(rightTile, presentTile)
                            changeScore += rightTile.value
                            mergeTile.push(rightTile)
                            break
                        }
                        else break
                    }
            }
        }
        return {changeScore,mergeTile}
    }
}
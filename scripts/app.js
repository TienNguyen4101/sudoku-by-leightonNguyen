import { solve, insertValues, populateValues } from './solver.js'
import { drawBoard } from './draw_board.js'
import { loadRandomBoard } from './load_boards.js'

const solveButton = document.querySelector("#solve-button")
const clearButton = document.querySelector("#clear-button")
const loadButton = document.querySelector('#load-button')

function main() {
    


        drawBoard()

        solveButton.addEventListener('click', () => {
        var startTime = performance.now()
            insertValues()
            solve()
            populateValues()
        var endTime = performance.now()
            console.log(`task estimate ${endTime - startTime} ms`)
        })
        clearButton.addEventListener('click', () => window.location.reload(true))
        loadButton.addEventListener('click', () => loadRandomBoard())

}
main()
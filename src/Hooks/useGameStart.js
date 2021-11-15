import { useEffect, useState } from "react/cjs/react.development"
import { useDropdown } from "./useDropdown"

export const useGameStart = () => {
    const [gameStart, setGameStart] = useState(false)
    const [board, setBoard] = useState(null)
    const [gameEnd, setGameEnd] = useState(false)
    const [startTime, setStartTime] = useState(Date.now)
    const [dropdown, setDropdown] = useState(false)
    const [position, setPosition] = useDropdown()
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })




    const checkCoords = (e) => {
        let xOffset = e.target.offsetLeft
        let xCoords = e.pageX
        let yOffset = e.target.offsetTop
        let yCoords = e.pageY - 64
        let x = xCoords - xOffset
        let y = yCoords - yOffset
        setPosition({xCoords, yCoords})
        setCoords({x, y})
        setDropdown(!dropdown)
        console.log({xOffset})
        console.log({xCoords})
        console.log({yOffset})
        console.log({yCoords})
        console.log({x})
        console.log({y})
}

const returnStart = () => {
    setGameStart(false)
    setBoard(null)
}

    useEffect(() => {
        console.log(board)
        console.log(startTime)
    }, [board, startTime])

    return [
        gameStart, setGameStart, 
        board, setBoard,
        gameEnd, setGameEnd,
        startTime, setStartTime,
        dropdown, setDropdown,
        position, 
        coords,  
        checkCoords,
        returnStart
    ]
    
}
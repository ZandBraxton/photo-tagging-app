import { useEffect, useState } from "react/cjs/react.development"
import { useDropdown } from "./useDropdown"
import { getData } from '../Hooks/useFirestore'

export const useGameStart = () => {
    const [gameStart, setGameStart] = useState(false)
    const [board, setBoard] = useState(null)
    const [gameEnd, setGameEnd] = useState(false)
    const [startTime, setStartTime] = useState(Date.now())
    const [dropdown, setDropdown] = useState(false)
    const [position, setPosition] = useDropdown()
    const [found, setFound] = useState({
        0: false,
        1: false,
        2: false
    })
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

const handleDropdownClick = (value) => {
    const promise = getData();
    promise.then((result) => {
        let location = result[board.id][value]
        console.log(location)
        if (coords.x >= location.xmin && coords.x <= location.xmax && coords.y >= location.ymin && coords.y <= location.ymax) {
            console.log(`Found ${location.name}`)
            //found function
            console.log(location)
            setFound((prevState) => ({
                ...prevState,
                [value]: true
            }))
        }
        setDropdown(false)
    })
}



const returnStart = () => {
    setGameStart(false)
    setBoard(null)
    setFound({
        0: false,
        1: false,
        2: false
    })
    setGameEnd(false)
}
    useEffect(() => {
        if (gameStart === true) {
            setStartTime(Date.now())
        }
    }, [gameStart])


    useEffect(() => {
        const checkForGameover = () => {
            if (found[0] === true && found[1] === true && found[2] === true) {
                setGameEnd(true)
            }
        }
        checkForGameover()
    }, [board, found, startTime])

    return [
        gameStart, setGameStart, 
        board, setBoard,
        gameEnd, setGameEnd,
        startTime, setStartTime,
        dropdown,
        position, 
        found,  
        checkCoords,
        returnStart,
        handleDropdownClick
    ]
    
}
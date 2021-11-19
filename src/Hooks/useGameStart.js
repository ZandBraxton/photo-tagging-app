import { useEffect, useState } from "react"
import { useDropdown } from "./useDropdown"
import { getData } from '../Hooks/useFirestore'

export const useGameStart = () => {
    const [viewLeaderboard, setViewLeaderboard] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [board, setBoard] = useState(null);
    const [gameEnd, setGameEnd] = useState(false);
    const [startTime, setStartTime] = useState(Date.now());
    const [dropdown, setDropdown] = useState(false);
    const [position, setPosition] = useDropdown();
    const [found, setFound] = useState({
        0: false,
        1: false,
        2: false
    });
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });




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
}

const handleDropdownClick = (value) => {
    const promise = getData();
    promise.then((result) => {
        let location = result[board.id][value]
        if (coords.x >= location.xmin && coords.x <= location.xmax && coords.y >= location.ymin && coords.y <= location.ymax) {       
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
    setViewLeaderboard(false)
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
        viewLeaderboard, 
        setViewLeaderboard,
        gameStart, 
        setGameStart, 
        board, 
        setBoard,
        gameEnd, 
        startTime, 
        dropdown,
        position, 
        found,  
        checkCoords,
        returnStart,
        handleDropdownClick
    ];
    
};
import { useEffect, useState } from "react/cjs/react.development"

export const useGameStart = () => {
    const [gameStart, setGameStart] = useState(false)
    const [board, setBoard] = useState(null)

    useEffect(() => {
        console.log(board)
    }, [board])

    return [gameStart, setGameStart, board, setBoard]
    
}
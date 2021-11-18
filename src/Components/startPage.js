import { StartPageBoard } from './startPageBoards'
import { Spinner } from './spinner'
import '../styles/startpage.css'
import { useEffect, useState } from 'react/cjs/react.development'

export const StartPage = ({boards, setBoard}) => {
    const [boardComponents, setBoardComponents] = useState(null)
    const [loading, setLoading] = useState(true)
    const [visable, setVisable] = useState("0")
    useEffect(() => {
        setLoading(true)
        const boardComponents = boards.map((board) => (
            <StartPageBoard
                board={board} 
                key={board.id} 
                setBoard={setBoard}
            />
        ))
        setBoardComponents(boardComponents)
        setLoading(false)
        setTimeout(() => {
            setVisable("1")
        }, 300)
    }, [])

    if(loading)
    return (
        <Spinner/>
    )

    return(
        <div>
            <h1 className="select-tag">Select your board</h1>
            <div className=
            "transition-wrapper"
            style={{opacity: visable}}
            >
                <div className="board-container">
                {boardComponents}
                </div>
            </div>
            
        </div>
    )
}
import { StartPageBoard } from './startPageBoards'
import '../styles/startpage.css'

export const StartPage = ({boards, setBoard}) => {
    console.log(boards)

    const boardComponents = boards.map((board) => (
        <StartPageBoard
            board={board} 
            key={board.id} 
            setBoard={setBoard}
        />
    ))

    return(
        <div>
            <h1 className="select-tag">Select your board</h1>
            <div className="board-container">
            {boardComponents}
            </div>
        </div>
    )
}
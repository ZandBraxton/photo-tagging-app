import '../styles/startPageBoard.css'

export const StartPageBoard = ({board, setBoard}) => {
    return(
        <div className="board-item"
        onClick={() => setBoard(board)}>
            <img
            className="board-item-img"
            src={board.img}
            alt={board.name}
            />
            <div className="board-item-container">
                <h4 className="board-item-name">{board.name}</h4>
            </div>
        </div>
    )

}
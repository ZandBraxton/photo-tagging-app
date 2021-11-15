import '../styles/rules.css'

export const Rules = ({board, gameStart, setGameStart}) => {



    return (
        <div className="rules-container">
            <h1 className="rules-title">RULES</h1>
            <p className="instructions">Be the fastest to find the three characters hidden on the board!</p>
            <div className="character-display">
                <div className="character-container">
                    <p>{board[0].name}</p>
                    <img
                    src={board[0].img}
                    alt={board[0].name}/>
                </div>
                <div className="character-container">
                    <p>{board[1].name}</p>
                    <img
                    src={board[1].img}
                    alt={board[1].name}/>
                </div>
                <div className="character-container">
                    <p>{board[2].name}</p>
                    <img
                    src={board[2].img}
                    alt={board[2].name}/>
                </div>
            </div>
            <button className="game-start"
            onClick={() => setGameStart(!gameStart)}>Game Start</button>

        </div>
    )
}
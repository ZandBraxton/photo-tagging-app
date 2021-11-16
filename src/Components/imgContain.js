// import dreamcast from '../assets/pierre-roussel-dreamcast-web.jpg'
import '../styles/imgContainer.css'
import { Dropdown } from './dropdown'
import { useEffect, useState } from 'react'
import { Rules } from './rules'
import { EndScreen } from './endScreen'


export const ImgContain = ({
    gameStart,
    setGameStart,
    board,
    dropdown, 
    position, 
    found,
    gameEnd,
    startTime,
    checkCoords,
    returnStart,
    handleDropdownClick
}) => {
    const [finalTime, setFinalTime] = useState(null)


useEffect(() => {
    window.scrollTo(0, 0)
}, [gameStart])

useEffect(() => {
    if (gameEnd === true) {
        const endTime = Date.now()
        const finalTimeValue = (endTime - startTime) / 1000
        setFinalTime(finalTimeValue)
    }
}, [gameEnd])

return (
    <div className="game-container">
        {gameStart === false ? 
        
        <Rules
        board={board}
        gameStart={gameStart}
        setGameStart={setGameStart}
        ></Rules>
        :
        <div>
            {gameEnd === false ? null : 
            
            <EndScreen
            finalTime={finalTime}
            returnStart={returnStart}
            board={board}
            >
                
            </EndScreen>}
            <div className="character-display-board">
                <div className="character-container-board">
                    <p>{board[0].name}</p>
                    {found[0] === false ? 
                    <img
                    src={board[0].img}
                    alt={board[0].name}
                    /> : 
                    <img
                    style={{opacity: 1}}
                    src={board[0].img}
                    alt={board[0].name}
                    />}
                </div>
                <div className="character-container-board">
                    <p>{board[1].name}</p>
                    {found[1] === false ? 
                    <img
                    src={board[1].img}
                    alt={board[1].name}
                    /> : 
                    <img
                    style={{opacity: 1}}
                    src={board[1].img}
                    alt={board[1].name}
                    />}
                </div>
                <div className="character-container-board">
                    <p>{board[2].name}</p>
                    {found[2] === false ? 
                    <img
                    src={board[2].img}
                    alt={board[2].name}
                    /> : 
                    <img
                    style={{opacity: 1}}
                    src={board[2].img}
                    alt={board[2].name}
                    />}
                </div>
            </div>
            <div className="img-container">
                {dropdown ? <Dropdown 
                position={position}
                board={board}
                handleDropdownClick={handleDropdownClick}
                    ></Dropdown> : null}
                <img
                    className="image"
                    src={board.img}
                    alt="img"
                    onClick={(e) => checkCoords(e)}
                />
            </div>
        </div>
        }
       
    </div>
)



}
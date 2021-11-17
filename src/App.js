import { Navbar } from "./Components/nav"
import { StartPage } from "./Components/startPage"
import { ImgContain } from "./Components/imgContain"
import { data } from "./assets/data"
import { dataLocal } from "./assets/dataLocal"
import './styles/app.css'
import { useGameStart } from "./Hooks/useGameStart"
import { useState } from "react/cjs/react.development"
import { Leaderboard } from "./Components/leaderboard"



const App = () => {


const [
  viewLeaderboard,
  setViewLeaderboard,
  gameStart, 
  setGameStart, 
  board, 
  setBoard,
  gameEnd, 
  setGameEnd,
  startTime, 
  setStartTime,
  dropdown, 
  position, 
  found,
  checkCoords,
  returnStart,
  handleDropdownClick
  ] = useGameStart()


  if (viewLeaderboard === true) {
    return (
      <div>
      <Navbar 
      board={board}
      setBoard={setBoard}
      viewLeaderboard={viewLeaderboard}
      setViewLeaderboard={setViewLeaderboard}
      returnStart={returnStart}
      ></Navbar>
      <Leaderboard></Leaderboard>
    
    </div>
    )
  } else {
    return (
        <div>
          <Navbar 
          board={board}
          setBoard={setBoard}
          setViewLeaderboard={setViewLeaderboard}
          returnStart={returnStart}
          ></Navbar>
          {board === null ? 
          <StartPage
          boards={dataLocal}
          setBoard={setBoard}
          ></StartPage>
          : 
          <ImgContain
          gameStart={gameStart}
          setGameStart={setGameStart}
          dropdown={dropdown}
          position={position}
          checkCoords={checkCoords}
          handleDropdownClick={handleDropdownClick}
          startTime={startTime}
          gameEnd={gameEnd}
          found={found}
          returnStart={returnStart}
          board={board}></ImgContain>
        }
        </div>
        )


  }

 
}

export default App
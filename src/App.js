import { Navbar } from "./Components/nav"
import { StartPage } from "./Components/startPage"
import { ImgContain } from "./Components/imgContain"
import { data } from "./assets/data"
import { dataLocal } from "./assets/dataLocal"
import './styles/app.css'
import { useGameStart } from "./Hooks/useGameStart"



const App = () => {
const [
  gameStart, 
  setGameStart, 
  board, 
  setBoard,
  gameEnd, 
  setGameEnd,
  startTime, 
  setStartTime,
  dropdown, 
  setDropdown,
  position, 
  coords,  
  checkCoords,
  returnStart
  ] = useGameStart()

  return (
    <div>
      <Navbar 
      board={board}
      setBoard={setBoard}
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
       setDropdown={setDropdown}
       position={position}
       coords={coords}
       checkCoords={checkCoords}
       board={board}></ImgContain>
    }
    </div>
  )
}

export default App
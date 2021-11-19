import { Navbar } from "./Components/nav";
import { StartPage } from "./Components/startPage";
import { GameBoard } from "./Components/gameBoard";
import { dataLocal } from "./assets/dataLocal";
import './styles/app.css';
import { useGameStart } from "./Hooks/useGameStart";
import { Leaderboard } from "./Components/leaderboard";



const App = () => {


const [
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
  ] = useGameStart();

//render leaderboard
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
    );
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
          <GameBoard
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
          board={board}></GameBoard>
        }
        </div>
        );


  };

 
};

export default App;
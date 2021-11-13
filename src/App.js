import { Navbar } from "./Components/nav"
import { StartPage } from "./Components/startPage"
import { ImgContain } from "./Components/imgContain"
import { data } from "./assets/data"
import { dataLocal } from "./assets/dataLocal"
import './styles/app.css'
import { useGameStart } from "./Hooks/useGameStart"



const App = () => {
const [gameStart, setGameStart, board, setBoard] = useGameStart()

  return (
    <div>
      <Navbar></Navbar>
      <StartPage
       boards={dataLocal}
       setBoard={setBoard}
       ></StartPage>
      {/* <ImgContain></ImgContain> */}
    </div>
  )
}

export default App
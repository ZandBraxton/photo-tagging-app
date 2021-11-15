// import dreamcast from '../assets/pierre-roussel-dreamcast-web.jpg'
import {data} from '../assets/data'
import '../styles/imgContainer.css'
import { getData } from '../Hooks/useFirestore'
import { Dropdown } from './dropdown'
import { useDropdown } from '../Hooks/useDropdown'
import { useEffect, useState } from 'react'
import { firestore } from '../firebase/config'
import { collection, doc, getDoc } from '@firebase/firestore'
import { Rules } from './rules'


export const ImgContain = ({
    gameStart,
    setGameStart,
    board,
    dropdown, 
    setDropdown,
    position, 
    coords, 
    checkCoords
}) => {

console.log(board.name)

useEffect(() => {
    window.scrollTo(0, 0)
}, [gameStart])

const handleDropdownClick = (value) => {
    const promise = getData();
    promise.then((result) => {
        let location = result[board.id][value]
        console.log(location)
        if (coords.x >= location.xmin && coords.x <= location.xmax && coords.y >= location.ymin && coords.y <= location.ymax) {
            console.log(`Found ${location.name}`)
            //found function
        } else {
            console.log("Not found")
        }
        setDropdown(false)
    })
}




return (
    <div className="game-container">
        {gameStart === false ? 
        
        <Rules
        board={board}
        gameStart={gameStart}
        setGameStart={setGameStart}
        ></Rules>
        
        :

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
        
        }
       
    </div>
)



}
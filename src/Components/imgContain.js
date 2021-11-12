// import dreamcast from '../assets/pierre-roussel-dreamcast-web.jpg'
import {data} from '../assets/data'
import '../styles/imgContainer.css'
import { getData } from '../Hooks/useFirestore'
import { Dropdown } from './dropdown'
import { useDropdown } from '../Hooks/useDropdown'
import { useEffect, useState } from 'react'
import { firestore } from '../firebase/config'
import { collection, doc, getDoc } from '@firebase/firestore'


export const ImgContain = () => {
    const [dropdown, setDropdown] = useState(false)
    const [position, setPosition] = useDropdown()
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })
    const [board, setBoard] = useState(data.wii)
console.log(board.name)

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

const checkCoords = (e) => {
        let xOffset = e.target.offsetLeft
        let xCoords = e.pageX
        let yOffset = e.target.offsetTop
        let yCoords = e.pageY
        let x = xCoords - xOffset
        let y = yCoords - yOffset
        setPosition({xCoords, yCoords})
        setCoords({x, y})
        setDropdown(!dropdown)
        console.log({xOffset})
        console.log({xCoords})
        console.log({yOffset})
        console.log({yCoords})
        console.log({x})
        console.log({y})

}


return (
    <div className="img-container">
        {/* {dropdown ? <Dropdown 
           position={position}
           board={board}
           handleDropdownClick={handleDropdownClick}
            ></Dropdown> : null} */}
        <img
            className="image"
            src={board.img}
            alt="img"
            onClick={(e) => checkCoords(e)}
        />
    </div>
    
)



}
// import dreamcast from '../assets/pierre-roussel-dreamcast-web.jpg'
import data from '../assets/data'
import '../styles/imgContainer.css'


export const ImgContain = () => {
    

const checkCoords = (e) => {
    let xOffset = e.target.offsetLeft
    let xCoords = e.clientX
    let yOffset = e.target.offsetTop
    let yCoords = e.clientY
    let x = xCoords - xOffset
    let y = yCoords - yOffset
 
    console.log({xOffset})
    console.log({xCoords})
    console.log({yOffset})
    console.log({yCoords})
    console.log({x})
    console.log({y})
}


return (
    <div className="img-container">
        <img
            src={data.dreamcast.img}
            alt="img"
            onClick={(e) => checkCoords(e)}
        />


    </div>
    
)



}
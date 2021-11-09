// import dreamcast from '../assets/pierre-roussel-dreamcast-web.jpg'
import data from '../assets/data'
import '../styles/imgContainer.css'


export const ImgContain = () => {
    

const checkCoords = (e) => {
    let xOffset = e.target.offsetLeft
    let xCoords = e.pageX
    let yOffset = e.target.offsetTop
    let yCoords = e.pageY
    let x = xCoords - xOffset
    let y = yCoords - yOffset

    const location = data.dreamcast.zero
    // console.log(data.dreamcast.zero)
    if (x >= location.xmin && x <= location.xmax && y >= location.ymin && y <= location.ymax) {
        console.log("FOUND")
    }
 
    // console.log({xOffset})
    // console.log({xCoords})
    // console.log({yOffset})
    // console.log({yCoords})
    // console.log({x})
    // console.log({y})
}


return (
    <div className="img-container">
        <img
            className="image"
            src={data.dreamcast.img}
            alt="img"
            onClick={(e) => checkCoords(e)}
        />


    </div>
    
)



}
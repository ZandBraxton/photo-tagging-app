import '../styles/dropdown.css'

export const Dropdown = ({position, board, handleDropdownClick},) => {
  console.log(position)

    return(
        <div className="dropdown" style={{top: position.yCoords, left: position.xCoords }}>
            <ul className="dropdown-ul">
                <li 
                className="dropdown-li"
                onClick={() => handleDropdownClick("0")}
                >{board[0].name}</li>
                <li 
                className="dropdown-li"
                onClick={() => handleDropdownClick("1")}
                >{board[1].name}</li>
                <li 
                className="dropdown-li"
                onClick={() => handleDropdownClick("2")}
                >{board[2].name}</li>
            </ul>
        </div>
    )
}
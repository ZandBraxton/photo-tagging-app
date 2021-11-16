import { useEffect, useState } from 'react/cjs/react.development'
import '../styles/endscreen.css'

export const EndScreen = ({finalTime, returnStart, board}) => {
    const [username, setUsername] = useState('')


    const handleChange = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }
    
    const saveToLeaderboard = () => {
        //data here
    }

    useEffect(() => {
        console.log(username)
    }, [username])

    return (
        <div className="endscreen-wrapper">
            <div className="endscreen-container">
                <h1>Congratulations!</h1>
                <p>You found them all in {finalTime} seconds!</p>
                <p>Enter your username to save your score!</p>
                <input 
                type="text"
                className="username-input"
                maxLength='16'
                onChange={handleChange}
                required
                />
                <div className="button-container">
                    <button
                     className="cancel"
                     onClick={() => returnStart()}
                     >Cancel</button>
                    <button className="save">Save</button>
                </div>
                
            </div>
        </div>
    )
}
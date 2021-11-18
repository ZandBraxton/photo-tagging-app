import { addDoc, collection} from '@firebase/firestore'
import { useState } from 'react/cjs/react.development'
import db from '../firebase/config'
import '../styles/endscreen.css'

export const EndScreen = ({finalTime, returnStart, board}) => {
    const [username, setUsername] = useState('')


    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    
    const saveToLeaderboard = async () => {
        try {            
            await addDoc(collection(db, 'leaderboards', `${board.name}`, 'users'), {
                username: username,
                score: parseFloat(finalTime)
            }) 
        } catch(error) {
            console.error('Error writing new message to Firebase Database', error);
        }
        returnStart()
    }

 



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
                    <button 
                    className="save"
                    onClick={() => saveToLeaderboard()}
                    >Save</button>
                </div>
                
            </div>
        </div>
    )
}
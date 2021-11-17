import { addDoc, collection, doc, setDoc } from '@firebase/firestore'
import { useEffect, useState } from 'react/cjs/react.development'
import db from '../firebase/config'
import { getLeaderboard } from '../Hooks/getLeaderboards'
import '../styles/endscreen.css'

export const EndScreen = ({finalTime, returnStart, board}) => {
    const [username, setUsername] = useState('')


    const handleChange = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }
    
    const saveToLeaderboard = async () => {
        try {            
            await addDoc(collection(db, 'leaderboards', `${board.name}`, 'users'), {
                username: username,
                score: finalTime
            }) 
        } catch(error) {
            console.error('Error writing new message to Firebase Database', error);
        }
        //data here
    }

 

    useEffect(() => {
        console.log(username)
        const promise = getLeaderboard()
        console.log(promise)
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
                    <button 
                    className="save"
                    onClick={() => saveToLeaderboard()}
                    >Save</button>
                </div>
                
            </div>
        </div>
    )
}
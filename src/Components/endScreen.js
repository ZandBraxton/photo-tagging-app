import { addDoc, collection } from '@firebase/firestore'
import { useEffect, useState } from 'react/cjs/react.development'
import { firestore } from '../firebase/config'
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
            await addDoc(collection(firestore, 'leaderboards', 'T2ZZYxQ5FNOzpSFD2ZDz', 'users'), {
                username: username,
                score: `${finalTime}'s`
            }) 
        } catch(error) {
            console.error('Error writing new message to Firebase Database', error);
        }
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
                    <button 
                    className="save"
                    onClick={() => saveToLeaderboard()}
                    >Save</button>
                </div>
                
            </div>
        </div>
    )
}
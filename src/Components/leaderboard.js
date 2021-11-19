import { collection, getDocs, limit, orderBy, query } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import db from '../firebase/config'
import { ArrowLeft } from '@material-ui/icons'
import { ArrowRight } from '@material-ui/icons'
import { Spinner } from './spinner'
import '../styles/leaderboard.css'

export const Leaderboard = () => {
    const [scores, setScores] = useState(null)
    const [loading, setLoading] = useState(true)
    //var to shift between boards
    const [boardN, setBoardN] = useState(0)
    const leaderboards = {
        0: "Dreamcast",
        1: "Gamecube",
        2: "Nintendo 64",
        3: "Playstation 1",
        4: "Playstation 2",
        5: "Playstation 3",
        6: "Playstation 4",
        7: "Nintendo Wii",
        8: "Xbox",
        9: "Xbox 360"
    }

    useEffect(() => {
        setLoading(true)
        const fetchLeaderboard = async () => {
            const result = collection(db, 'leaderboards', leaderboards[boardN], 'users')
            const resultQuery = await query(result, orderBy('score'), limit(10))
            const docSnapshot = await getDocs(resultQuery)
            if (!docSnapshot.empty) {
                setScores(docSnapshot.docs.map((doc) => doc.data()))
            } else {
                setScores(null)
            }
            setLoading(false)
        }
       fetchLeaderboard()
    },[boardN])

    const changeLeaderboard = (direction) => {
        switch(direction) {
            case "left" :
                if(boardN === 0) {
                    setBoardN(9)
                    break;
                }
                setBoardN(boardN - 1)
                break
            case "right" :
                if(boardN === 9) {
                    setBoardN(0)
                    break;
                }
                setBoardN(boardN + 1)
                break
                
                default:
                    break
        }



    }
    

     if(loading)
    return (
        <Spinner/>
    )
let i = 0
    return (
        <div className='leaderboard-container'>
            <div className="current-leaderboard-title">
                <ArrowLeft 
                className="arrow"
                style={{fontSize: "50"}}
                onClick={() => changeLeaderboard("left")}
                />
                <h1>{leaderboards[boardN]}</h1>
                <ArrowRight
                className="arrow"
                style={{fontSize: "50"}}
                onClick={() => changeLeaderboard("right")}
                 />
            </div>

            <div className="scoreboard-container">
                <div className="scoreboard-labels">
                     <h2>Name</h2>
                     <h2>Time</h2>
                </div>
               
                {scores === null ? 
                <p>No Scores Found</p>
                : scores.map((score) => (
                    <div className="scoreboard-info">
                            <p>{`${i += 1}.  ${score.username}`}</p>
                            <p>{score.score}'s</p>
                    </div>
                 ))}
            </div>
        </div>
    )
}
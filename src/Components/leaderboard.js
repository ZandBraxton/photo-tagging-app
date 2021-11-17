import { collection, getDocs, limit, orderBy, query } from '@firebase/firestore'
import { useEffect, useState } from 'react/cjs/react.development'
import db from '../firebase/config'
import { getLeaderboard } from '../Hooks/getLeaderboards'
import '../styles/leaderboard.css'

export const Leaderboard = () => {
    const [scores, setScores] = useState(null)
    const [loading, setLoading] = useState(true)
    const [leaderboards, setLeaderBoards] = useState([
        "Dreamcast",
        "Gamecube",
    ])
    const [selectedBoard, setSelectedBoard] = useState("Dreamcast")

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const result = collection(db, 'leaderboards', selectedBoard, 'users')
            console.log(result)
            const resultQuery = await query(result, orderBy('score'), limit(10))
            console.log(resultQuery)
            const docSnapshot = await getDocs(resultQuery)
            if (!docSnapshot.empty) {
                console.log(docSnapshot.docs[0].data())
                setScores(docSnapshot.docs.map((doc) => doc.data()))
            }

            setLoading(false)
        }
        console.log(scores)
       fetchLeaderboard()
    },[])
    
//    const userComponents = scores.map((score) => (
//        <div>
//             <p>{score.username}</p>
//             <p>{score.time}</p>
//        </div>
       
//    ))
    if(loading)
    return (
        <div>
            <h1>hi</h1>
        </div>
    )

    return (
        <div className='leaderboard-container'>
            <h1>Leaderboard</h1>
            <div>
                {scores.map((score) => (
                    <div>
                            <p>{score.username}</p>
                            <p>{score.score}</p>
                    </div>
       
                 ))}
            </div>
        </div>
    )
}
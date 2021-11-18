import { doc, getDoc } from '@firebase/firestore'
import db from '../firebase/config'

export const getData = async () => {
    const docRef = doc(db, "characters", "boards")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No data found")
    }
}


import { collection, doc, getDoc } from '@firebase/firestore'
import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'

export const getLeaderboard = async () => {
    const docRef = doc(firestore, "leaderboards", "T2ZZYxQ5FNOzpSFD2ZDz")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        console.log(docSnap.data())
        return docSnap.data()
    } else {
        console.log("No data found")
    }
}
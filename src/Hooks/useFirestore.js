import { collection, doc, getDoc } from '@firebase/firestore'
import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'

export const getData = async () => {
    const docRef = doc(firestore, "characters", "boards")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No data found")
    }
}
import { useState } from "react"

export const useDropdown = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    

    return [position, setPosition]

}
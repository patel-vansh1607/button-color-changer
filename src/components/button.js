import { useState } from "react"
import "../styles/button.css"

const ButtonColorChanger = () => {
    const[bgColor, setBgColor] = useState("white")
    return(
        <div className="maindiv" style={{backgroundColor: bgColor, height: "100vh"}}>
            <div className="secdiv">

            </div>
        </div>
    )
}

export default ButtonColorChanger
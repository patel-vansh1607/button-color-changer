import { useState } from "react"
import "../styles/button.css"

const ButtonColorChanger = () => {
    const[bgColor, setBgColor] = useState("white")
    return(
        <div className="maindiv" style={{backgroundColor: bgColor, height: "100vh"}}>
            <div className="secdiv">
                <button onClick={() =>setBgColor ("black")}>Black Background</button>
                <button onClick={() =>setBgColor ("white")}>White Background</button>
                <button onClick={() =>setBgColor ("red")}>Red Background</button>
                <button onClick={() =>setBgColor ("green")}>Green Background</button>
                <button onClick={() =>setBgColor ("blue")}>Blue Background</button>
                <button onClick={() =>setBgColor ("yellow")}>Yellow Background</button>
                <button onClick={() =>setBgColor ("cyan")}>Cyan Background</button>
                <button onClick={() =>setBgColor ("magenta")}>Magenta Background</button>
                <button onClick={() =>setBgColor ("gray")}>Gray Background</button>
                <button onClick={() =>setBgColor ("darkgray")}>Dark Gray Background</button>
                <button onClick={() =>setBgColor ("lightgray")}>Light Gray Background</button>
                <button onClick={() =>setBgColor ("brown")}>Brown Background</button>
                <button onClick={() =>setBgColor ("orange")}>Orange Background</button>
                <button onClick={() =>setBgColor ("purple")}>Purple Background</button>
                <button onClick={() =>setBgColor ("pink")}>Pink Background</button>
                <button onClick={() =>setBgColor ("lime")}>Lime Background</button>
                <button onClick={() =>setBgColor ("navy")}>Navy Background</button>
                <button onClick={() =>setBgColor ("teal")}>Teal Background</button>
                <button onClick={() =>setBgColor ("gold")}>Gold Background</button>
                <button onClick={() =>setBgColor ("silver")}>Silver Background</button>

            </div>
        </div>
    )
}

export default ButtonColorChanger
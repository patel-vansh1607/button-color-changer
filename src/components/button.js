import { useEffect, useState } from "react"
import "../styles/button.css"

const ButtonColorChanger = () => {
    const[bgColor, setBgColor] = useState(localStorage.getItem("bgcolor"))

    useEffect (() => {
        localStorage.setItem("bgcolor", bgColor)
    }, {bgColor})

    return(
        <div className="maindiv" style={{backgroundColor: bgColor, height: "100vh"}}>
            <h1>Background Color Changer</h1>
            <div className="secdiv">
                <button className="button" onClick={() =>setBgColor ("black")}>Black Background</button>
                <button className="button" onClick={() =>setBgColor ("white")}>White Background</button>
                <button className="button" onClick={() =>setBgColor ("red")}>Red Background</button>
                <button className="button" onClick={() =>setBgColor ("green")}>Green Background</button>
                <button className="button" onClick={() =>setBgColor ("blue")}>Blue Background</button>
                <button className="button" onClick={() =>setBgColor ("yellow")}>Yellow Background</button>
                <button className="button" onClick={() =>setBgColor ("cyan")}>Cyan Background</button>
                <button className="button" onClick={() =>setBgColor ("magenta")}>Magenta Background</button>
                <button className="button" onClick={() =>setBgColor ("gray")}>Gray Background</button>
                <button className="button" onClick={() =>setBgColor ("darkgray")}>Dark Gray Background</button>
                <button className="button" onClick={() =>setBgColor ("lightgray")}>Light Gray Background</button>
                <button className="button" onClick={() =>setBgColor ("brown")}>Brown Background</button>
                <button className="button" onClick={() =>setBgColor ("orange")}>Orange Background</button>
                <button className="button" onClick={() =>setBgColor ("purple")}>Purple Background</button>
                <button className="button" onClick={() =>setBgColor ("pink")}>Pink Background</button>
                <button className="button" onClick={() =>setBgColor ("lime")}>Lime Background</button>
                <button className="button" onClick={() =>setBgColor ("navy")}>Navy Background</button>
                <button className="button" onClick={() =>setBgColor ("teal")}>Teal Background</button>
                <button className="button" onClick={() =>setBgColor ("gold")}>Gold Background</button>
                <button className="button" onClick={() =>setBgColor ("silver")}>Silver Background</button>

            </div>
        </div>
    )
}

export default ButtonColorChanger
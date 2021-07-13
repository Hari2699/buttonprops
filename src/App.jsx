import React from 'react'
import Button from './Button'
import "./style.css"

const App = ({buttonText, buttonColor}) => {
    return (
        <React.Fragment>
            <div className="Container">
            <div className="Header">
                <h1>Day 1</h1>
                <h3>Assignment - Passing properties on Buttons</h3>
            </div>
            
            <div className="btn">
                <Button buttonText="Green" buttonColor="#bbff00"/>
                <Button buttonText="Yellow" buttonColor="#ffe600" />
                <Button buttonText="Orange" buttonColor="#ff7300"/>
            </div>
            
            </div>
            
        </React.Fragment>
    )
}

export default App

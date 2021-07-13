import React from 'react'
import "./style.css"

const Button = ({buttonText, buttonColor}) => {
    return (
        <div>
            <button style={{"background-color": buttonColor}}>{buttonText}</button>
        </div>
    )
}

export default Button

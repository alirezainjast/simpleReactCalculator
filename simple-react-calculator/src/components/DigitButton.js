import React from 'react'

const DigitButton = ({ digit }) =>{
    return (
        <div className="digitButton">
            <button>{digit}</button>
        </div>
    )
}

export default DigitButton;
import React from 'react'

const DigitButton = ({ digit, digitClickHandler }) =>{
    return (
        <div className="digitButton">
            <button onClick={() => {digitClickHandler({digit})}}>{digit}</button>
        </div>
    )
}

export default DigitButton
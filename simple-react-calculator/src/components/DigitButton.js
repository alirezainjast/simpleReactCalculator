import React from 'react'

const DigitButton = ({ digit, clickHandler }) =>{
    return (
        <div className="digitButton">
            <button onClick={() => {clickHandler({digit})}}>{digit}</button>
        </div>
    )
}

export default DigitButton
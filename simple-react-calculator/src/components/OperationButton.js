import React from 'react'

const OperationButton = ({ operation, clickHandler }) =>{
    return (
        <div className="operationButton">
            <button onClick={() => {clickHandler({operation})}}>{operation}</button>
        </div>
    )
}

export default OperationButton
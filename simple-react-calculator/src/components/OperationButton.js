import React from 'react'

const OperationButton = ({ operation, operatoinClickHandler }) =>{
    return (
        <div className="operationButton">
            <button onClick={() => {operatoinClickHandler({operation})}}>{operation}</button>
        </div>
    )
}

export default OperationButton
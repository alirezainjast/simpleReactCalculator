import React from 'react'

const OperationButton = ({ operation }) =>{
    return (
        <div className="operationButton">
            <button>{operation}</button>
        </div>
    )
}

export default OperationButton
import React from 'react'
import { connect } from 'react-redux'

function Display( {display} ) {
    return (
        <div className="dislpay">
            {/* use input as display */}
            <input type="text" value={display} disabled={true}/>
        </div>
    )
}

// subscribe to store to read data
const mapStateToProps = (state) =>{
    return{
        display: state.display,
    }
}

export default connect(mapStateToProps)(Display)
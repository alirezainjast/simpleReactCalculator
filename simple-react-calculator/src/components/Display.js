import React from 'react'
import { connect } from 'react-redux'

function Display( {display} ) {
    return (
        <div className="dislpay">
            <input type="text" value={display} disabled={true}/>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        display: state.display,
    }
}

export default connect(mapStateToProps)(Display)
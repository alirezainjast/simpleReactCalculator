import React, { Component } from 'react'
import Display from './Display'
import Pad from './Pad'

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">                
            <Display />
            <Pad />
            </div>
        )
    }
}

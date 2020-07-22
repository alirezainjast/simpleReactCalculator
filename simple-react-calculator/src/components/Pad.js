import React, { Component } from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

class Pad extends Component {
    clickHandler = (e) =>{
        console.log(e)
    }
    render(){
    return (
        <div className="pad">
            <OperationButton clickHandler={this.clickHandler} operation={"C"}/>
            <OperationButton clickHandler={this.clickHandler} operation={"CE"}/>
            <OperationButton clickHandler={this.clickHandler} operation={"%"}/>
            <OperationButton clickHandler={this.clickHandler} operation={"/"}/>
            <DigitButton clickHandler={this.clickHandler} digit={"7"} />
            <DigitButton clickHandler={this.clickHandler} digit={"8"} />
            <DigitButton clickHandler={this.clickHandler} digit={"9"} />
            <OperationButton clickHandler={this.clickHandler} operation={"X"}/>
            <DigitButton clickHandler={this.clickHandler} digit={"4"} />
            <DigitButton clickHandler={this.clickHandler} digit={"5"} />
            <DigitButton clickHandler={this.clickHandler} digit={"6"} />
            <OperationButton clickHandler={this.clickHandler} operation={"-"}/>
            <DigitButton clickHandler={this.clickHandler} digit={"1"} />
            <DigitButton clickHandler={this.clickHandler} digit={"2"} />
            <DigitButton clickHandler={this.clickHandler} digit={"3"} />
            <OperationButton clickHandler={this.clickHandler} operation={"+"}/>
            <DigitButton clickHandler={this.clickHandler} digit={"0"} />
            <DigitButton clickHandler={this.clickHandler} digit={"00"} />
            <DigitButton clickHandler={this.clickHandler} digit={"."} />
            <OperationButton clickHandler={this.clickHandler} operation={"="}/>
        </div>
    )
}
}

export default Pad
import React, { Component } from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import { connect } from 'react-redux'

class Pad extends Component {
    digitClickHandler = (e) =>{
        const digit = e.digit
        this.props.addToDisplay(digit)
    }
    operatoinClickHandler = (e) =>{
        let operaton = e.operation;
        if(operaton === "C") this.props.clear()
    }
    
    render(){
    return (
        <div className="pad">
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"C"}/>
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"CE"}/>
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"%"}/>
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"/"}/>
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"7"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"8"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"9"} />
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"X"}/>
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"4"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"5"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"6"} />
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"-"}/>
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"1"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"2"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"3"} />
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"+"}/>
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"0"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"00"} />
            <DigitButton digitClickHandler={this.digitClickHandler} digit={"."} />
            <OperationButton operatoinClickHandler={this.operatoinClickHandler} operation={"="}/>
        </div>
    )
}
}

const mapStateToProps = (state) =>{
    return{
        display: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToDisplay: (payload) => { dispatch({ type: 'ADD_TO_DISPLAY', payload: payload}) },
      clear: (payload) => { dispatch({type: "CLEAR"})}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Pad)
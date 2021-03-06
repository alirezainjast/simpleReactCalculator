import React, { Component } from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import { connect } from 'react-redux'

class Pad extends Component {

    // handle click events
    digitClickHandler = (e) =>{
        const digit = e.digit
        this.props.addToDisplay(digit)
    }
    operatoinClickHandler = (e) =>{
        let operaton = e.operation;
        if(operaton === "C") this.props.clear()
        if(operaton === "CE") this.props.clear2()
        if(operaton === "%") this.props.darsad()
        if(operaton === "=") this.props.result()
        if(operaton === "+") this.props.sum(operaton)
        if(operaton === "-") this.props.minus(operaton)
        if(operaton === "X") this.props.multiply(operaton)
        if(operaton === "/") this.props.divide(operaton)
    }

    // handle keybord events
    keyHandler = (e) =>{
        if((e.key >= 0 && e.key <= 9) || e.key === '.' ) this.props.addToDisplay(e.key)
        else{
            let operaton = e.key;
            if(operaton === "Backspace") this.props.clear2()
            if(operaton === "%") this.props.darsad()
            if(operaton === "+") this.props.sum(operaton)
            if(operaton === "-") this.props.minus(operaton)
            if(operaton === "*") this.props.multiply(operaton)
            if(operaton === "/") this.props.divide(operaton)
        }
    }

    keyHandler2 = (e) =>{
        let operaton = e.key;
        if(operaton === "Escape") this.props.clear()
        if(operaton === "Enter") this.props.result()
    }
    componentDidMount(){
        document.addEventListener('keydown', this.keyHandler);
        document.addEventListener('keypress', this.keyHandler2);
    }
    
    
    render(){
    return (
        // this is our pad
        // made with 2 type of button(digit and operation)
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

// subscripe to store
const mapStateToProps = (state) =>{
    return{
        state: state
    }
}

// actions
const mapDispatchToProps = (dispatch) => {
    return {
      addToDisplay: (payload) => { dispatch({ type: 'ADD_TO_DISPLAY', payload: payload}) },
      darsad: (payload) => { dispatch({ type: 'DARSAD', payload: payload}) },
      clear: () => { dispatch({type: "CLEAR"})},
      clear2: () => { dispatch({type: "CLEAR2"})},
      sum: (payload) => { dispatch({type: "SUM", payload: payload})},
      result: () => { dispatch({type: "RESULT"})},
      minus: (payload) => { dispatch({type: "MINUS", payload: payload})},
      multiply: (payload) => { dispatch({type: "MULTIPLY",  payload: payload})},
      divide: (payload) => { dispatch({type: "DIVIDE",  payload: payload})}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Pad)
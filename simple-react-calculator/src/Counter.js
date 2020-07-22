const initState = {
    display: 0,
    tmpNum: 0,
    operation: ''
}

const Counter = (state = initState, { type, payload }) => {
    let tmpState = state;

    switch (type) {

    case 'ADD_TO_DISPLAY':
        payload = parseInt(state.display+payload)
        return { ...state, display: payload }
    case 'DARSAD':
        return { ...state, display: tmpState.display/100}
    case 'CLEAR':
        return { display: 0, tmpNum: 0 }
    case 'CLEAR2':
        return { ...state, display: 0 }

    case 'SUM':
    case "MINUS":
    case "MULTIPLY":
    case "DIVIDE":
        return { ...state, tmpNum: tmpState.display, display: 0, operation: payload }

    case "RESULT":
        switch(state.operation){
            case '+':
                return { display: tmpState.tmpNum + tmpState.display, tmpNum: 0 }
            case '-':
                return { display: tmpState.tmpNum - tmpState.display, tmpNum: 0 }
            case 'X':
                return { display: tmpState.tmpNum * tmpState.display, tmpNum: 0 }
            case '/':
                return { display: tmpState.tmpNum / tmpState.display, tmpNum: 0 }
            default:
                return state
        }
    default:
        return state
    }
}

export default Counter
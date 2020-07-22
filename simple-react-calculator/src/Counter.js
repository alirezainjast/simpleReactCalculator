const initState = {
    display: 0
}

const Counter = (state = initState, { type, payload }) => {
    console.log(payload)
    switch (type) {

    case 'ADD_TO_DISPLAY':        
        payload = parseInt(state.display+payload)
        return { ...state, display: payload }
    case 'CLEAR':
        return { display: 0}
    default:
        return state
    }
}

export default Counter
const initialState = {
    tests : {}
}
const testReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'LOAD' :
            if(!state.tests.data) state.tests.data = action.data
            return state

        default :
            return state
    }
}

export default testReducer
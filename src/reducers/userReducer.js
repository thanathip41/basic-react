const initialState = {
    data: null,
    authUser: {
        id:1,
        username:'thanathip'
    }
}
const useReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'LOAD' :
            state.data = action.data
            return state

        case 'ADD' : 
            if(state.data?.length)  state.data.push(action.data)
            else state.data = action.data
            return state    
        case 'UPDATE' : 
            try {
                const updateState = state.data.filter(data => {
                    if(data.id === action.data.id) {
                        data.username = action.data.username
                        data.name = action.data.name
                        data.email = action.data.email
                    }
                    return data
                 })
                 state.data = updateState
                 return state
            } catch (err){
                return state
            }

        case 'DELETE' :
           try {              
               const newState = state.data.filter(data => {
                    return  data.id !== action.data.id
                })
                state.data = newState
                return state  

            } catch (err) {
                return state  
           }       
        default :
            return state
    }
}

export default useReducer
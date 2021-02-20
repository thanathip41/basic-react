import { combineReducers } from 'redux'
import userReducer from './userReducer'
import testReducer from './testReducer'

const root = combineReducers({
   
   tests :  testReducer ,
   users :  userReducer 
})

export default root

// const initialState = {
//     users: {},
//     authUser: {
//         id:1,
//         username:'thanathip'
//     }
// }
// const useReducer = (state = initialState , action) => {
//     switch(action.type) {
//         case 'LOAD' :
//             if(!state.users.data) state.users.data = action.data
//             return state

//         case 'ADD' :
//             if(state.users.data)  state.users.data.push(action.data)
//             else state.users.data = action.data

//             return state

//         case 'UPDATE' : 
//             try {
//                 const updateState = state.users.data.filter(data => {
//                     if(data.id === action.data.id) {
//                         data.username = action.data.username
//                         data.name = action.data.name
//                         data.email = action.data.email
//                     }
//                     return data
//                  })
//                  state.users.data = updateState
//                  return state
//             } catch (err){
//                 return state
//             }

//         case 'DELETE' :
//            try {
//                 const newState = state.users.data.filter(data => {
//                     return  data.id !== action.data.id
//                 })
//                 state.users.data = newState
//                 return state  

//             } catch (err) {
//                 return state  
//            }       
//         default :
//             return state
//     }
// }

// export default useReducer

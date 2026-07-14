import { connect } from 'react-redux'
import { createStore } from 'redux'

// 1)Store 
// 2)Actions Reducers 
// 3)Dispatches 

//CreateStore will be in redux 

let initialState={
    sum:1000
}
function reducer(state=initialState,Actions){
        switch(Actions.type){
            case "a":
                return {...state,
                    sum:state.sum+1
                 }
                break;
                case "B":
                    return {...state,
                    sum:state.sum-1 
                 }
                    break;
                    default:
                        return state
        }
}
export let a=createStore(reducer) 
// console.log(a) 

//useDispatch  --  
// useSelector --

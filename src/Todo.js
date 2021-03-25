import React, {useContext ,useReducer, useRef } from 'react';
import {UserContext} from './index';


const initialState = {
    count:0
}

function reducer(state, action) {
    switch(action.type){
        case "increment":
            return{
                count:state.count+1
            }
            case "decrement":
            return{
                count:state.count-1
            }
            case "reset":
            return initialState
        default:
            return initialState
    }
}

export default function Todo(){

    const [state, dispatch ] = useReducer(reducer,initialState);

    /** the best way for using context */
   const value = useContext(UserContext);

    return(
        /** [old-way] */
        // <div>
            // <UserContext.Consumer>
            //     {value => <div>Hello , {value}</div>}
            // </UserContext.Consumer>
        // </div>

        /** [new way]  */
        // <div>Hello !!! {value}</div>

        <div>
        count:{state.count}
        <button className="border p-1" onClick={() => dispatch({type:"increment"})}>Incremetn</button>
        <button className="border p-1" onClick={() => dispatch({type:"decrement"})}>Decremetn</button>
        <button className="border p-1" onClick={() => dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}
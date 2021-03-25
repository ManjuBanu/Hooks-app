import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import AppClass from './AppClass';
import AppFunc from './AppFunc';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Register from './Register';
import FetchData from './FetchData';
import Todo from './Todo';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';


export const UserContext = React.createContext();

const userName = "Manju";

const App = () =>{
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return(
    <TodosContext.Provider value={{state,dispatch}}>
    <TodoList/>
    </TodosContext.Provider>
  )
}

ReactDOM.render(
  /** for abouve //ed example */
  // <UserContext.Provider value={userName}>
<React.Fragment>
    <AppClass />
    <AppFunc/>
    <Register/>
    <Login/>
    <FetchData/>
    <Todo/>
    <App/>
    </React.Fragment>,
  document.getElementById('root')
);

/** the changes will appeare immediately */
if(module.hot){
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import StudentContext from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/StudentContext';
// import Home from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/Home';
// import Profile from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/Profile';
// import Dashboard from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/Dashboard';
// import Header from './day30Task-13-07-2026/CreateThemeContext/Header';
// import { ThemeProvider } from './day30Task-13-07-2026/CreateThemeContext/ThemeContext';
// import { AuthProvider } from './day30Task-13-07-2026/UserAuthentication/AuthContext';
// import Navbar from './day30Task-13-07-2026/UserAuthentication/Navbar';
//import { store } from './day31Task-14-07-2026/CreateReduxStoreandReducers/Store'
//import { Provider } from 'react-redux';

//import A from "./day32Task-15-07-2026/useReducre/A";
import { useReducer } from "react";
//import A, { initialState, reducer } from "./day32Task-15-07-2026/useReducre/Createreducerfunctionswithdifferentactiontypes/CounterReducer/Reducer";

import { useSelector, useDispatch } from "react-redux";
import AuthProvider from "./day33Task-16-07-2026/ex1/AuthContext";
//import Navbar from "./day33Task-16-07-2026/contextapi/Navbar";
import Login from "./day33Task-16-07-2026/reducer/Login";
import Logout from "./day33Task-16-07-2026/ex1/Logout";
import Navbar from "./day33Task-16-07-2026/ex1/Navbar";
// import Counter from "./day32Task-15-07-2026/Example/Counter";
// import ShoppingCart from "./day32Task-15-07-2026/Example/Shoppingcart";
// import Form from "./day32Task-15-07-2026/Example/Formhandling";
// import { CounterProvider } from "./day33Task-16-07-2026/useReducerExample/ContextApiExample/CouterContext";
// import Student from "./day33Task-16-07-2026/Example/StudentRegistrationFormuseReducer";
// import { UserProvider } from "./day33Task-16-07-2026/Example/ContextApi/UserContext";
// import Header from "./day33Task-16-07-2026/Example/ContextApi/Header";
// import Profile from "./day33Task-16-07-2026/Example/ContextApi/Profile";
// //import Login from "./day33Task-16-07-2026/reducer/Login";
// //import Navbar from "./day33Task-16-07-2026/contextapi/Navbar";
// import AuthProvider from "./day33Task-16-07-2026/ex1/AuthContext";
// import Logout from "./day33Task-16-07-2026/ex1/Logout";
// import Navbar from "./day33Task-16-07-2026/contextapi/Navbar";
// import Login from "./day33Task-16-07-2026/reducer/Login";
// //import { increment } from "./day31Task-14-07-2026/CreateReduxStoreandReducers/CounterSlice";
// //import { changeTheme } from './day31Task-14-07-2026/UnderstandActionsandDispatchmethods/ThemeSlice';
// //import { decrement, increment, reset } from "./day31Task-14-07-2026/Example/CounterSlice1";

function App() {

  //const [state, dispatch] = useReducer(reducer, initialState);

  //  const dispatch = useDispatch();
  //  const count = useSelector((state) => state.count);

  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();


  // const currentTheme = useSelector((state) => state.theme.theme);
  // const dispatch = useDispatch();

  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  // const student = "Sulochana";

  // const user = "Sulochana";

  // const [name, setName] = useState("Sulochana");

  return (

    
    // <StudentContext.Provider value={student}>
    //   <Home />
    //   <Profile />
    //   <Dashboard />
    // </StudentContext.Provider>

    // <UserContext.Provider value={user}>
    //   <Dashboard />
    //   <Profile />
    // </UserContext.Provider>

    // <ThemeProvider>
    //   <Header />
    // </ThemeProvider>

    // <AuthProvider>
    //   <Navbar />
    // </AuthProvider>

    // <StudentContext.Provider value={student}>
    //   <Home />
    //   <Profile />
    //   <Dashboard />
    // </StudentContext.Provider>
    // <provider store={store}>

    // </provider>
    // <div>
    //   <h2>Count: {count}</h2>
    //   <button onClick={() => dispatch(increment())}>
    //     Increment
    //   </button>
    // </div>

    // <div>
    //   <h2>Current Theme: {currentTheme}</h2>
    //   <button onClick={() => dispatch(changeTheme())}>
    //     Change Theme
    //   </button>
    // </div>

    // <div 
    // style={{ textAlign: "center" }}>
    //   <h1>Redux Counter</h1>
    //   <h2>{count}</h2>
    //   <button onClick={() => dispatch(increment())}>
    //     Increment
    //   </button>
    //   <button onClick={() => dispatch(decrement())}>
    //     Decrement
    //   </button>
    //   <button onClick={() => dispatch(reset())}>
    //     Reset
    //   </button>
    //<provider store={store}>
      // <>
      // <A/>
      // </>
    //</provider>
    
    //</div >


    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   <h1>useReducer Example</h1>

    //   <h2>Count : {state.count}</h2>

    //   <button onClick={() => dispatch({ type: "INCREMENT" })}>
    //     Increment
    //   </button>

    //   <button
    //     onClick={() => dispatch({ type: "DECREMENT" })}
    //     style={{ marginLeft: "10px" }}
    //   >
    //     Decrement
    //   </button>

    //   <button
    //     onClick={() => dispatch({ type: "RESET" })}
    //     style={{ marginLeft: "10px" }}
    //   >
    //     Reset
    //   </button>

    //   <br />
    //   <br />

    //   <button
    //     onClick={() =>
    //       dispatch({
    //         type: "INCREMENT_BY_VALUE",
    //         payload: 5,
    //       })
    //     }
    //   >
    //     +5
    //   </button>

    //   <button
    //     onClick={() =>
    //       dispatch({
    //         type: "DECREMENT_BY_VALUE",
    //         payload: 3,
    //       })
    //     }
    //     style={{ marginLeft: "10px" }}
    //   >
    //     -3
    //   </button>
    // </div>

    // <div>
    //   <Counter />
    //   <hr />
    //   <Form />
    //   <hr />
    //   <ShoppingCart />
    // </div>

    //  <div>
    //   <Counter />
    // </div>

    // <CounterProvider>
    //   <Counter />
    // </CounterProvider>
    

    //  <div>
    //   {/* <Counter /> */}
    //   <Student/>
    // </div>


    // <UserProvider>
    //   <Header />
    //   <Profile />
    // </UserProvider>

    // <div>
    //   <Login />
    // </div>

    // <UserProvider>
    //   <Navbar />
    //   <Login />
    //   <Profile />
    // </UserProvider>

    //  <AuthProvider>
    //   <Navbar />
    //   <Login />
    //   <Logout />
    // </AuthProvider>
    // <UserProvider>
    //   <Navbar />
    // </UserProvider>

     <AuthProvider>
      <Navbar />
      <Login />
      <Logout />
    </AuthProvider>
  );
}

export default App;



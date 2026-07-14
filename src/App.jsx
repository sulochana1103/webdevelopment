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

import { useSelector, useDispatch } from "react-redux";
//import { increment } from "./day31Task-14-07-2026/CreateReduxStoreandReducers/CounterSlice";
//import { changeTheme } from './day31Task-14-07-2026/UnderstandActionsandDispatchmethods/ThemeSlice';
import { decrement, increment, reset } from "./day31Task-14-07-2026/Example/CounterSlice1";

function App() {
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();
   
  
  // const currentTheme = useSelector((state) => state.theme.theme);
  // const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

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

    <div style={{ textAlign: "center" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default App;
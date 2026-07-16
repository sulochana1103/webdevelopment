import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './day33Task-16-07-2026/ex1/AuthContext.jsx'

// import { Provider } from "react-redux";
// import { store } from "./day31Task-14-07-2026/Example/Store.js";
// import AuthProvider from './day33Task-16-07-2026/ex1/AuthContext.jsx';

//import { AuthContext } from "./AuthContext";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  //  <Provider store={store}>
  //   <App />
  // </Provider>

  <AuthProvider>
    <App />
  </AuthProvider>
)

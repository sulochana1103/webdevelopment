import StudentContext from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/StudentContext';
import Home from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/Home';
import Profile from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/Profile';
import Dashboard from './day30Task-13-07-2026/SharedatabetweenmultiplecomponentsusingContextApi/Dashboard';
import Header from './day30Task-13-07-2026/CreateThemeContext/Header';
import { ThemeProvider } from './day30Task-13-07-2026/CreateThemeContext/ThemeContext';
import { AuthProvider } from './day30Task-13-07-2026/UserAuthentication/AuthContext';
import Navbar from './day30Task-13-07-2026/UserAuthentication/Navbar';

function App() {
  const student = "Sulochana";

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

    <AuthProvider>
      <Navbar />
    </AuthProvider>

    // <StudentContext.Provider value={student}>
    //   <Home />
    //   <Profile />
    //   <Dashboard />
    // </StudentContext.Provider>
  );
}

export default App;
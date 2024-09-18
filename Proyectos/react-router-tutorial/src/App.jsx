import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from "./components/NavBar";
import { HomeScreen } from './components/routes/HomeScreen';
import { AboutScreen } from './components/routes/AboutScreen';
import { ContactScreen } from './components/routes/ContactScreen';
import { UserProvider } from './components/context/UserProvider';
import { LoginScreen } from "./components/routes/LoginScreen";

export const App = () => {
  return (
    <UserProvider>
        <NavBar></NavBar>

        <Routes>
            <Route path='/' element={ <HomeScreen></HomeScreen> }></Route>
            <Route path='/login' element={ <LoginScreen></LoginScreen> }></Route>
            <Route path='/about' element={ <AboutScreen></AboutScreen> }></Route>
            <Route path='/contact' element={ <ContactScreen></ContactScreen> }></Route>
            <Route path="/*" element={ <Navigate to='/'></Navigate>}></Route>
        </Routes>
    </UserProvider>
  )
}

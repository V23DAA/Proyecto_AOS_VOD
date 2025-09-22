import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Componentes
import LoginComponent from './pages/loginPage/login.jsx';
import RegisterComponent from './pages/registerPage/register.jsx';
import ForgotPasswordComponent from './pages/PasswordPage/forgotPassword.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
        <Route path='/register' element={<RegisterComponent></RegisterComponent>}></Route>
        <Route path='/forgotPassword' element={<ForgotPasswordComponent></ForgotPasswordComponent>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

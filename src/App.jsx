import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Componentes
import LoginComponent from './pages/loginPage/login.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

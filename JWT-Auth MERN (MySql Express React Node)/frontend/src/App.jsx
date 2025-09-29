import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={
        <>
            <Navbar/>
            <Dashboard/>
        </>
      }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

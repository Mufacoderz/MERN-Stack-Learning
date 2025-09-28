import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

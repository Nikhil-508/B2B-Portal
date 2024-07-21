import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/login'
import Home from './Components/home';
import Dashboard from './Components/dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

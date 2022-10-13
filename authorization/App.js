import './App.css';
import {BrowserRouter as Router,Route,Routes,Link, useNavigate} from 'react-router-dom'
import About from './Components/About';
import Login from './Components/Login';
import Protected from './Components/Protected'
import Home from './Components/Home';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        
        <Link to="/Login">Login</Link>

        <Link to="/Profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        <Route path="/About" element={<Protected Component={About}/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/>
      </Routes>
      
    </Router>
    
  );
  
}

export default App;

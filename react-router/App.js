import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import PageNotFound from "./Pages/PageNotFound";
import Profile from './Pages/Profile'


function App() {
  return (
    <Router >
      <nav  class="navbar navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">Home</Link>
        <Link class="navbar-brand" to="/AboutUs">AboutUs</Link>
        <Link class="navbar-brand" to="/ContactUs">ContactUs</Link>
        <Link class="navbar-brand" to="/Profile">Profile</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Profile/:username/:sirname" element={<Profile/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;

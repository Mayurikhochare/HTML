import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Notifications from './Pages/Notifications';
import Friends from './Pages/Friends';
import PageNotFound from "./Pages/PageNotFound";
import Profile from './Pages/Profile'
import Messages from "./Pages/Messages";


function App() {
  return (
    <Router >
     
      <nav  class="navbar navbar-dark bg-primary">
        <Link class="navbar-brand" to="/"><img width="50px" height="50px" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png"></img></Link>
        <Link class="navbar-brand" to="/Friends"><img width="50px" height="50px" src="https://w7.pngwing.com/pngs/56/956/png-transparent-friend-request-network-one-one-friend-request-1-facebook-ui-flat-icon.png"></img></Link>
        <Link class="navbar-brand" to="/Messages"><img width="50px" height="50px" src="https://appuals.com/wp-content/uploads/2019/04/unnamed.png"></img></Link>
         <Link class="navbar-brand" to="/Notifications"><img width="50px" height="50px" src="https://www.seekpng.com/png/detail/38-385803_rbse-10th-result-push-notification-icon-png.png"></img></Link>
        <Link class="navbar-brand" to="/Profile"><img width="50px" height="50px" src="https://thumbs.dreamstime.com/b/icon-profile-circle-not-shadow-color-dark-blue-icon-profile-circle-not-shadow-color-dark-blue-background-194699290.jpg"></img></Link>
        
      </nav>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Notifications" element={<Notifications/>}/>
        <Route path="/Friends" element={<Friends/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Messages" element={<Messages/>}/>
        <Route path="/Profile/:username/:sirname" element={<Profile/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

      <footer>
        <aside>
          <small>
          
           Created by  on 11/10/22.
           Copyright © 2022 . All rights reserved.
        

          </small>
        </aside>

      </footer>

    </Router>
    
  );
}

export default App;

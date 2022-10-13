
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./Settings/Notifications";
import SignIn from "./Authentication/Sign_in";
import SignUp from "./Authentication/Sign_up";
import Userhome from "./Users/Userhome";
import Home from './Main_Components/Home';
import ChangePassword from './Settings/ChangePassword';
import AllSettings from './Settings/AllSettings';
import EmailChange from "./Settings/EmailChange";
import UsernameChange from "./Settings/UsernameChange";
import UserPost from "./Users/UserPost";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/notification" element={<Notifications />} />
          <Route path="/V2/auth/sign_up" element={<SignUp />} />
          <Route path="/V2/auth/sign_in" element={<SignIn />} />
          <Route path="/user/home" element={<Userhome/>} />
		      <Route path="/V2/Notifications/change/password" element={<ChangePassword/>}/>	
	        <Route path="/" element={<Home />}/>
		      <Route path="/V2/settings/" element={<AllSettings />}/>
          <Route path="/V2/settings/change/email/" element={<EmailChange />} />
          <Route path="/V2/settings/change/username" element={<UsernameChange />} />
          <Route path="/V2/user/postshow/" element={<UserPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

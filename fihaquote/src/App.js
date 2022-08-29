// import './App.css';
import Navbar from "./Main_Components/Navbar";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./Settings/Notifications";
import SignIn from "./Authentication/Sign_in";
import SignUp from "./Authentication/Sign_up";
// import Home from './Main_Components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar>
          <Navbar />
        </NavigationBar>
        <Routes>
          <Route path="/notification" element={<Notifications />} />
          <Route path="/V2/auth/sign_up" element={<SignUp />} />
          <Route path="/V2/auth/sign_in" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const NavigationBar = styled.div`
  border-right: 1px solid rgb(230, 230, 230);
  width: 5%;
  height: 100%;
  position: absolute;
`;

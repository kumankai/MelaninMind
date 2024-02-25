
import './App.css';  
import './css/Login.css';
import './css/Home.css';
import './css/Signup.css';
import './css/Nav.css';
import ChatRoom from './views/cohereChat.js';
import Login from './views/Login.js';
import Home from './views/Home.js';
import Nav from './component/Nav.js';
import Signup from './views/Signup.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {


  return (
    <Router>
    <div className="App">
      <header className="App-header">
     
        <Nav/>
        <Routes>
          <Route path="/" element={<Login/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/chat" element={<ChatRoom />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          
        </Routes>

       
      </header>
    </div>
    </Router>
  );
}

export default App;


import './App.css';  
import ChatRoom from './views/cohereController.js';
import Login from './views/Login.js';
import Home from './views/Home.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
       

        

        <Routes>
          <Route path="/" element={<Login/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/chat" element={<ChatRoom />} ></Route>
          
        </Routes>

       
      </header>
    </div>
    </Router>
  );
}

export default App;

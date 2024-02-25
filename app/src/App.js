
import './App.css';  
import ChatRoom from './views/cohereChat.js';
import Login from './views/Login.js';
import Home from './views/Home.js';
import Signup from './views/Signup.js';
import Nav from './component/nav.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
 
  return (
    <Router>

          <div className="App">
            <header className="App-header">
             
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<> <Nav/><Home/> </>} />
                <Route path="/chat" element={<ChatRoom />} />
                <Route path="/signup" element={<Signup/>} />
              </Routes>
            </header>
          </div>
          </Router>
      
  );
}

export default App;

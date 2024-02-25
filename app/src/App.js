
import './App.css';  
import './css/Login.css';
import './css/Home.css';
import './css/Signup.css';
import './css/Nav.css';
import ChatRoom from './views/cohereChat.js';
import Login from './views/Login.js';
import Home from './views/Home.js';
import Signup from './views/Signup.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const excludedPaths = ["/", "/signup"]; // paths where you don't want to show the Nav

  return (
    <Router>
      {/* Anonymous function to use the useLocation hook */}
      {() => {
        const location = useLocation();

        return (
          <div className="App">
            <header className="App-header">
              {/* Conditionally render the Nav component */}
              {excludedPaths.includes(location.pathname) ? null : <Nav />}
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat" element={<ChatRoom />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </header>
          </div>
        );
      }}
    </Router>
  );
}

export default App;

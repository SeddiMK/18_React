import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Router>
        <nav>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Usersssssssss</Link>
          </li>
        </nav>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

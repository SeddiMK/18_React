import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import UserId from './UserId';
import Error from './Error';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <nav>
          <li>
            <NavLink exact to="/" activeClassName="primer">
              Mainnnnnnnnnnnnnnn
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">Aboutttttttttttt</NavLink>
          </li>
          <li>
            <NavLink to="/users">Usersssssssss</NavLink>
          </li>
        </nav>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route path="/users/:userName" element={<UserId />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

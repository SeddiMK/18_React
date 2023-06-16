import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route pach="/" component={Main}></Route>
          <Route pach="/about" component={About}></Route>
          <Route pach="/users" component={Users}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

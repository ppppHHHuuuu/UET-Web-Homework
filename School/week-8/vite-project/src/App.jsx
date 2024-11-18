import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from './About';
import Home from './Home';
import UseMemo from './UseMemo';
import Counter from './toolkit/counter';
import CounterDifferPage from './toolkit/counterDifferPage';
export default function App() {
  return (
    <Router>
      <div>
        <nav>
              <Link to="/home">Home (For Demo Use State and Use Effect)</Link>
              <hr style={{margin: '10px 10px'}}/>
              <Link to="/about">About (Click here for React Router demo)</Link>
              <hr style={{margin: '10px 10px'}}/>
              <Link to="/usememo">UseMemo (Click here for UseMemo demo)</Link>
              <hr style={{margin: '10px 10px'}}/>

              <Link to="/reduxtoolkit">Redux Toolkit Counter </Link>
              <hr style={{margin: '10px 10px'}}/>
              <Link to="/differpage">Redux Toolkit Counter New Page </Link>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/usememo">
            <UseMemo />
          </Route>
          <Route path="/reduxtoolkit">
            <Counter />
          </Route>
          <Route path="/reduxtoolkit">
            <Counter />
          </Route>

          <Route path="/differpage">
            <CounterDifferPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

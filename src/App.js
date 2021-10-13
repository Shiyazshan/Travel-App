import './App.css';
import Home from './components/screens/Home';
import About from "./components/screens/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./components/screens/includes/Nav.js";

function App() {
  return (
    <Router>
      <>
      <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about/:id">
            <About />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import LikeComponent from './components/LikeComponent';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={LikeComponent} />
      </Switch>
    </Router>
  );
}

export default App;

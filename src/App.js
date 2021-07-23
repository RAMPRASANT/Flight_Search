
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchFlight from './Search/search'
import Results from './Results/results'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SearchFlight} />
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

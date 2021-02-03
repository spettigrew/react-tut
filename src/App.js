import Navbar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// React component that returns function = App
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* dynamic value =  */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

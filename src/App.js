import Navbar from './NavBar';
import Home from './Home'

// React component that returns function = App
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* dynamic value =  */}
        <Home />
      </div>
    </div>
  );
}

export default App;

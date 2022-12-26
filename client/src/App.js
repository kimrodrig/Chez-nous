import Signup from './Signup';
import Success from './Success';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className="logo">
        𓂀
        </div>
        <span className="title">
        chez nous
        </span>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}>
          </Route>
          <Route path="/success" element={<Success/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

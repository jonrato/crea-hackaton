import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

import Login from "./components/Login";
import Navbar from './components/Navbar';
import Home from './components/Home';


import { Routes, Route } from "react-router";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  )
}

export default App

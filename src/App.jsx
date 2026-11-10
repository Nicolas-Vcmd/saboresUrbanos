import Login from "./components/Login";
import Navbar from './components/Navbar';
import Home from './components/Home';
import DetalleMesa from './components/DetalleMesa';
import AbrirPedido from "./components/AbrirPedido";



import { Routes, Route } from "react-router";
import ListaMesas from "./components/ListaMesas";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mesas" element={<ListaMesas />} />
          <Route path="/mesas/:id" element={<DetalleMesa />} />
          <Route path="/mesas/:id/pedido" element={<AbrirPedido />} />

          {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </div>

  )
}

export default App

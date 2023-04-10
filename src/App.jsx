import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import Menu from "./Pages/Menu"
import Pedidos from "./Pages/Pedidos"
import Productos from "./Pages/Productos"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="Menu" element={<Menu/>} />
      <Route path="Pedidos" element={<Pedidos/>} />
      <Route path="Productos" element={<Productos/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

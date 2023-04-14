import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    //FUNCION DEL MENU RESPONSIVO
    const [isOpen, setIsOpen] = useState(false);

  return (
        <div className="Navbar px-5 md:fixed md:w-full">
      <img src='/LogoZuco.png' width={130} className='mt-8 z-40' />
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/" className=' font-semibold font-Texto'>Inicio</Link>
        <Link to="/Menu" className='font-semibold font-Texto'>Menú</Link>
        <Link to="/Productos" className='font-semibold font-Texto'>Productos</Link>
        <Link to="/Pedidos" className='font-semibold font-Texto pr-5'>Pedidos</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Navbar

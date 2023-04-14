import React from 'react'
import Navbar from '../Components/Inicio/Navbar'
import Formulario from '../Components/Pedidos/Formulario'
import {IoLogoWhatsapp} from "react-icons/io"

const Pedidos = () => {
  return (
    <div>
      <Navbar/>
      <Formulario/>
     <IoLogoWhatsapp className=' text-5xl text-green-900 absolute right-3 bottom-11 hover:text-white hover:scale-110' />
    </div>
  )
}

export default Pedidos

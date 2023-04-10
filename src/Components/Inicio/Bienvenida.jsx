import React from "react";
import Fondo from "../../assets/Fondo.png";
//Importacion de iconos
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Bienvenida = () => {
  return (
    <div className="">
      <div className="h-16">
        <img src={Fondo} alt="bienvenida" />
      </div>

      {/*Aca se llaman los iconos*/}
      <div className="flex flex-row text-3xl text-green-900 gap-9 justify-start pl-20 ml-20 mt-80">
        <a href="#" ><FaWhatsapp /></a>
        <a href="#" ><FaFacebook /></a>
        <a href="#" ><FaInstagram/></a>
      </div>
    </div>
  )
}

export default Bienvenida

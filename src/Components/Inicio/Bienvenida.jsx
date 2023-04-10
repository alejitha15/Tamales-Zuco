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
      <div className="flex flex-row text-3xl text-green-900 gap-3 mt-16 ml-3 justify-start md:pl-16 md:ml-20 md:mt-80 md:gap-9">
        <a href="#" ><FaWhatsapp /></a>
        <a href="#" ><FaFacebook /></a>
        <a href="#" ><FaInstagram/></a>
      </div>
    </div>
  )
}

export default Bienvenida

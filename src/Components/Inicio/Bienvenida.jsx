import React from "react";
//Importacion de imagenes
import Fondo from "../../assets/Fondo.png";
import Domicilio from "../../assets/DomiciliosZuco.png";
//Importacion de iconos
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { BiDownArrowAlt } from "react-icons/bi"
//Link de react-router-dom
import { Link } from "react-router-dom";

const Bienvenida = () => {
  return (
    <div className="">
      <div className="h-16">
        <img src={Fondo} alt="bienvenida" />
      </div>

      {/*Aca se llaman los iconos*/}
      <div className="flex flex-row text-3xl text-green-800 gap-3 mt-16 ml-3 justify-start md:pl-16 md:ml-20 md:mt-80 md:gap-9">
        <a href="#" className="p-3 bg-white rounded-full hover:scale-110 border-2 border-green-800"><FaWhatsapp /></a>
        <a href="#" className="p-3 bg-white rounded-full hover:scale-110 border-2 border-green-800" ><FaFacebook /></a>
        <a href="#" className="p-3 bg-white rounded-full hover:scale-110 border-2 border-green-800"><FaInstagram/></a>
      </div>
      <br/>
      <div className="flex justify-center items-center flex-col text-center lg:mt-40">
        <h3 className=" font-Titulo text-2xl lg:text-5xl pt-7  md:text-4xl text-green-900 font-semibold">Bienvenidos a Tamales Zuco</h3>
        <p className=" font-Texto text-xl font-bold">Conoce nuestro sitio web</p>
        <p className="font-Texto text-lg font-bold">conoce nuestro servicio y productos </p>
        <br/>
        <BiDownArrowAlt  className="text-3xl text-green-900 lg:text-4xl animate-bounce"/>
      </div>
      <div className="flex flex-col-reverse md:justify-center md:flex-row md:gap-7 justify-center items-center">
        <div>
          <FaMapMarkerAlt className=" text-transparent text-center text-5xl md:text-red-500 animate-bounce"/>
        </div>
        <div>
          <h3 className=" font-Titulo text-center text-3xl">Ven y visitanos</h3>
          <hr className=" border-2 border-Amarillo mt-2"/>
          <p className=" font-Texto text-2xl">Carrera 3a sur #6-84</p>
          <p className=" font-Texto text-xl text-center">Juan XXIII</p>
          <p className=" font-Texto text-xl">Facatativa - Cundinamarca</p>
          <br/>
          <h4 className=" font-Titulo text-verde hover:border-b-2 hover:border-verde  items-center">Tenemos servicio de Domicilios</h4>
          <br/>
          <button className="text-center font-Titulo p-2 px-3 bg-Amarillo border-1 border-Azul rounded-xl">
            <Link to="/Productos">Ver Productos </Link></button>
        </div>
        <img src={Domicilio} alt="Domicilios" />
      </div>
    </div>
  )
}

export default Bienvenida

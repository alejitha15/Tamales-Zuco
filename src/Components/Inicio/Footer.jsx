import React from "react";
import ItemsContainer from "./ItemsContainer";
import Logo from "../../../public/LogoZuco.png"

const Footer = () => {
  return (
    <div className="bg-green-700 font-Texto">
      <section className="border-b-2 border-green-900">
        <footer className="text-2xl">
          <div className="border-b-2 border-green-400">
            <p className=" font-Titulo text-center text-white p-1">
              {" "}
              ¡Conocenos mas!...
            </p>
          </div>

          <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <h1
              className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
              <samp className="text-green-100"></samp>Acerca De Nosotros{" "}
            </h1>
            <section className=" grid grid-cols-1 md:grid-cols-3 justify-center gap-9 font-Texto">
              <div>
                <p className=" font-Titulo">Saludanos en:</p>
                <p className=" font-Texto text-lg">Carrera 3a sur #6-84</p>
                <p className=" font-Texto text-lg">Juan XXIII</p>
                <p className=" font-Texto text-lg">Facatativa - Cundinamarca</p>
              </div>
              <div>
                <ul>
                  <li className=" font-Titulo text-center">Horarios</li>
                  <ul className="text-lg font-Texto text-center">Viernes.......4:00 PM-9:00 PM</ul>
                  <ul className="text-lg font-Texto text-center">Sabados.......6:00 AM-9:00 PM</ul>
                  <ul className="text-lg font-Texto text-center">Domingos......6:00 AM-9:00 AM</ul>
                </ul>
              </div>
              <div>
                <p className=" font-Titulo">Contactanos</p>
                <p className=" font-Texto text-lg">+57 314 797 52 36</p>
                <p className=" font-Texto text-lg">+57 321 307 92 54</p>
              </div>
            </section>
          </div>
          <ItemsContainer />
        </footer>
      </section>
    </div>
  );
};

export default Footer;

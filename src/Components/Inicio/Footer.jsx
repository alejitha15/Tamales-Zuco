import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <div className="bg-verde font-Texto">
      <section>
        <footer className="text-2xl">
          <p>Hola hermosa</p>

          <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <h1
              className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold
       md:w-2/5"
            >
              <samp className="text-teal-400"></samp>Acerca De Nosotros{" "}
            </h1>
            <div>
              <input
                type="text"
                placeholder="Enter your "
                className="text-gray-800
          sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0  mb-4 py-2.5 rounded px-2 focus:outline-none"
              />
              <button
                className="bg-teal-400 hover:bg-teal-500 duration -300 px-5 py-2.5 font-[poppis
              rounded- md text-white md:w-auto w-full"
              >
                Consultar
              </button>
              <div>
                <ul>
                  <li>Saludanos</li>
                  <ul>calle 7# 3-119 sur</ul>
                  <li>Horarios</li>
                  <ul>Viernes.......4:00 PM-9:00 PM</ul>
                  <ul>Sabados.......7:00 AM-9:00 PM</ul>
                  <ul>Domingos......7:00 AM-11:00 AM</ul>

                  <li>Contactanos</li>
                  <ul>573132297049</ul>
                </ul>
              </div>
            </div>
          </div>
          <ItemsContainer />
        </footer>
      </section>
    </div>
  );
};

export default Footer;

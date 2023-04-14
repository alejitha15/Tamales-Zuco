import React from "react";
import Fondo2 from "../../assets/Fondo2.jpg"
// import {useForm} from "react-hook-form"

// const {register, handleSubmit}= useForm();
// const onSubmit = (data) => {
//     console.log(data);
//   }

const Formulario = () => {
  return (
    <div>
      <div className="h-16"> 
      <img src={Fondo2} alt="" width={10050} className=""/>
      </div>
      <h2 className="flex justify-center font-Titulo text-3xl">Formulario</h2>
      <form  className="flex justify-center items-center flex-col gap-3 rounded-2xl font-Texto" > 
        <div>
          <label className=" font-Titulo">Nombre</label>
          <input type="text" name="" className="p-1 border-2 border-Amarillo w-full"/>
          
        </div>
        <div>
          <label className="font-Titulo">Direccion</label>
          <input type="text" name="" className="p-1 border-2 border-Amarillo w-full" />
        </div>
        <div>
          <label className="font-Titulo">Contacto</label>
          <input type="text" name="" className="p-1 border-2 border-Amarillo w-full" />
        </div>
        <div>
          <label className="font-Titulo">fecha</label>
          <input type="Date" name="" className="p-1 border-2 border-Amarillo w-full"/>
        </div>
        <button className="p-2 rounded-lg border-2 border-Amarillo bg-green-600/60">Enviar</button>
      </form>
    </div>
    
  );
};

export default Formulario;

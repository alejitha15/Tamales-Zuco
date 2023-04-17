import React from "react";
import FondoTwo from "../../assets/Fondo2.jpg"
// import {useForm} from "react-hook-form"

// const {register, handleSubmit}= useForm();
// const onSubmit = (data) => {
//     console.log(data);
//   }

const Formulario = () => {
  return (
    <div>
      <div className="h-16"> 
      <img src={FondoTwo} alt="" width={10050} className=""/>
      </div>
      <h2 className="flex justify-center font-Titulo text-3xl">Formulario</h2>
      <br/>
      <p className=" text-center font-Texto text-xl md:px-44 md:mx-20 font-semibold mb-7">Si quieres nuestros productos diligencia este formulario para que nosotros apartemos la fecha en la que quieres un pedido</p>
      <form  className="flex justify-center items-center flex-col gap-3 rounded-2xl font-Texto Border-2 border-verde w-full " > 
        <div>
          <label className=" font-Titulo">Nombre</label>
          <input type="text" name="" className="p-1 border-2 border-Amarillo w-full rounded-lg "/>
          
        </div>
        <div>
          <label className="font-Titulo">Direccion</label>
          <input type="text" name="" className="p-1 border-2 border-Amarillo w-full rounded-lg" />
        </div>
        <div>
          <label className="font-Titulo">Contacto</label>
          <input type="text" name="" className="p-1 border-2 border-Amarillo w-full rounded-lg" />
        </div>
        <div>
          <label className="font-Titulo">fecha</label>
          <input type="Date" name="" className="p-1 border-2 border-Amarillo w-full rounded-lg"/>
        </div>
        <div>
          <label className="font-Titulo">Mensaje</label>
          <input type="text" name="" placeholder="Cuentanos como quieres tu pedido" className="p-1 border-2 border-Amarillo w-full h-12 rounded-lg" />
        </div>
        <button className="p-2 px-5 rounded-lg border-2 border-Amarillo bg-green-600/60">Enviar</button>
      </form>
    </div>
    
  );
};

export default Formulario;